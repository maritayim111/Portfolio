# Quick Start Guide - Marita YIM Portfolio Website

## 🚀 Getting Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm start
```

### Step 3: Open in Browser
- The website will automatically open at `http://localhost:3000`
- If it doesn't, manually go to http://localhost:3000

### Step 4: Start Editing
Edit files in the `src/components/` folder to customize the content.

---

## 📁 Project Structure

```
portfolio_me/
├── public/index.html                 # HTML entry point
├── src/
│   ├── components/
│   │   ├── Navbar.js                 # Navigation bar with dark mode toggle
│   │   ├── Hero.js                   # Full-screen hero section with typing animation
│   │   ├── About.js                  # About me section
│   │   ├── Projects.js               # Projects showcase with filtering
│   │   ├── ProjectCard.js            # Individual project card component
│   │   ├── Skills.js                 # Skills with progress bars
│   │   ├── Experience.js             # Work experience timeline
│   │   ├── Education.js              # Education & certifications
│   │   ├── Contact.js                # Contact form & info
│   │   └── Footer.js                 # Footer with links
│   ├── App.js                        # Main app component
│   ├── index.js                      # React entry point
│   └── index.css                     # Global styles & animations
├── package.json                      # Dependencies & scripts
├── tailwind.config.js                # Tailwind CSS configuration
├── postcss.config.js                 # PostCSS configuration
└── README.md                         # Full documentation
```

---

## 🎨 Features Included

### ✨ Hero Section
- Full-screen welcome section
- Typing animation effect
- Call-to-action buttons:
  - View My Work (Links to projects)
  - Download CV (Downloads CV file)
  - Contact Me (Links to contact form)
- Animated profile illustration

### 📋 About Section
- Personal introduction
- Profile image
- 6 key skills with icons

### 🗂️ Projects Section
- 6 sample projects
- Filter by category:
  - All
  - Web Development
  - Digital Marketing
  - Design
- Each project includes:
  - Title & description
  - Technologies used
  - Live demo link
  - GitHub link

### 💡 Skills Section
- 3 skill categories:
  - Frontend Development (HTML, CSS, JS, React)
  - Digital Marketing
  - Design & UX
- Animated progress bars
- 8 additional competencies with icons

### 💼 Experience Section
- Work experience timeline
- Job details and responsibilities
- Stats cards (projects, clients, years)

### 🎓 Education Section
- Educational background
- 4 learning achievements/certifications
- Institution and duration info

### 📧 Contact Section
- Contact form (name, email, message)
- Success message after submission
- Contact information cards
- Social media links
- Quick response info

### 🌙 Dark/Light Mode
- Toggle button in navbar
- Automatically saves preference
- Respects system color scheme

### 🎯 Other Features
- Smooth scrolling navigation
- Responsive mobile menu
- Animated hover effects
- Fade-in animations
- Smooth page transitions

---

## 🛠️ How to Customize

### 1. Update Your Information

**Hero Section** (`src/components/Hero.js`)
```js
<h1>Hello, I'm Marita YIM</h1>
// Change to your name

const fullText = ' Digital Marketing & Content Creator / Web Developer';
// Change to your title
```

**About Section** (`src/components/About.js`)
- Update your introduction text
- Modify skills in the `skills` array

**Contact Section** (`src/components/Contact.js`)
- Update email: `yimmarita35@gmail.com`
- Update phone: `+855 979650919`
- Update address: `#353, Ta Khmao, Kandal`
- Update social media links

### 2. Add Your Projects

Edit `src/components/Projects.js`:
```js
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description here',
    technologies: ['React', 'Tailwind CSS'],
    category: 'web',  // 'web', 'marketing', or 'design'
    image: '🎨',      // Use emoji or emoji code
    liveLink: 'https://your-live-site.com',
    githubLink: 'https://github.com/your-repo'
  },
  // Add more projects...
];
```

### 3. Update Skills

Edit `src/components/Skills.js` - Update the `skillsData` array:
```js
const skillsData = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML5', percentage: 95 },
      { name: 'CSS3', percentage: 90 },
      // Add more skills...
    ]
  },
  // Add more categories...
];
```

### 4. Update Experience

Edit `src/components/Experience.js` - Update the `experiences` array

### 5. Update Education

Edit `src/components/Education.js` - Update the `educationData` array

### 6. Change Colors

Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',  // Blue
      secondary: '#6366f1', // Indigo
    },
  },
}
```

---

## 📦 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm build

# Run tests
npm test
```

---

## 🌐 Deployment

### Deploy to Netlify (Recommended)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your GitHub repository
5. Set build command: `npm run build`
6. Set publish directory: `build`
7. Deploy!

### Deploy to Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect React settings
6. Click "Deploy"

### Deploy to GitHub Pages
```bash
npm install gh-pages --save-dev

# Add to package.json:
# "homepage": "https://yourusername.github.io/portfolio",
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"

npm run deploy
```

---

## 🐛 Troubleshooting

**Problem**: npm install fails
```bash
# Try clearing npm cache
npm cache clean --force
rm -rf node_modules
npm install
```

**Problem**: Tailwind CSS not working
```bash
# Rebuild PostCSS
npm run build
```

**Problem**: Images not showing
- Make sure image paths are correct
- Currently uses Font Awesome icons instead of images
- To use custom images, place them in `public/images/` and import them

---

## 🎨 Color Scheme

- **Primary Color**: Blue (#3b82f6)
- **Secondary Color**: Indigo (#6366f1)
- **Light Mode**: White background with dark text
- **Dark Mode**: Dark gray/black background with light text

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive!

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Font Awesome Icons](https://fontawesome.com)
- [MDN Web Docs](https://developer.mozilla.org)

---

## 💡 Tips & Best Practices

1. **Always save files** before refreshing the browser
2. **Use meaningful variable names** for easy maintenance
3. **Test on mobile** - Use DevTools (F12) to check responsive design
4. **Optimize images** before using them in the portfolio
5. **Keep content updated** - Update your projects and skills regularly
6. **Use semantic HTML** - Makes code more maintainable
7. **Test form submission** - The contact form currently logs to console

---

## 🚀 Next Steps

1. Customize all personal information
2. Add your real projects with links
3. Update your skills and experience
4. Test on mobile devices
5. Deploy to your hosting platform
6. Share with the world! 🌟

---

**Happy coding!** 🎉
