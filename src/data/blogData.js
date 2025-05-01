export const blogPosts = [
    {
      title: 'Getting Started with React',
      slug: 'react-basics',
      date: '2024-11-05',
      tags: ['React', 'Frontend', 'JavaScript'],
      author: 'Antra',
      coverImage: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      excerpt: 'Learn how to get started with React — from setup to building your first component using hooks and JSX.',
      content: `
  React is one of the most popular libraries for building user interfaces, especially single-page applications.
  
  ## 🚀 Why Learn React?
  
  - Component-based architecture  
  - Virtual DOM for fast rendering  
  - Strong ecosystem and community
  
  ## 🛠 Getting Started
  
  Install React with Vite or Create React App:
  
  \`\`\`bash
  npm create vite@latest my-react-app
  cd my-react-app
  npm install
  npm run dev
  \`\`\`
  
  ## 🧱 Example Component
  
  \`\`\`jsx
  import React from 'react';
  
  function Welcome() {
    return <h1>Hello, React!</h1>;
  }
  
  export default Welcome;
  \`\`\`
  
  ## 💡 Tips for Beginners
  
  - Understand JSX syntax  
  - Learn props & state  
  - Practice with \`useState\` and \`useEffect\` hooks
  
  React is beginner-friendly and scales beautifully with practice. Happy coding!
      `
    },
  
    {
      title: 'Node.js Tips for Beginners',
      slug: 'nodejs-tips',
      date: '2024-10-20',
      tags: ['Node.js', 'Backend', 'Express'],
      author: 'Antra',
      coverImage: 'https://images.pexels.com/photos/7135106/pexels-photo-7135106.jpeg',
      excerpt: 'A practical guide for Node.js newcomers: working with Express, routing, and handling asynchronous code.',
      content: `
  Node.js allows you to run JavaScript outside the browser — on the server!
  
  ## 🔧 Use Express for Simplicity
  
  Express is the most popular backend framework for Node.js.
  
  ### Basic Server Example:
  
  \`\`\`js
  const express = require('express');
  const app = express();
  
  app.get('/', (req, res) => {
    res.send('Hello, Node.js!');
  });
  
  app.listen(3000, () => console.log('Server is running'));
  \`\`\`
  
  ## 🧠 Tips for Beginners
  
  - Always use middleware (e.g., body-parser, morgan)  
  - Organize routes in separate files  
  - Use async/await for better readability
  
  ## 🧪 Error Handling
  
  Use a centralized error handler:
  
  \`\`\`js
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  \`\`\`
  
  Node.js is powerful when used right — keep experimenting and learning!
      `
    },
  
    {
      title: 'Mastering CSS Flexbox & Grid',
      slug: 'css-layouts',
      date: '2024-09-12',
      tags: ['CSS', 'Flexbox', 'Grid'],
      author: 'Antra',
      coverImage: 'https://cdn.pixabay.com/photo/2018/03/02/10/56/web-3197324_960_720.jpg',
      excerpt: 'Understand how to use Flexbox and Grid to build responsive layouts and align content like a pro.',
      content: `
  CSS layout techniques have evolved with Flexbox and Grid.
  
  ## 📐 Flexbox Basics
  
  Flexbox helps align and distribute space among items in a container.
  
  \`\`\`css
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  \`\`\`
  
  ## 🔳 CSS Grid Overview
  
  Grid provides a two-dimensional system for placing items.
  
  \`\`\`css
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  \`\`\`
  
  ## 🧠 Tips
  
  - Use Grid for structure, Flexbox for alignment  
  - Avoid nesting grids inside grids without planning  
  - Use browser dev tools to visualize grid lines
      `
    },
  
    {
      title: 'Understanding Git & GitHub',
      slug: 'git-github-basics',
      date: '2024-08-08',
      tags: ['Git', 'GitHub', 'Version Control'],
      author: 'Antra',
      coverImage: 'https://cdn.pixabay.com/photo/2017/08/10/07/32/git-2615299_1280.png',
      excerpt: 'Learn the basics of Git & GitHub: repositories, commits, branches, pull requests and collaboration.',
      content: `
  Git is a distributed version control system, and GitHub is a platform to host and manage repositories.
  
  ## 🔧 Common Git Commands
  
  \`\`\`bash
  git init
  git status
  git add .
  git commit -m "Initial commit"
  git push origin main
  \`\`\`
  
  ## 🚀 GitHub Basics
  
  - Fork a repo  
  - Clone to local  
  - Create new branch  
  - Push and open a Pull Request
  
  ## 💡 Tips
  
  - Commit frequently with meaningful messages  
  - Always pull latest before pushing  
  - Use \`.gitignore\` to avoid uploading unnecessary files
      `
    }
  ];
  