# Entertainment Freak

A simple entertainment events management website, built using React, Firebase SDK, React Router, Tailwind CSS and Daisy UI.

### Technologies Used

[![Tech](https://skillicons.dev/icons?i=js,react,tailwind,vscode,firebase&theme=dark)](https://skillicons.dev)

## Getting Started

Follow these steps to clone and run the project on your local machine.

Clone the repository and navigate to the cloned repo.

#### Install Dependencies

```bash
npm install
```

#### Configure Environment Variables

You will be needing the environment variables for Firebase SDK before running the project. Please contact me if you need access to the .env.local file.

#### Run the Project

After configuring the environment variables, run this command to start the project.

```bash
npm run dev
```

### Features & Functionalities

- Browse the `Home` page to discover our services, our previously hosted events, artists we worked with, and our contact sections. All these cards are displayed with awesome AOS animations.
- Click on the Learn More! button to get detailed information about a specific service you want to book. You can only see the `details` page if you are a signed in user.
- `Login` to the website by clicking the LOGIN button on the top right of the website on the navbar. It takes you to the login page, where you can login to your user account.
- Or if you are not a member, click on `Register` to toggle to the registration page to create a user account.
- Furthermore, you also have the option to sign in to the website using `Google Authentication`.
- After login or registration, you can see your Username and Profile Photo on the top right corner of the webpage on the navbar, along with the LOGOUT button.
- Take a tour of our `Upcoming Events` or `About Us` pages to get an idea of how we manage our events.
- The service details, upcoming events, and about us pages are private, so you can only access them after you login. If you are not logged in, it will redirect you to the login page, and only after you signed in using your user details, you are then redirected to your desired page.

### Live Links

[Firebase Deploy](https://entertainment-freak.web.app/) - https://entertainment-freak.web.app/

[Netlify](https://playful-lamington-248ae1.netlify.app/)

### New Features

- Implemented server side to store data about events and tickets.
- Displayed homepage banner using React-Responsive-Carousel.
- TODO: Fix the cookie jwt error
