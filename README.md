# Supreme Group Web App

## Overview

This project is the frontend implementation of the Supreme Group website, developed as part of a technical assessment. The implementation strictly follows the provided Figma design while ensuring best practices in performance, accessibility, and maintainability.

## Tech Stack

- **Framework**: Next.js (selected for server-side rendering benefits and improved SEO performance)
- **Language**: TypeScript (ensuring type safety and maintainability)
- **Styling**: Tailwind CSS (for utility-first styling and rapid development)
- **Build Tool**: Vite (selected for fast development and optimized build performance)
- **Hosting**: Vercel (leveraging fast deployment and seamless integration with Next.js)

## Project Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

```sh
# Clone the repository
git clone https://github.com/mayur-shimpi/supreme-group.git
cd supreme-group

# Install dependencies
yarn install  # or npm install

# Run the development server
yarn dev  # or npm run dev
```

### Build and Deploy

```sh
# Build the project
yarn build  # or npm run build

# Start the production server
yarn start  # or npm start
```

## Component Architecture

The project follows a modular component architecture to ensure reusability and maintainability.

### Structure:

```
/app
 ├── components  # Reusable UI components
 ├── pages       # Page-level components
 ├── styles      # Tailwind CSS configurations
 ├── assets      # Static assets (images, icons, etc.)
```

## Design Adherence

- Implemented pixel-perfect layout based on Figma design
- Followed design specifications for typography, spacing, and colors
- Used Tailwind CSS for consistent styling and maintainability

## Responsive Design Strategy

- Implemented a mobile-first approach
- Used Tailwind’s responsive utilities for breakpoint-based styling
- Tested across mobile, tablet, and desktop resolutions

## Performance Optimization

- Implemented **code splitting** and **lazy loading** for improved performance
- Optimized images using **next/image** component
- Used caching strategies for assets to reduce load time
- Minimized JavaScript and CSS bundles for better load speed

## Accessibility Considerations

- Used **semantic HTML** for better screen reader support
- Added ARIA attributes for better navigation experience
- Ensured keyboard navigability across all interactive elements
- Verified color contrast for text readability

## Animations

- Used **Framer Motion** for smooth animations enhancing user experience
- Implemented **tab switch animations** for better transitions
- Integrated **subtabs animations** ensuring a fluid user experience

## Challenges Faced and Solutions

- **Tab Implementation**: Faced challenges in managing active states efficiently. **Solution**: Used controlled components and state management for dynamic updates.
- **Animation Performance**: Encountered performance bottlenecks with animations. **Solution**: Optimized Framer Motion animations to ensure smooth rendering.
- **Subtab Navigation**: Handling nested tab structures was complex. **Solution**: Implemented a structured hierarchy with proper state management.
- **Design Accuracy**: Ensuring pixel-perfect accuracy to match Figma was time-consuming. **Solution**: Used precise spacing, margins, and utility classes in Tailwind CSS.

## Homescreen Preview

Below is a screenshot of the Homescreen:

![Homescreen](/preview.png)

## Deployment

The project is deployed on Vercel. You can access it at:
[https://supreme-group-seven.vercel.app/](https://supreme-group-seven.vercel.app/)

## Repository

GitHub Repository: [https://github.com/mayur-shimpi/supreme-group.git](https://github.com/mayur-shimpi/supreme-group.git)

---

This documentation serves as a complete guide for setting up, understanding, and maintaining the Supreme Group web app. It outlines the project's implementation, technical choices, challenges, and improvements.

