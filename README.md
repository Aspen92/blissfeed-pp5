# BlissFeed - [Live link](https://blissfeed-pp5.herokuapp.com/)

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

# User Stories

## _Sprint #1_

### Navigating the site

- As a user I can access the navbar from all pages so that I can navigate between pages.
- As a user I can view a list of the most popular profiles on desktop and mobile so that I can be easy access the most popular profiles.

### User authentication

- As a user I can access a sign up page where I can create my own account so that I get all the features of the site.
- As a user I can view a page where I can sign in to get access to my profile so that I can get all the benefits for a signed in user.

### Create posts

- As a signed in user I can create posts so that I can share my pictures and thoughts to other users.

### Like posts

- As a signed in user I can like or remove likes on posts so that I can show support to different users/users content or correct a unwanted like on posts.

### Post list page

- As a user I can view the latest posts uploaded to the website in descending order so that every time I visit the website I get the latest content.
- As a signed in user I can access my feed page that shows a filtered view of content from users I'm following so that I can easier find only the content of the specific profiles I'm following.
- As a user I can search for content on the site by keywords so that I can find the content I want to engage in.

### Post detail page

- As a user I can access a more detailed view of every post so that I can interact with the specific post in more detail.
- As a user I can delete my own posts so that I have full control of what content I want to have on my profile.
- As a signed in user I can edit my own posts so that I can fix typos or update the content.
- As a signed in user I can add comments to posts so that I can engage in the conversation on specific posts.
- As a user I can read comments on posts so that I can engage and see what people are talking about on that specific post.
- As a user I can delete my own comments on posts so that I can have full control of my comments.
- As a user I can edit my own comments that i've made on a post so that I can fix any typos or just update my existing comment.
- As a user I can see when a comment was made so that I know how old/relevant the comment is.

### Profile page

- As a user I can add my own and see other users avatars so that I can easier identify specific users.
- As a signed in user I can edit and update my profile - profile picture and bio so that I can have my profile up to date.
- As a user I can view different profile pages so that I can access their profile information and content.
- As a signed in user I can follow or unfollow profiles so that I can follow a specific profile to see it's content or vice versa.
- As a signed in user I can change my username and password so that I can change my displayed name and change my password for convenience.
- As a user I can view profile information of a specific user, like number of posts/followers and following count so that I can see detailed information of a specific profile.
- As a user I can access all the posts of a specific profile so that I can view their latest content.

## _Sprint #2_

### Post categories

- As a user I can access a dropdown menu with different categories that is linked to posts so that I can filter what posts I'm seeing based on categories.

## _Spring #3_

- As a user I can access a form to message other users so that I can stay in contact with my followers och people I'm following.
- As a user I can access a form where I'm able to upload videos so that I can share more content with my followers.

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

BILD

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

### **Navigation**

| Test               | Action                                        | Expected Result                                                                                                                   | Pass |
| ------------------ | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ---- |
| Site logo          | Click logo                                    | Take the user to the home page.                                                                                                   | ✓    |
| Sign in navbar     | Click "Sign in" link                          | Take the user to the sign in page.                                                                                                | ✓    |
| Sign in page       | Click "Sign in" button                        | If user signs in, redirect to home.                                                                                               | ✓    |
| Sign in page       | Click "Sign up" link                          | Take the user to the sign up page.                                                                                                | ✓    |
| Sign up navbar     | Click "Sign up" link                          | Take the user to the sign up page.                                                                                                | ✓    |
| Sign up page       | Click "Sign up" button                        | If user signs up, redirect to sign in page.                                                                                       | ✓    |
| Sign up page       | Click "Sign in" link                          | Take the user to the sign in page.                                                                                                | ✓    |
| Sign up/sign in    | Enter URL for sign up/sign in while logged in | Redirects user to home page.                                                                                                      | ✓    |
| Sign out navbar    | Click "Sign out" link                         | Sign out user and redirect to home page.                                                                                          | ✓    |
| Create post navbar | Click "New post +" link                       | When signed in, takes the user to the create post page.                                                                           | ✓    |
| Create post page   | Click "Create" button                         | If user creates post, redirect to this post.                                                                                      | ✓    |
| Post "Feed" navbar | Click "Feed" link                             | Render list of posts from users the user is following.                                                                            | ✓    |
| Post "Liked"       | Click "Liked" link                            | Render list of posts the user has liked.                                                                                          | ✓    |
| Profile navbar     | Click profile image or name                   | Take user to user's profile page                                                                                                  | ✓    |
| Profile site-wide  | Click profile image or name                   | Take user to the clicked user's profile page.                                                                                     | ✓    |
| Edit post          | Click edit icon in dropdown                   | Take user to edit post page.                                                                                                      | ✓    |
| Edit post page     | Click "Save" button                           | Take user to newly edited post.                                                                                                   | ✓    |
| Edit post page     | Click "Cancel" button                         | Take user back to the post.                                                                                                       | ✓    |
| Delete post        | Click delete icon in dropdown                 | Delete post and take user to previous page.                                                                                       | ✓    |
| Infinite scroll    | Scrolling to end of page                      | Render new posts and/or comments if there's more than 10 of any.                                                                  | ✓    |
| Unauthorized       | Visit page unauthorized                       | Reaching a create, edit or delete page through URL manipulation to content the user is not authorized for, redirect to home page. | ✓    |

