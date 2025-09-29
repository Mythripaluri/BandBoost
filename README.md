# BandBoost

BandBoost is a modern IELTS preparation institute dedicated to helping students achieve their target band scores. We offer comprehensive IELTS training programs including speaking practice sessions, mock tests, AI-powered band score predictions, and personalized study plans to ensure students are fully prepared for their IELTS examination.

This repository contains the responsive home page for BandBoost IELTS Institute built with React, TypeScript, and Tailwind CSS, featuring a professional design optimized for both desktop and mobile devices.

## Quick Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Mythripaluri/BandBoost.git
cd BandBoost

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at http://localhost:5173/

### Build for Production
```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure
```
src/
 components/          # Reusable UI components
    ui/             # shadcn/ui components
    Hero.tsx        # Landing page hero section
    Features.tsx    # Features showcase
    Testimonials.tsx # Customer testimonials
    ...
 pages/              # Page components
 data/               # Static data (features, testimonials)
 hooks/              # Custom React hooks
 lib/                # Utility functions
```

## Technology Stack
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast development server and build tool
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **shadcn/ui** - High-quality, accessible component library

## Available Scripts
- npm run dev - Start development server
- npm run build - Create production build
- npm run preview - Preview production build
- npm run lint - Run ESLint
- npm run type-check - Run TypeScript type checking

## Key Dependencies
- **React** - UI library
- **TypeScript** - Type checking
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Vite** - Build tool
- **ESLint** - Code linting

## Deployment
This project can be deployed to any static hosting service:
- **Vercel** - npm run build then deploy dist/ folder
- **Netlify** - Connect repository and set build command to npm run build
- **GitHub Pages** - Use GitHub Actions with the build output

## Task Requirements
This project was built as a modern IELTS Institute home page with the following specifications:
- ✅ **Responsive Design** - Optimized for both desktop and mobile devices
- ✅ **Modern & Professional** - Clean, contemporary design suitable for an educational institute
- ✅ **Complete Sections** - Navbar, Hero, Feature Cards, Testimonials, and Footer
- ✅ **React Components** - Clean, reusable component architecture
- ✅ **Quality UI/UX** - Focus on design excellence and user experience

## Design Choices
- **Component-Driven Architecture** - Each section is built as a reusable React component
- **Tailwind CSS** - Utility-first approach for rapid, consistent styling
- **shadcn/ui** - High-quality, accessible components for professional appearance
- **TypeScript** - Type safety and better developer experience
- **Mobile-First Design** - Responsive breakpoints ensure optimal viewing on all devices
- **Performance Focus** - Optimized assets and code splitting for fast loading
