using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;
using System.Text;
using System.IO;
using System.Threading;
using Fiddler;

namespace EnhancedSteam
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Form1());

            int iProcCount = Environment.ProcessorCount;
            int iMinWorkerThreads = Math.Max(16, 6 * iProcCount);
            int iMinIOThreads = iProcCount;
            ThreadPool.SetMinThreads(iMinWorkerThreads, iMinIOThreads);
        }
    }

    public class ProxyModule
    {

        string js = "";
        string css = "";
        
        public void startproxy()
        {
            js = File.ReadAllText("enhancedsteam.js");
            css = File.ReadAllText("enhancedsteam.css");

            if (!Fiddler.FiddlerApplication.IsStarted())
            {
                FiddlerApplication.BeforeRequest += new Fiddler.SessionStateHandler(ActionBeforeRequest);
                FiddlerApplication.BeforeResponse += new Fiddler.SessionStateHandler(ActionBeforeResponse);
                FiddlerApplication.Startup(48793, true, false, false);
            }
        }

        public void closeproxy()
        {
            FiddlerApplication.BeforeRequest -= ActionBeforeRequest;
            FiddlerApplication.BeforeResponse -= ActionBeforeResponse;
            FiddlerApplication.Shutdown();
            System.Threading.Thread.Sleep(500);
        }

        public void ActionBeforeRequest(Fiddler.Session oSession)
        {
            if (oSession.HostnameIs("steamcommunity.com") || oSession.HostnameIs("store.steampowered.com"))
            {
                oSession.bBufferResponse = true;
            }
            else
            {
                oSession.Ignore();
            }
        }

        public void ActionBeforeResponse(Fiddler.Session oSession)
        {
            if (oSession.HostnameIs("steamcommunity.com") || oSession.HostnameIs("store.steampowered.com"))
            {
                if ((null == oSession.responseBodyBytes) || (null == oSession.oResponse) || (null == oSession.oResponse.headers))
                {
                    return;
                }

                string althost = "";
                if (oSession.HostnameIs("steamcommunity.com")) althost = "http://store.steampowered.com";
                if (oSession.HostnameIs("store.steampowered.com")) althost = "http://steamcommunity.com";

                if (!(oSession.oResponse.headers.ExistsAndEquals("Access-Control-Allow-Origin", althost)))
                {
                    oSession.oResponse.headers.Add("Access-Control-Allow-Origin", althost);
                    oSession.oResponse.headers.Add("Access-Control-Allow-Credentials", "true");
                }
            
                oSession.bBufferResponse = true;
                if (oSession.oResponse.headers.ExistsAndContains("Content-Type", "html"))
                {
                    oSession.utilDecodeResponse();
                    Encoding oEnc = Utilities.getResponseBodyEncoding(oSession);
                    string sBody = Utilities.GetStringFromArrayRemovingBOM(oSession.responseBodyBytes, oEnc);
                    int iStart = 0;
                    int iHeadPtr = 0;
                    do
                    {
                        iHeadPtr = sBody.IndexOf("<head", iStart, Math.Min(1024, sBody.Length-iStart), StringComparison.OrdinalIgnoreCase);  //Find <HEAD within first 1k characters
                        if (0 > iHeadPtr) 
                        {
                            return;
                        }
                        if ((sBody.Length > (iHeadPtr + 5) && (sBody[iHeadPtr + 5] != '>') && ((int)(sBody[iHeadPtr + 5]) > 0x21) && (int)(sBody[iHeadPtr + 5]) < 0x7a))
                        {                            
                            iStart = iHeadPtr + 5;
                            iHeadPtr = -1;
                        }
                    } while (0 > iHeadPtr);

                    iStart = iHeadPtr + 1;
                    int iInsertPtr = sBody.IndexOf(">", iStart, Math.Min(2048, sBody.Length - iStart), StringComparison.OrdinalIgnoreCase);  // Find > within next 2k
                    if (0 > iHeadPtr)
                    {
                        return;
                    }
                    oSession.responseBodyBytes = oEnc.GetBytes(sBody.Insert(iInsertPtr + 1, "\r\n<style>" + css + "</style>\r\n<script type='text/javascript'>" + js + "</script>\r\n"));
                    oSession.oResponse.headers["Content-Length"] = oSession.responseBodyBytes.LongLength.ToString();
                }
            }
        }
    }
}
