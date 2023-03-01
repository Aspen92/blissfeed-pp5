# BlissFeed -  [Live link](https://blissfeed-pp5.herokuapp.com/)

Welcome to **BlissFeed**, the social media app designed to help you share your life and spread positivity to others. Whether you're looking to connect with friends, family, or like-minded individuals, **BlissFeed** offers a platform for you to create an account, post pictures and text, and engage with others in a fun and positive way. With full CRUD functionality, you can easily manage your content and connect with others on your terms.

BILD

The frontend application is connected to the **BlissFeed API**, a custom-built backend application built with Django REST framework and designed specifically for the **BlissFeed** application. You can find the repository for the API [here](https://github.com/Aspen92/blissfeed-drf-api).

# Project Goals

The objective of this project was to construct a website application that facilitates positive image sharing while providing essential functionalities to visitors. The website encompasses the following features:

- Basic authentication and authorization functionality.
- Intuitive navigation system for easy browsing.
- Full CRUD functionality that enables users to create, read, update and - delete posts, comments, and likes.
- Filter options that allow visitors to sort through posts, categories, and search for specific titles and authors.
- Capability to modify profile information such as bio text and images.

# User Experience

## EPICs --> User Stories

### 1. 

### 2.

### 3. 

### 4.

### 5.

# Design

## Color Scheme
BILD

- I used a dark charcoal grey color (#212121) for the background to create a sleek and modern look for the page.

- I used a slightly lighter shade of grey (#323232) to define elements such as the navbar and other important sections of the page. This creates a clear contrast against the background.

- To add a clear and special color, I used two shades of teal (#0D7377) and #14FFEC for buttons. These colors went well with the grey background and help to draw attention to the buttons.

- For optimal readability, I used white for all text elements.

## Typography

- The main font used is called [Roboto](https://fonts.google.com/specimen/Roboto) and is a popular and versatile sans-serif typeface designed by Christian Robertson and released by Google in 2011.

- Sans-serif is used as a backup-font.

## Wireframes

Below are the wireframes originally sketched for both desktop and mobile versions of the page. The final version of the page closely resembled these mockups, with only a few elements being repositioned within the page.

BILD

# Frontend

## Developer Role

The primary responsibility of frontend developers is to develop the side of web applications that the user interacts with. This involves ensuring that users stay engaged on the site, requires expertise in areas such as responsiveness, accessibility, performance, interactivity, and design. While working alongside UX/UI and backend teams, frontend developers also need to have a sound understanding of backend structure to integrate it effectively with the frontend application.

## React

React is a JavaScript library for building user interfaces. It uses a declarative approach to create reusable components, making it easier to build and maintain large-scale applications. Developed by Facebook, it has a large community.

## React-Bootstrap

React-Bootstrap is a popular front-end UI library that provides pre-built components for building responsive and mobile-first web applications using React. It is built on top of Bootstrap, which is a widely-used CSS framework.

# Agile

On this project I used GitHub to create an Kanban agile project management tool to create EPICs and add User Stories. Each user story was labeled with a "must-have", "should-have" or "could-have tag, and all user stories were completed during the project.

# Future Features Ideas / Improvements

- Add a way for users to message eachother.
- Add function for uploading videos.
- Make a light version of the application and make users have the choice of choosing between light or dark mode.
- Implement more testing for the application.
- Improve performance of the application.

# API

The API is built specifically for this frontend application with the Django REST Framework. The repository for the backend can be found [here](https://github.com/Aspen92/blissfeed-drf-api).

# Technologies

## Languages

- [HTML](https://en.wikipedia.org/wiki/HTML5)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://www.w3schools.com/js/js_es6.asp)
  - [JSX](https://reactjs.org/)

## Programs, libraries, frameworks and dependencies

- [Gitpod](https://gitpod.io)
  - Gitpod as the main IDE.
- [Git](https://git-scm.com/)
  - Git for version control.
- [GitHub](https://github.com/)
  - GitHub to store the project.
- [React](https://reactjs.org/)
  - React as a JavaScript library for building the user interface.
- [Axios](https://axios-http.com/docs/intro)
  - Axios to make HTTP requests and handle the responses efficiently.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
  - React Router for routing and navigation in this React application, allowing me to create declarative, dynamic routes with components for different pages and URLs.
- [JWT](https://jwt.io/)
  - JWT (JSON Web Tokens) was used for authentication and authorization of the web application.
- [React-Bootstrap](https://react-bootstrap.github.io/)
  - React-Bootstrap React-Bootstrap for styling and responsiveness.
- [Heroku](https://id.heroku.com/login)
  - Heroku to host both of the frontend and backend applications.
- [Google Fonts](https://fonts.google.com/)
  - Google fonts for importing Roboto font.
- [Font Awesome](https://fontawesome.com/)
  - Font Awesome for icons.
- [ui.dev](https://ui.dev/amiresponsive) 
    -Ui.dev to test the responsiveness of the application.

# Testing

The W3C Markup Validator, W3C CSS Validator Services and ESLint were used to validate the code.

- [W3C Markup Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- An [ESLint](https://eslint.org/)

### Lighthouse

BILD

## Testing of implemented User Stories from User Experience (UX) section

### 1.

### 2.

### 3.

### 4.

### 5.

## Manual Testing

## Bugs

- A bug related to categories in PostsPage.js - When entering the web application the "NoResults.png" was the first to show up. This was due to setHasLoaded was set to true. Here is the code with setHasLoaded commented out -

```  //Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosReq.get(`/categories`);
        setCategories(data);
        // setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories();
  }, []);
```

# Deployment

## Development

1.  Clone [this repository](https://github.com/Aspen92/blissfeed-pp5).
2.  Open your IDE and connect to your repo, then enter this command in the terminal:

        npm install

- Make sure your package.json dependencies look like this:

      "dependencies": {
        "@testing-library/jest-dom": "^5.16.4",
        "@testing-library/react": "^11.2.7",
        "@testing-library/user-event": "^13.5.0",
        "axios": "^0.27.2",
        "bootstrap": "^4.6.0",
        "jwt-decode": "^3.1.2",
        "react": "^17.0.2",
        "react-bootstrap": "^1.6.3",
        "react-dom": "^17.0.2",
        "react-infinite-scroll-component": "^6.1.0",
        "react-router-dom": "^5.3.0",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
      },

3.  Git add, commit and push all changes to your repo.
4.  Create or log in to an account on Heroku.
5.  Create a new app on Heroku.
6.  In the Deploy section on Heroku, go to Deployment method and add your GitHub repository.
7.  Go down to Manual deploy and select deploy branch for early deployment.
8.  To run your app locally, enter this command in your terminal:

            npm run dev

# Credits

## Code

The React code for my BlissFeed project heavily relies on Code Institute's Moments walkthrough React project, which I found to have all the necessary features. However, I have incorporated my own custom styles and functionalities, such as a filtering system for categories, to meet the specific requirements of my project.

## Content

The structure and layout of this README was based on this [template](https://github.com/Code-Institute-Solutions/SampleREADME) by Code Institute.

## Media

Default profile image and default post image are from Code Institute walkthrough project 'Moments'.

## Acknowledgements

- My best friend Lucas Holm for continuous helpful feedback and support.
- Code Institute tutors for help with various issues, especially Sean and Oisin.
- Stack Overflow for problem solving.
- Code Institute Slack channels and my fellow students for asking good question and giving good answers.