# Marita YIM - Personal Portfolio Website

A modern, responsive, and visually appealing personal portfolio website built with React, Tailwind CSS, and custom animations.

## Features

✨ **Modern Design**
- Clean and professional UI/UX
- Responsive layout for all devices (mobile, tablet, desktop)
- Smooth scrolling and animations
- Beautiful gradients and hover effects

🌙 **Dark/Light Mode**
- Toggle between dark and light modes
- User preference is saved to localStorage
- Respects system color scheme preference

⚡ **Interactive Elements**
- Typing animation on hero section
- Project filtering functionality
- Animated progress bars for skills
- Smooth fade-in animations on scroll
- Responsive mobile menu

🎨 **Sections Included**
1. **Hero Section** - Full-screen introduction with CTA buttons
2. **About Me** - Brief introduction and key skills
3. **Projects** - Filterable project showcase with 6+ projects
4. **Skills** - Animated progress bars and skill categories
5. **Experience** - Work experience and achievements
6. **Education** - Educational background and certifications
7. **Contact** - Contact form and contact information
8. **Footer** - Footer with links and social media

## Tech Stack

- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icon library
- **CSS3 Animations** - Custom animations

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd portfolio_me
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - The app will automatically open at `http://localhost:3000`
   - If not, manually navigate to the URL

## Build for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build/` folder.

## Project Structure

```
portfolio_me/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/         # React components
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   ├── ProjectCard.js
│   │   ├── Projects.js
│   │   └── Skills.js
│   ├── App.js              # Main App component
│   ├── index.js            # Entry point
│   └── index.css           # Global styles and animations
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # This file
```

## Customization

### Update Personal Information
Edit the following files to customize the content:
- **Hero Section**: `src/components/Hero.js`
- **About Section**: `src/components/About.js`
- **Projects**: `src/components/Projects.js`
- **Skills**: `src/components/Skills.js`
- **Experience**: `src/components/Experience.js`
- **Education**: `src/components/Education.js`
- **Contact**: `src/components/Contact.js`
- **Footer**: `src/components/Footer.js`

### Customize Colors
Edit `tailwind.config.js` to change the color scheme:
```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    },
  },
}
```

### Add Your Projects
Update the `projects` array in `src/components/Projects.js`:
```js
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    category: 'web',
    image: '🎨',
    liveLink: 'https://your-live-link',
    githubLink: 'https://github.com/your-repo'
  },
  // Add more projects...
];
```

## Features Implemented

✅ Full-screen hero section with typing animation
✅ About me section with profile image and key skills
✅ Projects showcase with filtering functionality
✅ Skills section with animated progress bars
✅ Experience timeline
✅ Education section with certifications
✅ Contact form with validation
✅ Dark/Light mode toggle
✅ Responsive design for all devices
✅ Smooth animations and transitions
✅ Mobile-friendly navigation menu
✅ Social media links
✅ Download CV functionality
✅ Footer with multiple sections

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Lazy loading ready
- Optimized animations (CSS-based)
- Responsive images
- Smooth scrolling
- Mobile-first approach

## Future Enhancements

- [ ] Add blog section
- [ ] Integrate backend for contact form
- [ ] Add testimonials section
- [ ] Implement smooth scroll behavior
- [ ] Add more project cases studies
- [ ] SEO optimization
- [ ] Analytics integration

## License

This project is open source and available under the MIT License.

## Contact

📧 Email: yimmarita35@gmail.com
📱 Phone: +855 979650919
📍 Location: #353, Ta Khmao, Kandal, Cambodia

## Acknowledgments

- React team for the amazing library
- Tailwind CSS for the utility-first CSS framework
- Font Awesome for the icon library
- Inspiration from modern portfolio designs

---

Made with ❤️ by Marita YIM
