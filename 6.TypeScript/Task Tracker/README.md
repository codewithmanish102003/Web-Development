# Task Tracker

A simple task tracker web application built with TypeScript and Tailwind CSS.

## Features
- Add and remove tasks
- Responsive UI with Tailwind CSS
- Built with TypeScript for type safety

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd Task-Tracker
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Development
1. Build Tailwind CSS and start the development server:
   ```sh
   npx tailwindcss -i ./style.css -o ./dist/output.css --watch
   ```
2. Open `index.html` in your browser. Make sure it links to the generated `dist/output.css`.

### Project Structure
- `src/` - TypeScript source files
- `style.css` - Main CSS file with Tailwind directives
- `index.html` - Main HTML file
- `tailwind.config.js` - Tailwind configuration
- `tsconfig.json` - TypeScript configuration

### Customization
- Edit `tailwind.config.js` to customize Tailwind's default theme.
- Modify `src/main.ts` to change app logic.

## Building for Production
1. Build the CSS for production:
   ```sh
   npx tailwindcss -i ./style.css -o ./dist/output.css --minify
   ```
2. Bundle/compile TypeScript as needed.

## Run Project
cmd npm run dev

## License
MIT 