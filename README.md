# Setup


Run `npm install` to install all the dependencies.

### Environment variables

Create .env.local file in the root folder and add the following environment variables
```
VITE_API_URL=<your-root-api-url>
VITE_API_KEY=<your-api-access-token>
```

### Code formatting

This project uses Prettier for code formatting. It's installed along other dependencies, 
but you may need to additionally configure your editor/IDE to use it as a default formatter.

# Running 

Run `npm run dev` to start the app locally

# Component unit tests

Run `npm run test` to run all component unit tests

Run `npm run storybook` to view components in Storybook

# Architecture

**main.tsx** - entry point, contains routing configuration wrapped by all of the top level Context providers

**RootLayout.tsx** - layout for routes that don't need authentication.

**ProtectedRoutes.tsx** - layout for routes only visible to authenticated users. It automatically 
redirects back to login page if there is no valid authentication.

---
**/components** - contains reusable components that could also be shared with other projects
- **/primitives** - simple components that usually don't use other components. Example: inputs, buttons, cards etc.
- **/blocks** - more complex components consisting of other components. Example: navbars etc. 
---
**/config** - files for any sort of configuration. Usually just contain exported variables and constants for base api url etc.

---
**/pages** - top-level components that render when you hit a route. Could also be called routes or screens.

---
**/features** - Components, hooks, providers etc. related to app features, like blog post lists. Lower level ones (single blog post) are "dumb" component that receive data trough props. Since they are not coupled directly with business logic, if needed they can be used in other apps.  

---
**/services** - used for communicating with the "outside world". They can call APIs, talk to local storage etc. React 
components don't usually use them directly, they communicate with services via Context.

# Potential improvements
 - Truncate post preview body text to a certain length, to avoid having large blog post cards when a post is long
 - Dedicated Loading component, perhaps a skeleton
 - Dedicated Error component for smaller errors, like an issue with loading post comments.
 - Dedicated EmptyState component, when there are 0 blog posts
