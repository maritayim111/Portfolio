import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    if (formData.name && formData.email && formData.message) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: '#353, Ta Khmao, Kandal, Cambodia',
      link: '#'
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+855 979650919',
      link: 'tel:+855979650919'
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'yimmarita35@gmail.com',
      link: 'mailto:yimmarita35@gmail.com'
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#', label: 'Facebook' },
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/%E1%9E%A7%E1%9E%80%E1%9E%89%E1%9F%89%E1%9E%B6-%E1%9E%85%E1%9F%81%E1%9E%84%E1%9E%81%E1%9F%81%E1%9E%84-cheng-kheng-1309403b9/?isSelfProfile=true', label: 'LinkedIn' },
    { icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@oknha_chengkheng?lang=en', label: 'TikTok' },
    { icon: 'fab fa-github', url: '#', label: 'GitHub' },
    { icon: 'fab fa-instagram', url: '#', label: 'Instagram' }
  ];

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-fluid">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Get <span className="text-blue-600 dark:text-blue-400">In Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="card fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                <i className="fas fa-check-circle mr-2"></i>
                Thank you! Your message has been received. I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="fade-in">
            {/* Contact Cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="card flex gap-4 hover:bg-blue-50 dark:hover:bg-gray-700"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <i className={`${info.icon} text-blue-600 dark:text-blue-400 text-lg`}></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {info.label}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h4>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all"
                    title={social.label}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Info */}
            <div className="card mt-8 bg-blue-50 dark:bg-blue-900 border-l-4 border-l-blue-600 flex items-start gap-3">
              <i className="fas fa-info-circle text-blue-600 dark:text-blue-400 text-xl mt-1"></i>
              <p className="text-blue-800 dark:text-blue-200">
                I'm always happy to hear from you. I'll try to respond to your message within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
