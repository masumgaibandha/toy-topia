ToyTopia – A Local Kids Toy Store Platform

ToyTopia is a playful online platform where families can explore, try, and support local toy sellers. Users can browse toys, view detailed info, and experience a smooth login-protected shopping flow.

Live URL: https://github.com/masumgaibandha/toy-topia

Purpose

To build a vibrant, responsive, and engaging single-page web app for kids' toys using React, Firebase, and Tailwind CSS, featuring authentication, protected routes, and dynamic user interactions — all while supporting local toy businesses.

Key Features

Home Page

Eye-catching slider and Popular Toys section from JSON data

Category filter (All, Building Blocks, STEM, Stuffed Animals, Puzzles)

Extra sections: “Shop Local” and “Top Categories”

Protected Routes

/toy/:id → Toy Details + “Try Now” form (toast message)

/profile → Editable user profile (name & photoURL)

/my-toys → Extra private route for user’s toy list (example)

Authentication

Email/password + Google sign-in

Password validation (min 6 chars, 1 uppercase, 1 lowercase)

Forgot Password flow (pre-filled email + Gmail redirect)

App Behavior

Persistent user session (onAuthStateChanged)

Dynamic document titles per route

Loader while Firebase initializes

UI / UX

Fully responsive (mobile → desktop)

Unified theme color: #EA4A30

Navbar & Footer on all pages (except 404)

404 Page

Custom error page with navigation back to Home

NPM Packages Used
Package	Purpose
react, react-dom	Core React library
react-router	Routing for SPA
firebase	Authentication (email + Google)
react-toastify	Toast notifications
react-icons	Icons (Google, Eye toggle, etc.)
react-spinners	Loading indicators
tailwindcss	CSS utility framework
daisyui	Tailwind UI components
vite	Fast build tool and dev server

