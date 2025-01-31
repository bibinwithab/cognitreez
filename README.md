# Cognitreez Website

This is a modern web application built with React, TailwindCSS, and Framer Motion.

## Features

- **Gradient Background**: A visually appealing gradient background applied site-wide.
- **Customer Reviews Carousel**: Smooth scrolling carousel displaying client testimonials.
- **Responsive Design**: Fully responsive UI for all devices.
- **Framer Motion Animations**: Adds interactive motion to the components.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bibinwithab/cognitreez.git
   cd cognitreez
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Project Structure

```plaintext
src/
├── Components/
│   ├── BookACall.jsx         # Component for booking a call
│   ├── CaseStudies.jsx       # Component for displaying case studies
│   ├── CustomerReview.jsx     # Component for customer reviews carousel
│   ├── Footer.jsx            # Footer component
│   ├── Introduction.jsx      # Introduction section with gradient background
│   ├── NavBar.jsx            # Navigation bar component
│   ├── Scroll.jsx            # Scroll indicator component
│   ├── Solutions.jsx         # Component for displaying solutions
│   ├── ThemeToggle.jsx       # Component for toggling themes
├── context/
│   ├── ThemeContext.jsx      # Context for theme management
├── data/
│   ├── reviews.js            # Data for customer reviews
│   ├── solutions.js          # Data for solutions
├── App.jsx                   # Main application component
├── index.css                 # TailwindCSS configuration
├── main.jsx                  # Entry point of the app
```

## To-Do List

- [x] Implement a gradient background across the entire website.
- [x] Add Footer
- [x] Add Customer Reviews Carousel
- [x] Add solutions component
- [x] Add functionality to contact form.
- [ ] Update the content of the website.
- [x] Add research paper one sliders - case studies (results to real world).
- [ ] Add Maskot to the website.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build locally.
