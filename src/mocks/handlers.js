import { rest } from "msw";

// Define the base URL for the API
const baseURL = "https://blissfeed-drf-api.herokuapp.com";

// Define an array of request handlers for the API
export const handlers = [
  // Define a GET request handler to get the user's data
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 9,
        username: "alex",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 9,
        profile_image:
          "https://res.cloudinary.com/du80wvupi/image/upload/v1/media/../profile_default_mbwtno",
      })
    );
  }),
  // Define a POST request handler to sign out the user
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
