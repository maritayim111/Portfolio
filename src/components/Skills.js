import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const skillsData = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML5', percentage: 95 },
        { name: 'CSS3', percentage: 90 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'React', percentage: 80 }
      ]
    },
    {
      category: 'Digital Marketing',
      skills: [
        { name: 'Social Media Marketing', percentage: 85 },
        { name: 'Content Strategy', percentage: 80 },
        { name: 'Analytics & Insights', percentage: 75 },
        { name: 'Campaign Management', percentage: 80 }
      ]
    },
    {
      category: 'Design & UX',
      skills: [
        { name: 'UI/UX Design', percentage: 75 },
        { name: 'Responsive Design', percentage: 90 },
        { name: 'Content Creation', percentage: 85 },
        { name: 'Design Tools', percentage: 70 }
      ]
    }
  ];

  const SkillBar = ({ name, percentage }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-1000 ease-out"
            style={{
              width: animate ? `${percentage}%` : '0%'
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="section bg-white dark:bg-gray-800">
      <div className="container-fluid">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {skillsData.map((skillCategory, index) => (
            <div key={index} className="fade-in">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-lg bg-blue-600 dark:bg-blue-500 flex items-center justify-center mr-4">
                  {index === 0 && <i className="fas fa-code text-white text-xl"></i>}
                  {index === 1 && <i className="fas fa-chart-line text-white text-xl"></i>}
                  {index === 2 && <i className="fas fa-palette text-white text-xl"></i>}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {skillCategory.category}
                </h3>
              </div>

              <div className="card">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Icons */}
        <div className="mt-20 pt-16 border-t dark:border-gray-700">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Other <span className="text-blue-600 dark:text-blue-400">Competencies</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'fas fa-mobile-alt', label: 'Mobile Design' },
              { icon: 'fas fa-pen-fancy', label: 'Copywriting' },
              { icon: 'fas fa-video', label: 'Video Editing' },
              { icon: 'fas fa-images', label: 'Graphic Design' },
              { icon: 'fas fa-database', label: 'Database Basics' },
              { icon: 'fas fa-users', label: 'Team Collaboration' },
              { icon: 'fas fa-microphone', label: 'Public Speaking' },
              { icon: 'fas fa-search', label: 'SEO Basics' }
            ].map((skill, index) => (
              <div
                key={index}
                className="card flex flex-col items-center justify-center text-center py-8 hover:bg-blue-50 dark:hover:bg-gray-700"
              >
                <i className={`${skill.icon} text-3xl text-blue-600 dark:text-blue-400 mb-3`}></i>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{skill.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
