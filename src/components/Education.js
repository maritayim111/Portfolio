import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: 'SETEC Institute',
      degree: 'Management Information Systems',
      duration: '2025 – Present',
      description: 'Currently pursuing a degree in Management Information Systems. Learning about database design, business systems, and IT management.',
      icon: 'fas fa-university'
    },
    {
      institution: 'Hun Sen High School, Takhmao',
      degree: 'High School Diploma',
      duration: '2019 – 2021',
      description: 'Completed high school education with a focus on STEM subjects including mathematics, physics, and chemistry.',
      icon: 'fas fa-school'
    },
    {
      institution: 'CSTAD',
      degree: 'Short Course: Web Design',
      duration: 'June – August 2025',
      description: 'Intensive web design course covering HTML5, CSS3, Responsive Design, and UI/UX basics. Completed hands-on projects and assignments.',
      icon: 'fas fa-code'
    }
  ];

  return (
    <section id="education" className="section bg-white dark:bg-gray-800">
      <div className="container-fluid">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          My <span className="text-blue-600 dark:text-blue-400">Education</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="card fade-in hover:border-l-4 hover:border-l-blue-600"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <i className={`${edu.icon} text-white text-2xl`}></i>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-400 whitespace-nowrap mt-2 md:mt-0">
                        {edu.duration}
                      </span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="mt-16 pt-16 border-t dark:border-gray-700">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Certifications & <span className="text-blue-600 dark:text-blue-400">Learning Achievements</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Responsive Web Design', provider: 'CSTAD', date: '2025' },
              { title: 'Digital Marketing Basics', provider: 'Self-Study', date: '2024-2025' },
              { title: 'UI/UX Design Fundamentals', provider: 'CSTAD', date: '2025' },
              { title: 'Social Media Marketing', provider: 'CPL Training', date: '2026' }
            ].map((cert, index) => (
              <div
                key={index}
                className="card flex items-start gap-4 hover:bg-blue-50 dark:hover:bg-gray-700"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <i className="fas fa-certificate text-blue-600 dark:text-blue-400 text-xl"></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white">{cert.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.provider}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-1">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-16 border-t dark:border-gray-700">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Marketing <span className="text-blue-600 dark:text-blue-400">Poster Gallery</span>
          </h3>

          {/* <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="card">
              <img
                src="/images/cpl-poster.svg"
                alt="CPL digital marketing poster"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 font-semibold">CPL Property Marketing Poster</p>
            </div>

            <div className="card">
              <img
                src="/images/digital-marketing.svg"
                alt="Digital marketing campaign poster"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 font-semibold">Digital Marketing Campaign Poster</p>
            </div>
          </div> */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/Poster.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <i className="fas fa-file-pdf"></i>
              Open Poster Design
            </a>

            <a
              href="/Video_Content.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline inline-flex items-center gap-2"
            >
              <i className="fas fa-file-video"></i>
              Open Poster & Video Content
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