<br/><br/>

### **Features**

| Test            | Action                 | Expected Result                                                                                                          | Pass |
| --------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------ | ---- |
| Like/unlike     | Click like icon        | When clicked, increment/decrement like counter and to liked posts.                                                       | ✓    |
| Like/unlike     | Click like icon        | When clicked, liked posts appear in "Liked" list view. Unliked posts disappear from "Liked" list view.                   | ✓    |
| Follow/unfollow | Click "Follow" button  | When clicked, increment/decrement follower/following counter and add to user followers or following lists.               | ✓    |
| Follow/unfollow | Click "Follow" button  | When clicked, followed user's posts appear in "Feed" list view. Unfollowed user's posts disappear from "Feed" list view. | ✓    |
| Comment         | Click "Comment" button | When clicked, increment comment count and add comment.                                                                   | ✓    |
| Comment         | Comment icon           | Take user to the specific post and display comments with username and date of comment.                                   | ✓    |

<br/><br/>

### **Validation**

| Test        | Action               | Expected Result                                                                                                                         | Pass |
| ----------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| Sign up     | Form valid           | If the form is valid, user is redirected to sign in page.                                                                               | ✓    |
| Sign up     | Form invalid         | If the form is NOT valid, i.e required field not filled, wrong password format or duplicate username the user is notified of the error. | ✓    |
| Sign in     | Form valid           | If the form is valid, user is redirected to home page.                                                                                  | ✓    |
| Sign in     | Form invalid         | If the form is NOT valid, i.e required field not filled or wrong password, the user is notified of the error.                           | ✓    |
| Sign out    | Sign out             | If the user signs out, the navbar reflects the change and functions reserved for signed in users are not displayed.                     | ✓    |
| Create post | Create form valid    | If the form is valid, user is redirected to the newly created post.                                                                     | ✓    |
| Create post | Create form invalid  | If the form is NOT valid, i.e required field not filled or title already exist the user is notified of the error.                       | ✓    |
| Edit post   | Edit form valid      | If the form is valid, user is redirected to the newly edited post.                                                                      | ✓    |
| Edit post   | Edit form invalid    | If the form is NOT valid, the user is notified of the error.                                                                            | ✓    |
| Delete post | Deleting post        | If the user deletes a post, take user to its profile page.                                                                              | ✓    |
| Comment     | Comment form valid   | If the form is valid, a new comment is created.                                                                                         | ✓    |
| Comment     | Comment form invalid | If the form is empty, clicking "Comment" button does nothing.                                                                           | ✓    |

<br/><br/>

### **Error Handling**

| Test | Action                      | Expected Result                                                                                                                                                                    | Pass |
| ---- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 404  | Wrong URL                   | If page does not exist, display custom component on page with information.                                                                                                         | ✓    |
| 404  | ID of posts non-existent    | Manually entering a posts/id URL that is non-existent, redirect to homepage and clear browser history (404 is not displayed because of routing issues concerning dynamic ID's).    | ✓    |
| 404  | ID of profiles non-existent | Manually entering a profiles/id URL that is non-existent, redirect to homepage and clear browser history (404 is not displayed because of routing issues concerning dynamic ID's). | ✓    |

## Bugs

- A bug related to categories in PostsPage.js - When entering the web application the "NoResults.png" was the first to show up. This was due to setHasLoaded was set to true. Here is the code with setHasLoaded commented out -

```//Fetch categories
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
- User - https://github.com/JFrdrkssn for README Manual testing template.
