import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './styles/Learnings.css';

const Learnings = () => {
  const learningsData = [
    { 
      id: 1, 
      title: 'Basics of Cyber', 
      description: 'Took offline classes where I built a strong foundation in cybersecurity. Learned the basics of Linux commands, which are essential for navigating and securing systems. Explored various operating systems used in hacking, including Kali Linux, Parrot, and Backtrack, gaining hands-on experience with these powerful tools. This course sparked my passion for ethical hacking and cybersecurity, providing me with the skills to dig deeper into system vulnerabilities.', 
      date: '2019', 
      certificateUrl: "" 
    },
    { 
      id: 2, 
      title: 'Python Development', 
      description: 'Built foundational projects in Python, including a notepad, music player, and calculator. These projects helped me hone my skills in Python basics and understand how to use various libraries to create functional applications. This experience laid the groundwork for exploring more advanced concepts and building more complex projects in the future.', 
      date: '2021',
      certificateUrl: "https://drive.google.com/file/d/15GRDau03_NcLtB48XnNlH2qC7MKTjud8/view?usp=sharing" 
    },
    { 
      id: 3, 
      title: 'Web Development', 
      description: 'Gained hands-on experience in building dynamic web applications using Python-based frameworks like Flask and front-end technologies such as React. Focused on creating interactive, responsive websites by leveraging Flask for backend development and React for building modern user interfaces. This helped me build a solid foundation in full-stack web development and sharpened my skills in integrating frontend and backend technologies effectively.', 
      date: '2022',
      certificateUrl: ""
    },
    { 
      id: 4, 
      title: 'Cybersecurity Internship', 
      description: 'During my virtual internship at "Tutelr," I gained hands-on experience in penetration testing, red teaming, and digital forensics. I worked with tools such as Syngsong, Hashcat, and zxcvbn to sharpen my skills in password cracking and security assessments. I also explored Configuration Hardening Assessment with PowerShell Script (CHAPS) and used SIFT Workstation for Digital Forensics and Incident Response. This internship significantly strengthened my understanding of key cybersecurity concepts and techniques.', 
      date: '2023',
      certificateUrl: "https://drive.google.com/file/d/1PiOTdYHQaXb1MfYgHUxpNw4nOD27euvu/view?usp=sharing" 
    },
    { 
      id: 5, 
      title: 'SANS Webinar', 
      description: 'I successfully completed the "Ransomware Summit 2023" webinar hosted by the SANS Institute on June 23, 2023. This online course focused on specialized knowledge and applications in the field of cybersecurity, specifically ransomware threats. The summit offered valuable insights into ransomware attack tactics, prevention strategies, and response protocols. It was a live event that earned me 6 CPE credits, enhancing my expertise in combating ransomware and advancing my understanding of the evolving cybersecurity landscape.', 
      date: '2023',
      certificateUrl: "https://drive.google.com/file/d/1gb211ZGlKqwCDcKHyJdN0MMDyPocuF1T/view?usp=sharing" 
    },
    { 
      id: 6, 
      title: 'Preparing for eJPT Exam', 
      description: 'I am actively preparing for the eJPT (Junior Penetration Tester) certification, which involves gaining hands-on skills in real-world penetration testing scenarios. To strengthen my knowledge, I am engaging in platforms like TryHackMe, PicoCTF, and PortSwigger. These platforms are helping me sharpen my skills in areas such as vulnerability exploitation, web application attacks, network security, and penetration testing methodologies, giving me a solid foundation in cybersecurity and Red Team techniques.', 
      date: 'Jun 2024',
      certificateUrl: "https://drive.google.com/file/d/1tpulRGCy3vL9gK_tns6NZTAgFMSIlgFQ/view?usp=sharing" 
    },
    { 
      id: 7, 
      title: 'Smart India Hackathon 2024 Grand Finalist', 
      description: 'What an electrifying experience it has been! Reaching the Grand Finals of Smart India Hackathon (SIH) 2024 - Software Edition at IIT Kharagpur was truly a dream come true for me and my team. As the team leader, I had the privilege of guiding an incredible team through this intense journey. While we didn’t take the win, the knowledge, skills, and opportunities we gained were absolutely invaluable. Our project, CyberFeed, aimed to provide real-time feeds on cyber incidents impacting Indian cyberspace. With live data feeds, detailed analysis, AI-driven consultations, and automated report generation, we pushed the boundaries of cybersecurity innovation. This experience has only amplified my passion for cybersecurity and made me more excited than ever to keep learning, growing, and making a real impact in this field. A huge thank you to IIT Kharagpur and NTRO for providing us with this amazing platform!',
      date: 'Dec 2024',
      certificateUrl: ''
    }
        
  ];

  // State to keep track of the selected learning
  const [selectedLearning, setSelectedLearning] = useState(learningsData[0]);

  // Function to handle the click and update the selected learning
  const handleLearningClick = (learning) => {
    setSelectedLearning(learning);
  };

  return (
    <section id="learnings" className="learnings-section">
      <h2 id='title_over'>Learnings</h2>
      <div className="learnings-container">
        {/* Left Column: Timeline */}
        <div className="timeline-column">
          <VerticalTimeline>
            {learningsData.map((learning) => (
              <VerticalTimelineElement
                key={learning.id}
                className="vertical-timeline-element--work"
                contentArrowStyle={{
                  borderRight: '7px solid rgba(255, 255, 255, 0.1)',
                }}
                date={learning.date}
                iconStyle={{ 
                  background: 'black', 
                  color: '#fff',
                  width: '15px',  
                  height: '15px',
                  marginLeft: '-6px',
                  marginTop: '15px',
                }}
              >
                {/* Wrapping title in a div with onClick to ensure it's clickable */}
                <div onClick={() => handleLearningClick(learning)} style={{ cursor: 'pointer' }}>
                  <h3 className="vertical-timeline-element-title">{learning.title}</h3>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Right Column: Description */}
        <div className="description-column">
          <div className="description-box">
            <h3>{selectedLearning.title}</h3>
            <p>{selectedLearning.description}</p>
            {selectedLearning.certificateUrl && (
              <button 
                className="certificate-button" 
                onClick={() => window.location.href = selectedLearning.certificateUrl}
              >
                View Certificate
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learnings;
