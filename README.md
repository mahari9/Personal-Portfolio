# Mahari Tsegay Portfolio

This is the personal portfolio website of Mahari Tsegay, developed using React.js and Next.js. The website showcases Mahari's about, what he does, stack, journey, projects, and contact information.

## Table of Contents

- [Go Live](#go-live)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [License](#license)

![image](https://github.com/mahari9/Personal-Portfolio/blob/master/public/img/screenshot.jpg)

## Go Live

- [Live Link](https://mahari.onrender.com/ "Live Link")

## Features

- Responsive design
- Project showcase
- Contact form
- Smooth scrolling
- Animated elements using AOS

## Technologies Used

- Next.js
- React.js
- TypeScript
- TailwindCSS
- AOS (Animate On Scroll)
- PostCSS
- Typewriter Effect
- React GTM Module

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/mahari9/Personal-Portfolio.git
   ```

1. Navigate to the project directory:

   ```sh
   cd Personal-Portfolio
   ```

1. Install the dependencies:

   ```sh
   npm install
   ```

### Running the Development Server

To start the development server, run:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the project for production, run:

```sh
npm run build
```

### Starting the Production Server

After building the project, you can start the production server with:

```sh
npm start
```

## Project Structure

```plaintext

public/
    favicon_io/
        about.txt
        manifest.json
        site.webmanifest
    img/
        resume/

src/
    app/
        about/
            page.tsx


        components/
            AOS.tsx
            BackToTop.tsx
            ContactForm.tsx
            footer.tsx
            home1.tsx
            InscribeQuotes.tsx
            LandingPage.tsx
            MyContact.tsx
            MyJourney.tsx
            MyProjects.tsx
            NavBar.tsx
            ProjectsData.ts
        contact/
            page.tsx
        journey/
            page.tsx
        projects/
            page.tsx

        globals.css
        layout.tsx
        page.tsx

.gitignore
next.config.js
package.json
postcss.config.js
README.md
tailwind.config.ts
tsconfig.json

```

## Scripts

- `dev`: Starts the development server.
- `build`: Builds the project for production.
- `start`: Starts the production server.
- `lint`: Runs the linter.

## License

This project is licensed under the MIT License.
