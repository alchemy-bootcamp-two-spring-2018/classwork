Auth and Deploy
===

## Announcements, Review and Questions

* Kata and Lab Review
* ?

## Simple User Management

### User Management

1. Add table to db for users
1. Add `/signup` and `/signin` routes
    1. signup checks for uniqueness of user (by username or email), then creates if not already taken
    1. signin selects by email from users table and then and checks password
    1. Both respond with `{ id: id-of-user }`
    1. If your app needs it, you can add other user information like display name. Both store in users table and return as part of "token"
1. Add "auth" route(s) to your app for signing up and signing in
1. Add service api calls for those components to call server

### Auth Token

1. On successful signup/in, event the user object (the one with the id) up to the App and store in data and in local storage.
1. In services api, add header to `fetch` that gets token from localstorage (if it exists) and puts value of user id into "Authorization" header
1. On server, add middleware that checks for token
    1. Send back error if not found
    1. Otherwise, add user id to `req` and call `next()`
1. Add token/user check to `App` `created` to load token from local storage.
1. Protecting Routes
    1. For simplicity, use `v-if` to control based on `user` data
1. Provide logout

## Deployment

1. Two-repo solution
1. Create heroku account
1. Download nodejs tools
1. In `server`:
    1. Create heroku project
    1. Add postgres db
    1. Run `db` scripts against prod db
    1. Add `engine` to `package.json`
1. Deploy:
    1. commit!
    1. `git push heroku master`
    1. `heroku open`
    1. Profit!