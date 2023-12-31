# Project: Simple Blog Website with Next.js 13

## Description
This project is a simple blog website built using Next.js, a popular React framework. The website allows users to view a list of blog posts, read individual posts, and navigate between different pages. The project showcases the use of Next.js for creating dynamic pages, client-side routing, and styling with CSS modules.

## Features
- **Home Page**: Displays a welcome message and provides a link to the Blog page.
- **Blog Page**: Lists multiple blog post titles. Clicking on a title navigates to the respective Post page.
- **Post Page**: Displays the title, content, and date of a single blog post.
- **About Page**: Provides information about the website and its purpose.
- **Modern Styling**: Utilizes CSS modules for styling with modern and animated design.
- **Responsive Design**: Ensures the website looks great on various screen sizes.

## How to Run the Project
1. Ensure you have Node.js installed on your computer.
2. Clone this repository using the following command:

```
git clone https://github.com/pathan-mehedi/module-11-assingment.git

```

3. Navigate to the project directory:
```
cd module-11-assingment

```

4. Install project dependencies:

```
npm install
```

5. Run the development server:

```
npm run dev
```

6. Open your web browser and go to http://localhost:3000 to view the website.

## Project Deployment
The website is deployed and accessible online at the following URL:
[https://mts-ostad11assingment-sample-blog.netlify.app/](https://mts-ostad11assingment-sample-blog.netlify.app/)

## GitHub Repository
You can find the source code for this project on GitHub:
[https://github.com/pathan-mehedi/module-11-assingment](https://github.com/pathan-mehedi/module-11-assingment)

## Project Structure
- **pages/**
- `index.jsx`: Home page
- `blog.jsx`: Blog page listing post titles
- `[id].jsx`: Individual post page using dynamic routing
- `about.jsx`: About page
- **data/**
- `blogData.json`: JSON file containing blog post data
- **styles/**
- `globals.css`: globals CSS styles
- `header.module.css`: Styles for the header component
- `post.module.css`: Styles for individual post page
- `transitions.module.css`: Styles for page transitions
- **components/**
- `Header.jsx`: Header component with navigation links
- **public/**
- `favicon.ico`: Favicon for the website
- **node_modules/**: Node.js dependencies (created after running "npm install")
- `package.json`: Project configuration and dependency list
- `package-lock.json`: Detailed information about installed packages
- `README.md`: Project documentation and information
- `.gitignore`: Specifies which files should not be tracked by Git

---