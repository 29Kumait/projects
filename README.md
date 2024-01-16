# Projects

## Overview

"Projects" is a web application designed to showcase the collective work of classmates in a coding [HackYourFuture](https://www.hackyourfuture.net) bootcamp. It serves as an API data indexer, displaying GitHub profiles and repositories of classmates on the Projects page. The application is built with modern web technologies and showcases various features and skills obtained during the coding bootcamp.

## Features

- **GitHub API Integration:** Fetches and displays GitHub profile photos and usernames along with repository projects.
- **HYF Tribute Page:** A dedicated page ('More') to pay tribute to HackYourFuture (HYF) administrative/management family team.
- **Home Page:** Routes to other pages.
- **Museum Page:** Fetches and displays art from the Rijksmuseum, including links to initial assignment submissions.
- **Chart Component:** Compares data fetched from two different GitHub repositories using Chart.js.
- **Interactive Elements:** Features an interactive jellyfish logo that changes on click and a DarkModeToggle for UI theme switching.
- **Responsive Design:** Ensures a seamless experience across various devices and screen sizes.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: As the frontend build tool.
- **Stylex**: For styling components in a new and efficient way.
- **GitHub Pages**: Used for deploying the application.
- **Framer Motion**: For adding animations to one of the containers.
- **Chart.js**: To create and display interactive charts.
- **React Router Dom**: For handling routing within the application.

## Installation and Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/29Kumait/projects
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd project-directory
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the Application:**

   ```bash
   npm run dev
   ```

## Usage

- Navigate between different pages using the navbar.
- Interact with the jellyfish logo and toggle between light and dark modes for different UI experiences.
- Explore classmates' GitHub projects and compare repository data through charts.
- Learn about the HYF team on the 'More' page and view art collections on the Museum page.

## Built With

> (Dependencies)

### React and React-DOM

- `react@18.2.0`
- `react-dom@18.2.0`
  - These are the core React libraries for building the user interface and rendering it in the web browser.

### Vite

- `vite@5.0.10`
  - Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.

### React Router Dom

- `react-router-dom@6.21.2`
  - This package provides DOM bindings for React Router, which is used for handling routing in React applications.

### Framer Motion

- `framer-motion@10.18.0`
  - A library to add animations and gestures in React applications.

### Chart.js

- `chart.js@4.4.1`
  - A popular JavaScript library for creating interactive charts.

### ESLint

- `eslint@8.56.0`
  - A static code analysis tool for identifying problematic patterns in JavaScript code.

### Other Notable Dependencies

- `@iconscout/react-unicons@2.0.2`: A library of customizable React SVG icons.
- `@primer/octicons-react@19.8.0`: GitHub's icon library.
- `@react-buddy/ide-toolbox@2.4.0`: Toolbox for React development.
- `@stylexjs/babel-plugin@0.3.0`, `@stylexjs/dev-runtime@0.3.0`, `@stylexjs/stylex@0.3.0`, `stylex@0.3.0`: For Stylex styling.
- `@vitejs/plugin-react@4.2.1`: Official React plugin for Vite.
- `vite-plugin-stylex@0.4.1`: Stylex plugin for Vite.
- `cypress@13.6.2`: End-to-end testing framework.
- `dotenv-cli@7.3.0`: For managing environment variables.
- `gh-pages@6.1.1`: For deploying to GitHub Pages.
- `react-ga4@2.1.0`: Google Analytics for React.
- `react-slick@0.29.0`: A React implementation of Slick Carousel.
- `@types/react-dom@18.2.18`, `@types/react@18.2.45`: TypeScript types for React and ReactDOM.
