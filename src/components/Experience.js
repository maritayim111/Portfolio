import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Personal Branding & Content Creator for CEO',
      company: 'CPL (Cambodia Properties Limited)',
      duration: '2026 – Present',
      type: 'Full-time',
      description: [
        'Manage and develop the CEO’s personal brand identity',
        'Create high-quality content aligned with the CEO’s vision and business goals',
        'Produce social media posts, captions, and storytelling content',
        'Design visual content to strengthen executive branding',
        'Support online presence across Facebook, Instagram, and other platforms',
        'Plan and execute content strategies for personal branding growth',
        'Maintain a consistent and professional brand image'
      ],
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Social Media Content Creator',
      company: 'CF SPORT CHBAR AMPOV, Phnom Penh, Cambodia',
      duration: 'Sep 2023 – 2024',
      type: 'Full-time',
      description: [
        'Assisted with creating content for Facebook and social media pages',
        'Helped support marketing activities and improve page engagement',
        'Manage Facebook pages and create content on a daily basis',
        'Design posts and visuals to keep the page active and engaging',
        'Communicate with clients and handle content requests'
      ],
      icon: 'fas fa-bullhorn'
    },
    {
      title: 'Freelance Content Creator',
      company: 'Freelance',
      duration: '1+ Year',
      type: '2024-2026',
      description: [
        'Have over one year of experience as a freelance Content Creator, specializing in managing and growing Facebook pages',
        'Plan and create engaging content, write captions, and maintain consistent posting schedules to increase audience engagement',
        'Design creative and visually appealing posters aligned with brand identity and marketing goals',
        'Develop strong skills in social media management, content strategy, and graphic design through hands-on campaign execution',
        'Help businesses build their online presence effectively through consistent content and page management'
      ],
      icon: 'fas fa-pen-nib'
    }
  ];

  const managedPages = [
    {
      name: 'Facebook Page (Company)',
      url: 'https://www.facebook.com/CambodiaPropertiesLimited'
    },
    {
      name: 'Company Page',
      url: 'https://www.facebook.com/profile.php?id=61581223273653'
    },
    {
      name: 'Personal / Content Page 1',
      url: 'https://www.facebook.com/profile.php?id=100071333023307'
    },
    {
      name: 'Personal / Content Page 2',
      url: 'https://www.facebook.com/profile.php?id=100095347693117'
    },
    {
      name: 'Personal / Content Page 3',
      url: 'https://www.facebook.com/profile.php?id=61564219858448'
    },
    {
      name: 'Personal / Content Page 4',
      url: 'https://www.facebook.com/youlikelove111'
    }
  ];

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-fluid">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          My <span className="text-blue-600 dark:text-blue-400">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto mb-12 rounded-3xl border border-blue-100 dark:border-blue-900/40 bg-white dark:bg-gray-800 p-4 shadow-lg">
          {/* <img
            src="/images/digital-marketing.svg"
            alt="Digital marketing strategy illustration"
            className="w-full h-auto rounded-2xl"
          /> */}
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="fade-in">
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-24 border-l-2 border-blue-600 dark:border-blue-400"></div>
              )}

              <div className="card mb-8 md:flex md:gap-8 relative md:mx-auto md:w-3/4">
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute -left-16 top-8 items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center">
                    <i className={`${exp.icon} text-white text-lg`}></i>
                  </div>
                </div>

                <div className="flex-1">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2 flex-col md:flex-row md:text-center">
                    <div className="w-full">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-center mt-2 md:mt-0 md:w-full">
                      <p className="text-sm font-bold text-gray-600 dark:text-gray-400">
                        {exp.duration}
                      </p>
                      <span className="inline-block mt-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full font-semibold">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 mt-4">
                    {exp.description.map((point, idx) => (
                      <li key={idx} className="flex gap-3">
                        <i className="fas fa-check text-green-500 mt-1"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-16 border-t dark:border-gray-700">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Pages <span className="text-blue-600 dark:text-blue-400">I Manage</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {managedPages.map((page) => (
              <a
                key={page.url}
                href={page.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center justify-between gap-4 hover:bg-blue-50 dark:hover:bg-gray-700"
              >
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{page.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 break-all">{page.url}</p>
                </div>
                <i className="fas fa-external-link-alt text-blue-600 dark:text-blue-400"></i>
              </a>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center fade-in">
              <div className="text-4xl text-blue-600 dark:text-blue-400 mb-3">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Campaigns Completed</h4>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">6+</p>
            </div>

            <div className="card text-center fade-in">
              <div className="text-4xl text-blue-600 dark:text-blue-400 mb-3">
                <i className="fas fa-smile"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Content Assets</h4>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</p>
            </div>

            <div className="card text-center fade-in">
              <div className="text-4xl text-blue-600 dark:text-blue-400 mb-3">
                <i className="fas fa-award"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Skills Focus</h4>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</p>
            </div>
          </div>

          <div className="mt-16 card">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Focus <span className="text-blue-600 dark:text-blue-400">Areas</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Executive Personal Branding',
                'Thought Leadership Content',
                'Corporate Social Media Strategy',
                'Storytelling & Content Marketing'
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/40 px-4 py-5 text-center font-semibold text-gray-900 dark:text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
