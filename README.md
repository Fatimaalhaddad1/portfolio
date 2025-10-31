# Fatimah Alhaddad - Portfolio

A clean, responsive React portfolio website built with Vite.

## Features

- 🎨 Clean, modern design with custom CSS
- 📱 Fully responsive layout
- ⚡ Fast loading with Vite
- 🎯 Smooth scrolling navigation
- 🖼️ Placeholder sections ready for content

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── Projects.jsx    # Projects showcase
│   ├── Experience.jsx  # Work experience
│   ├── Journey.jsx     # University journey
│   └── Footer.jsx      # Footer
├── App.jsx             # Main app component
├── main.jsx           # React entry point
└── index.css          # Global styles

public/
├── logo.png           # Logo placeholder
├── photo.png          # Photo placeholder
└── resume.pdf         # Resume placeholder
```

## Customization

### Colors
- Header: `#0c1240`
- Background: `#f3f3f5`
- Text: `#111319`
- Muted text: `#5c6378`
- Accent: `#8b5cf6`

### Adding Your Content

1. **Photo**: Replace `public/photo.png` with your professional photo
2. **Logo**: Replace `public/logo.png` with your logo
3. **Resume**: Replace `public/resume.pdf` with your resume
4. **Projects**: Update the projects array in `src/components/Projects.jsx`
5. **Experience**: Update the experiences array in `src/components/Experience.jsx`
6. **Journey**: Add your university timeline content in `src/components/Journey.jsx`

## Technologies Used

- React 18
- Vite
- CSS3 (no frameworks)
- SVG patterns

## License

This project is open source and available under the [MIT License](LICENSE).
