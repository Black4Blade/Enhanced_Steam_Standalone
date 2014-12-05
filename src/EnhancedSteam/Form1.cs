using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using Microsoft.Win32;

namespace EnhancedSteam
{
    public partial class Form1 : Form
    {
        ProxyModule proxy = new ProxyModule();
        Boolean isLoaded = false;

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {            
            if (!automaticUpdater1.ClosingForInstall)
            {
                load_settings();
                isLoaded = true;
            }
            lnkDonate.Links.Add(0,6, "www.EnhancedSteam.com/donate.php");

            check_for_updates();
        }

        private void Form1_FormClosing(Object sender, FormClosingEventArgs e) 
        {
            proxy.closeproxy();
        }

        private void Form1_Resize(object sender, EventArgs e)
        {
            if (this.WindowState == FormWindowState.Minimized && chkMinToTray.Checked == true)
            {
                ntfTrayIcon.Visible = true;
                this.ShowInTaskbar = false;
            }
        }

        private void save_settings()
        {
            if (isLoaded)
            {
                Properties.Settings.Default.Enable = chkEnable.Checked;
                Properties.Settings.Default.MinToTray = chkMinToTray.Checked;
                Properties.Settings.Default.Save();
            }
        }

        private void load_settings()
        {
            chkEnable.Checked = Properties.Settings.Default.Enable;
            chkMinToTray.Checked = Properties.Settings.Default.MinToTray;
        }

        private void chkEnable_CheckedChanged(object sender, EventArgs e)
        {
            if (chkEnable.Checked)
            {
                proxy.startproxy();
            }
            else
            {
                proxy.closeproxy();
            }
            save_settings();
        }

        private void chkMinToTray_CheckedChanged(object sender, EventArgs e)
        {
            save_settings();
        }

        private void ntfTrayIcon_MouseDoubleClick(object sender, MouseEventArgs e)
        {
            this.WindowState = FormWindowState.Normal;
            this.ShowInTaskbar = true;
            ntfTrayIcon.Visible = false;
        }

        private void lnkDonate_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            System.Diagnostics.Process.Start(e.Link.LinkData.ToString());
        }

        private void exitToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void aboutToolStripMenuItem_Click(object sender, EventArgs e)
        {
            using (AboutBox1 box = new AboutBox1())
            {
                box.ShowDialog(this);
            }
        }

        private void check_for_updates()
        {
            automaticUpdater1.ForceCheckForUpdate();
        }

        private void automaticUpdater1_ClosingAborted(object sender, EventArgs e)
        {
            load_settings();
        }

        private void mnuCheckForUpdates_Click(object sender, EventArgs e)
        {
            check_for_updates();
        }
    }
}
