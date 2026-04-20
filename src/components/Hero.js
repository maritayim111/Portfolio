import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Digital Marketing & Content Creator';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    // Create a simple PDF or document link
    const cvData = `
    MARITA YIM
    Digital Marketing & Content Creator
    
    Contact:
    Phone: +855 979650919
    Email: yimmarita35@gmail.com
    Location: #353, Ta Khmao, Kandal
    
    Education:
    - SETEC Institute (2025 – Present) - Management Information Systems
    - Hun Sen High School, Takhmao (2019–2021)
    - Short Course: Web Design (CSTAD | June–Aug 2025)
    
    Experience:
    - Digital Marketing & Content Creator at CPL (2026 – Present)
    
    Skills:
    - Digital Marketing
    - Content Creation
    - Social Media Marketing
    - SEO Basics
    `;
    
    const blob = new Blob([cvData], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Marita_YIM_CV.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-12">
        {/* Left Content */}
        <div className="flex-1 slide-in-left w-full">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Hello, I'm Marita YIM
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6 min-h-[3.5rem] md:h-16 flex items-center">
            <span className="typing-text">{displayText}</span>
          </div>

          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
            I'm a third-year student in Management Information Systems at SETEC Institute. 
            Passionate about creating content, managing social platforms, and building 
            marketing campaigns that increase awareness, engagement, and conversions.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 sm:gap-4 flex-wrap">
            <a
              href="#projects"
              className="btn btn-primary"
            >
              <i className="fas fa-briefcase mr-2"></i>
              View My Work
            </a>
            <button
              onClick={handleDownloadCV}
              className="btn btn-outline"
            >
              <i className="fas fa-download mr-2"></i>
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 sm:gap-6 mt-8 flex-wrap">
            <a
              href="https://www.facebook.com/marita.yim.1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a
              href="https://www.tiktok.com/@oknha_chengkheng?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all"
            >
              <i className="fab fa-tiktok text-xl"></i>
            </a>
            <a
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-600 hover:text-white transition-all"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>

          <div className="mt-10 max-w-xl rounded-3xl border border-blue-100 dark:border-blue-900/40 bg-white/80 dark:bg-gray-800/80 p-4 shadow-lg backdrop-blur">
            {/* <img
              src="/images/digital-marketing.svg"
              alt="Digital marketing illustration"
              className="w-full h-auto rounded-2xl"
            /> */}
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex-1 slide-in-right flex justify-center w-full">
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-700 p-2 shadow-2xl float overflow-hidden">
            <img 
              src="/img/profile.jpg" 
              alt="Marita YIM - Profile" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
