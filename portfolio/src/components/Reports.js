// Report.js
import React, { useState } from 'react';
import './styles/Reports.css';

const reportData = [
  {
    title: "CHAPS",
    description: "Configuration Hardening Assessment with PowerShell(CHAPS). This report provides an assessment of system security settings on Windows machines using the CHAPS PowerShell script. It highlights key findings, such as missing BitLocker encryption, insufficient PowerShell logging, and improper credential settings. The report also offers recommendations for improving system security, such as enabling BitLocker and configuring Credential Guard, along with detailed execution steps and screenshots for clarity.",
    fullReport: "This report presents an in-depth analysis of system security settings conducted using the CHAPS PowerShell script. The CHAPS script is an automated tool that scans Windows machines to assess their security configuration, highlighting areas that may pose security risks. The following sections detail the execution process, key findings, and remediation recommendations."
  },
  {
    title: "Report 2",
    description: "Description for Report 2. This report talks about the vulnerabilities discovered in a specific application and its potential impacts.",
    fullReport: "Full Report content for Report 2 would go here. It explains the application vulnerabilities in detail."
  },
  {
    title: "Report 3",
    description: "This report focuses on the detailed analysis of cyberattack strategies used in recent events and how to mitigate them.",
    fullReport: "Full Report content for Report 3 would go here. It discusses mitigation strategies for cyberattacks."
  },
  {
    title: "Report 4",
    description: "Report 4 contains analysis of different security incidents that happened over the last year and recommendations for improvement.",
    fullReport: "Full Report content for Report 4 would go here. It provides recommendations based on security incidents."
  }
];

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState(null);

  const handleClick = (index) => {
    setSelectedReport(reportData[index]);
  };

  const handleViewFullReport = () => {
    alert(selectedReport.fullReport); // You can replace this with navigation to another page or modal to show the full report
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
