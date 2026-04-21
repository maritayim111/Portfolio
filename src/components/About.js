import React from 'react';

const About = () => {
  const skills = [
    { icon: 'fas fa-hashtag', name: 'Social Media Marketing' },
    { icon: 'fas fa-pen-nib', name: 'Content Creation' },
    { icon: 'fas fa-search', name: 'SEO Basics' },
    { icon: 'fas fa-bullhorn', name: 'Digital Ads' },
    { icon: 'fas fa-chart-line', name: 'Analytics' },
    { icon: 'fas fa-comments', name: 'Community Management' }
  ];

  return (
    <section id="about" className="section bg-white dark:bg-gray-800">
      <div className="container-fluid">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-700 p-2 shadow-xl overflow-hidden">
              <img 
                src="/img/profile_1.JPG" 
                alt="Marita YIM - Profile" 
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="fade-in">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Who Am I?
            </h3>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am a third-year, second-semester student in Management Information Systems at SETEC Institute, focused on digital marketing, content creation, and social media growth.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I create clean marketing content, manage campaigns, and build audience engagement 
              strategies that help brands grow online with clear and measurable results.
            </p>

            <div className="mb-8 rounded-3xl border border-blue-100 dark:border-blue-900/40 bg-white dark:bg-gray-700 p-4 shadow-lg">
              {/* <img
                src="/images/digital-marketing.svg"
                alt="Digital marketing illustration"
                className="w-full h-auto rounded-2xl"
              /> */}
            </div>

            {/* Key Skills */}
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Key Skills
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="card flex flex-col items-center justify-center py-8 text-center hover:bg-blue-50 dark:hover:bg-gray-700"
                >
                  <i className={`${skill.icon} text-3xl text-blue-600 dark:text-blue-400 mb-3`}></i>
                  <p className="font-semibold text-gray-900 dark:text-white">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
