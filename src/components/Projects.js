import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const createInfoPage = () => {
  const html = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Digital Marketing & Click-to-Market Profile</title>
        <style>
          body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background: linear-gradient(135deg, #eef2ff, #f8fafc);
            color: #111827;
          }
          .wrap {
            max-width: 920px;
            margin: 0 auto;
            padding: 40px 20px 56px;
          }
          .card {
            background: #ffffff;
            border-radius: 24px;
            padding: 28px;
            box-shadow: 0 18px 60px rgba(59, 130, 246, 0.12);
            border: 1px solid rgba(99, 102, 241, 0.12);
          }
          h1 {
            margin: 0 0 10px;
            font-size: 34px;
            color: #1d4ed8;
          }
          h2 {
            margin: 28px 0 12px;
            color: #4338ca;
            font-size: 22px;
          }
          p, li {
            line-height: 1.7;
            font-size: 16px;
          }
          ul {
            padding-left: 20px;
            margin: 0;
          }
          .badge-row {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 16px;
          }
          .badge {
            background: #dbeafe;
            color: #1d4ed8;
            padding: 8px 12px;
            border-radius: 999px;
            font-size: 14px;
            font-weight: 700;
          }
          .section {
            margin-top: 14px;
          }
          .accent {
            color: #4f46e5;
            font-weight: 700;
          }
          .grid {
            display: grid;
            gap: 16px;
          }
          .metric {
            background: #f8fafc;
            border-radius: 18px;
            padding: 16px 18px;
            border: 1px solid #e5e7eb;
          }
          .metric strong {
            display: block;
            color: #111827;
            margin-bottom: 6px;
          }
        </style>
      </head>
      <body>
        <div class="wrap">
          <div class="card">
            <h1>Digital Marketing Profile</h1>
            <img src="/images/digital-marketing.svg" alt="Digital marketing illustration" style="width:100%;height:auto;border-radius:20px;margin:18px 0 6px;" />
            <p>I am a Digital Marketer and Content Creator with experience in creating engaging digital content and managing social media platforms to increase brand awareness and customer engagement.</p>

            <h2>Skills</h2>
            <div class="badge-row">
              <span class="badge">Social Media Marketing</span>
              <span class="badge">Content Creation</span>
              <span class="badge">Basic SEO</span>
              <span class="badge">Graphic Design</span>
              <span class="badge">Digital Advertising</span>
              <span class="badge">Audience Engagement</span>
              <span class="badge">Copywriting</span>
            </div>

            <h2>Work Experience</h2>
            <div class="section">
              <p><span class="accent">Digital Marketing & Content Creator</span></p>
              <p>📍 CPL Cambodia Properties Limited</p>
              <ul>
                <li>Created social media content for company pages</li>
                <li>Managed posts and content scheduling</li>
                <li>Increased engagement and online reach</li>
                <li>Wrote captions and promoted property listings</li>
                <li>Supported basic online marketing campaigns</li>
              </ul>
            </div>

            <h2>Projects</h2>
            <div class="grid">
              <div class="metric"><strong>Social media promotion</strong> for real estate content</div>
              <div class="metric"><strong>Design of marketing visuals</strong> and posts</div>
              <div class="metric"><strong>Improvement of online brand presence</strong></div>
            </div>

            <h2>Special Experience</h2>
            <div class="section">
              <ul>
                <li>Supported <strong>live fashion shows in digital</strong> by preparing promotional content and audience engagement posts.</li>
                <li>Worked on <strong>click-to-market</strong> campaigns to drive traffic from social platforms to landing pages and product listings.</li>
                <li>Used visuals, captions, and performance tracking to improve campaign reach and response.</li>
              </ul>
            </div>

            <h2>Pages I Manage</h2>
            <div class="grid">
              <div class="metric"><strong>Facebook Page (Company)</strong> https://www.facebook.com/CambodiaPropertiesLimited</div>
              <div class="metric"><strong>Company Page</strong> https://www.facebook.com/profile.php?id=61581223273653</div>
              <div class="metric"><strong>Personal / Content Pages</strong> https://www.facebook.com/profile.php?id=100071333023307, https://www.facebook.com/profile.php?id=100095347693117, https://www.facebook.com/profile.php?id=61564219858448, https://www.facebook.com/youlikelove111</div>
            </div>

            <h2>Poster & Video Content</h2>
            <div class="section">
              <p>Creative content work focused on poster design and short-form video content for digital campaigns, promotions, and brand storytelling.</p>
              <div class="metric" style="padding:0;overflow:hidden;margin-top:16px;">
                <img src="/images/cpl-poster.svg" alt="CPL property marketing poster" style="width:100%;height:auto;display:block;" />
              </div>
              <ul>
                <li>Marketing posters for real estate and brand promotion</li>
                <li>Short-form video content for social media engagement</li>
                <li>Visual layouts aligned with company branding and campaign goals</li>
              </ul>
              <p style="margin-top:16px;">
                <a href="/Video_Content.pdf" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#2563eb;color:#fff;padding:12px 18px;border-radius:999px;text-decoration:none;font-weight:700;">
                  Open Poster & Video Content PDF
                </a>
              </p>
            </div>

            <h2>Objective</h2>
            <p>To improve my skills in Digital Marketing and become a professional marketer who can create effective strategies to grow businesses and strengthen brand identity online.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  return `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const projects = [
    {
      id: 1,
      title: 'SEO Optimization Sprint',
      description: 'Improved organic visibility for a real estate landing page, increasing search traffic by 150% and reducing bounce rate by 18%.',
      technologies: ['SEO', 'Google Search Console', 'Content Audit'],
      category: 'seo',
      image: '🔎',
      liveLink: createInfoPage(),
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Social Media Growth Campaign',
      description: 'Scaled Facebook and TikTok performance for a brand launch, lifting engagement by 150% and follower growth by 42%.',
      technologies: ['Facebook Ads', 'TikTok Content', 'Community Management'],
      category: 'content',
      image: '📈',
      liveLink: createInfoPage(),
      githubLink: '#'
    },
    {
      id: 3,
      title: 'PPC Campaign Optimization',
      description: 'Refined Google Ads targeting and creative testing, improving ROI by 20% while lowering CPC by 12%.',
      technologies: ['Google Ads', 'A/B Testing', 'Conversion Tracking'],
      category: 'ads',
      image: '💰',
      liveLink: createInfoPage(),
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Digital Marketing Profile',
      description: 'A personal marketing profile highlighting content creation, social media management, SEO, and campaign support with measurable growth results.',
      technologies: ['Social Media Marketing', 'Content Creation', 'SEO'],
      category: 'marketing',
      image: '📱',
      liveLink: createInfoPage(),
      githubLink: '#'
    },
    {
      id: 5,
      title: 'Content Strategy Roadmap',
      description: 'Built a quarterly content plan that increased inbound leads by 33% and improved engagement consistency across channels.',
      technologies: ['Content Strategy', 'Analytics', 'Copywriting'],
      category: 'analytics',
      image: '🧠',
      liveLink: createInfoPage(),
      githubLink: '#'
    },
    {
      id: 6,
      title: 'Click-to-Market Campaign',
      description: 'Directed traffic from social platforms to landing pages and product listings, supporting better conversion flow and engagement.',
      technologies: ['Click-to-Market', 'Landing Pages', 'Performance Tracking'],
      category: 'marketing',
      image: '🎯',
      liveLink: createInfoPage(),
      githubLink: '#'
    }
  ];

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'SEO', value: 'seo' },
    { label: 'Content', value: 'content' },
    { label: 'Ads', value: 'ads' },
    { label: 'Digital Marketing', value: 'marketing' },
    { label: 'Analytics', value: 'analytics' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-fluid">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Digital <span className="text-blue-600 dark:text-blue-400">Marketing Projects</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                filter === category.value
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 100}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
