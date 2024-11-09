// Report.js
import React, { useState } from 'react';
import './styles/Reports.css';

const reportData = [
  {
    title: "CHAPS",
    description: "Configuration Hardening Assessment with PowerShell(CHAPS). This report provides an assessment of system security settings on Windows machines using the CHAPS PowerShell script. It highlights key findings, such as missing BitLocker encryption, insufficient PowerShell logging, and improper credential settings. The report also offers recommendations for improving system security, such as enabling BitLocker and configuring Credential Guard, along with detailed execution steps and screenshots for clarity.",
    fullReport: "https://drive.google.com/file/d/1Rw57Ft2CLUMu3slu18O_Jc9sU37DcFLW/view?usp=sharing"
  },
  {
    title: "SIFT",
    description: "The SANS Investigative Forensic Toolkit (SIFT) is a comprehensive suite of tools used for digital forensic analysis and incident response on Linux systems. This toolkit allows investigators to perform detailed analyses of disk images, file systems, and memory captures, which can help uncover crucial information in digital investigations. Key findings may include identifying deleted files, examining system logs, and analyzing network connections. This report provides actionable insights and recommended steps for further investigation, with clear execution steps and screenshots for better understanding.",
    fullReport: "https://drive.google.com/file/d/1_XIqnrcwgaLAAs-OabI1wXZRGUCKMy4Q/view?usp=sharing"
  },
  {
    title: "Penetration Testing",
    description: "This report details the penetration testing and red teaming methodologies used to identify vulnerabilities and assess security defenses within an organization’s infrastructure. The tools and techniques included in this report focus on various aspects of offensive security, from reconnaissance and exploitation to post-exploitation activities. Key tools used in this assessment include Syngsong for initial introduction and testing, Hashcat for password cracking, and zxcvbn for password strength analysis. Each tool’s usage, key findings, and improvement recommendations are provided with detailed execution steps and screenshots.",
    fullReport: "https://drive.google.com/file/d/1FJC18j6aZK8O8J9bdIHW3b0rjaJmMlPW/view?usp=sharing"
  }
];

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState(null);

  const handleClick = (index) => {
    setSelectedReport(reportData[index]);
  };

  const handleViewFullReport = () => {
    if (selectedReport && selectedReport.fullReport) {
      window.location.replace(selectedReport.fullReport);
    }
  };

  return (
    <div className="reports-container" id="reports">
      <div className="heading">Reports</div>
      <div className="reports-content">
        <div className="reports-left">
          <div className="report-list">
            {reportData.map((report, index) => (
              <div 
                key={index} 
                className="report-title" 
                onClick={() => handleClick(index)}
              >
                {report.title}
              </div>
            ))}
          </div>
        </div>
        <div className="reports-right">
          {selectedReport ? (
            <div className="report-description">
              <h3>{selectedReport.title}</h3>
              <p>{selectedReport.description}</p>
              <button className="view-full-report" onClick={handleViewFullReport}>
                View Full Report
              </button>
            </div>
          ) : (
            <div className="select-report">
              <p>Select a report to view the description.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;
