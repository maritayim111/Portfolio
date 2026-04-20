import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#', label: 'Facebook' },
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/%E1%9E%A7%E1%9E%80%E1%9E%89%E1%9F%89%E1%9E%B6-%E1%9E%85%E1%9F%81%E1%9E%84%E1%9E%81%E1%9F%81%E1%9E%84-cheng-kheng-1309403b9/?isSelfProfile=true', label: 'LinkedIn' },
    { icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@oknha_chengkheng?lang=en', label: 'TikTok' },
    { icon: 'fab fa-github', url: '#', label: 'GitHub' },
    { icon: 'fab fa-instagram', url: '#', label: 'Instagram' },
    { icon: 'fab fa-twitter', url: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-gray-700">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Marita YIM</h3>
            <p className="text-gray-400 mb-6">
              Web Developer & Digital Marketing Specialist dedicated to creating modern, 
              responsive web solutions and engaging digital experiences.
            </p>
            <p className="text-gray-500 text-sm">
              Based in Cambodia | Available for projects worldwide
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-xs"></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <i className="fas fa-envelope text-blue-400 mt-1"></i>
                <a href="mailto:yimmarita35@gmail.com" className="hover:text-blue-400 transition-colors">
                  yimmarita35@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-phone text-blue-400 mt-1"></i>
                <a href="tel:+855979650919" className="hover:text-blue-400 transition-colors">
                  +855 979650919
                </a>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-map-marker-alt text-blue-400 mt-1"></i>
                <span>#353, Ta Khmao, Kandal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <p className="text-gray-500 text-center md:text-left">
            &copy; {currentYear} Marita YIM. All rights reserved. | 
            <span className="ml-2">Designed with <i className="fas fa-heart text-red-500"></i> using React & Tailwind CSS</span>
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                title={social.label}
              >
                <i className={`${social.icon} text-sm`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="#home"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <i className="fas fa-arrow-up"></i>
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
