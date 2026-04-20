import React from 'react';

const ProjectCard = ({ project, delay }) => {
  return (
    <div
      className="card"
      style={{
        animation: `fadeIn 0.6s ease-in-out ${delay}ms forwards`,
        opacity: 0
      }}
    >
      {/* Project Image/Icon */}
      <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-lg p-8 text-center mb-4">
        <span className="text-6xl">{project.image}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-400 mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <a
          href={project.liveLink}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-semibold"
        >
          <i className="fas fa-external-link-alt"></i>
          Live Demo
        </a>
        <a
          href={project.githubLink}
          className="flex-1 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2 font-semibold"
        >
          <i className="fab fa-github"></i>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
