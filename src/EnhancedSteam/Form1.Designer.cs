namespace EnhancedSteam
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.chkEnable = new System.Windows.Forms.CheckBox();
            this.chkMinToTray = new System.Windows.Forms.CheckBox();
            this.ntfTrayIcon = new System.Windows.Forms.NotifyIcon(this.components);
            this.lblByJshackles = new System.Windows.Forms.Label();
            this.lnkDonate = new System.Windows.Forms.LinkLabel();
            this.mnuTop = new System.Windows.Forms.MenuStrip();
            this.fileToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.exitToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.helpToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.aboutToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.mnuCheckForUpdates = new System.Windows.Forms.ToolStripMenuItem();
            this.toolStripMenuItem1 = new System.Windows.Forms.ToolStripSeparator();
            this.automaticUpdater1 = new wyDay.Controls.AutomaticUpdater();
            this.mnuTop.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.automaticUpdater1)).BeginInit();
            this.SuspendLayout();
            // 
            // chkEnable
            // 
            this.chkEnable.AutoSize = true;
            this.chkEnable.Location = new System.Drawing.Point(12, 27);
            this.chkEnable.Name = "chkEnable";
            this.chkEnable.Size = new System.Drawing.Size(102, 17);
            this.chkEnable.TabIndex = 0;
            this.chkEnable.Text = "Enhance Steam";
            this.chkEnable.UseVisualStyleBackColor = true;
            this.chkEnable.CheckedChanged += new System.EventHandler(this.chkEnable_CheckedChanged);
            // 
            // chkMinToTray
            // 
            this.chkMinToTray.AutoSize = true;
            this.chkMinToTray.Location = new System.Drawing.Point(12, 50);
            this.chkMinToTray.Name = "chkMinToTray";
            this.chkMinToTray.Size = new System.Drawing.Size(139, 17);
            this.chkMinToTray.TabIndex = 1;
            this.chkMinToTray.Text = "Minimize to System Tray";
            this.chkMinToTray.UseVisualStyleBackColor = true;
            this.chkMinToTray.CheckedChanged += new System.EventHandler(this.chkMinToTray_CheckedChanged);
            // 
            // ntfTrayIcon
            // 
            this.ntfTrayIcon.Icon = ((System.Drawing.Icon)(resources.GetObject("ntfTrayIcon.Icon")));
            this.ntfTrayIcon.Text = "Enhanced Steam";
            this.ntfTrayIcon.MouseDoubleClick += new System.Windows.Forms.MouseEventHandler(this.ntfTrayIcon_MouseDoubleClick);
            // 
            // lblByJshackles
            // 
            this.lblByJshackles.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right)));
            this.lblByJshackles.AutoSize = true;
            this.lblByJshackles.Location = new System.Drawing.Point(128, 77);
            this.lblByJshackles.Name = "lblByJshackles";
            this.lblByJshackles.Size = new System.Drawing.Size(150, 13);
            this.lblByJshackles.TabIndex = 2;
            this.lblByJshackles.Text = "Enhanced Steam by jshackles";
            // 
            // lnkDonate
            // 
            this.lnkDonate.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right)));
            this.lnkDonate.AutoSize = true;
            this.lnkDonate.Location = new System.Drawing.Point(236, 90);
            this.lnkDonate.Name = "lnkDonate";
            this.lnkDonate.Size = new System.Drawing.Size(42, 13);
            this.lnkDonate.TabIndex = 3;
            this.lnkDonate.TabStop = true;
            this.lnkDonate.Text = "Donate";
            this.lnkDonate.LinkClicked += new System.Windows.Forms.LinkLabelLinkClickedEventHandler(this.lnkDonate_LinkClicked);
            // 
            // mnuTop
            // 
            this.mnuTop.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.fileToolStripMenuItem,
            this.helpToolStripMenuItem});
            this.mnuTop.Location = new System.Drawing.Point(0, 0);
            this.mnuTop.Name = "mnuTop";
            this.mnuTop.RightToLeft = System.Windows.Forms.RightToLeft.No;
            this.mnuTop.Size = new System.Drawing.Size(283, 24);
            this.mnuTop.TabIndex = 4;
            // 
            // fileToolStripMenuItem
            // 
            this.fileToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.exitToolStripMenuItem});
            this.fileToolStripMenuItem.Name = "fileToolStripMenuItem";
            this.fileToolStripMenuItem.Size = new System.Drawing.Size(37, 20);
            this.fileToolStripMenuItem.Text = "&File";
            // 
            // exitToolStripMenuItem
            // 
            this.exitToolStripMenuItem.Name = "exitToolStripMenuItem";
            this.exitToolStripMenuItem.Size = new System.Drawing.Size(92, 22);
            this.exitToolStripMenuItem.Text = "E&xit";
            this.exitToolStripMenuItem.Click += new System.EventHandler(this.exitToolStripMenuItem_Click);
            // 
            // helpToolStripMenuItem
            // 
            this.helpToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.mnuCheckForUpdates,
            this.toolStripMenuItem1,
            this.aboutToolStripMenuItem});
            this.helpToolStripMenuItem.Name = "helpToolStripMenuItem";
            this.helpToolStripMenuItem.Size = new System.Drawing.Size(44, 20);
            this.helpToolStripMenuItem.Text = "&Help";
            // 
            // aboutToolStripMenuItem
            // 
            this.aboutToolStripMenuItem.Name = "aboutToolStripMenuItem";
            this.aboutToolStripMenuItem.Size = new System.Drawing.Size(171, 22);
            this.aboutToolStripMenuItem.Text = "&About";
            this.aboutToolStripMenuItem.Click += new System.EventHandler(this.aboutToolStripMenuItem_Click);
            // 
            // mnuCheckForUpdates
            // 
            this.mnuCheckForUpdates.Name = "mnuCheckForUpdates";
            this.mnuCheckForUpdates.Size = new System.Drawing.Size(171, 22);
            this.mnuCheckForUpdates.Text = "&Check for Updates";
            this.mnuCheckForUpdates.Click += new System.EventHandler(this.mnuCheckForUpdates_Click);
            // 
            // toolStripMenuItem1
            // 
            this.toolStripMenuItem1.Name = "toolStripMenuItem1";
            this.toolStripMenuItem1.Size = new System.Drawing.Size(168, 6);
            // 
            // automaticUpdater1
            // 
            this.automaticUpdater1.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.automaticUpdater1.ContainerForm = this;
            this.automaticUpdater1.GUID = "431cbc71-0283-42a0-b961-81448d4a7828";
            this.automaticUpdater1.Location = new System.Drawing.Point(12, 90);
            this.automaticUpdater1.Name = "automaticUpdater1";
            this.automaticUpdater1.Size = new System.Drawing.Size(16, 16);
            this.automaticUpdater1.TabIndex = 5;
            this.automaticUpdater1.wyUpdateCommandline = null;
            this.automaticUpdater1.ClosingAborted += new System.EventHandler(this.automaticUpdater1_ClosingAborted);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(283, 112);
            this.Controls.Add(this.automaticUpdater1);
            this.Controls.Add(this.lnkDonate);
            this.Controls.Add(this.lblByJshackles);
            this.Controls.Add(this.chkMinToTray);
            this.Controls.Add(this.chkEnable);
            this.Controls.Add(this.mnuTop);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MainMenuStrip = this.mnuTop;
            this.MaximizeBox = false;
            this.Name = "Form1";
            this.Text = "Enhanced Steam";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.Form1_FormClosing);
            this.Load += new System.EventHandler(this.Form1_Load);
            this.Resize += new System.EventHandler(this.Form1_Resize);
            this.mnuTop.ResumeLayout(false);
            this.mnuTop.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.automaticUpdater1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.CheckBox chkEnable;
        private System.Windows.Forms.CheckBox chkMinToTray;
        private System.Windows.Forms.NotifyIcon ntfTrayIcon;
        private System.Windows.Forms.Label lblByJshackles;
        private System.Windows.Forms.LinkLabel lnkDonate;
        private System.Windows.Forms.MenuStrip mnuTop;
        private System.Windows.Forms.ToolStripMenuItem fileToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem exitToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem helpToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem aboutToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem mnuCheckForUpdates;
        private System.Windows.Forms.ToolStripSeparator toolStripMenuItem1;
        private wyDay.Controls.AutomaticUpdater automaticUpdater1;


    }
}

