# Infiniti Users List Documentation

Welcome to the documentation for the Infiniti Users List application. This project showcases a modern web application built with cutting-edge technologies.

## Tech Stack

Our application leverages the following technologies:

- **Next.js 14**: A React framework for production
- **Tailwind CSS**: A utility-first CSS framework
- **shadcn/ui**: Re-usable components built with Radix UI and Tailwind CSS

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Problem-Solving Approach

We followed a structured approach to develop this application:

1. Analyzed the requirements for user list display and pagination
2. Designed the component structure for optimal performance and reusability
3. Implemented server components for initial data fetching
4. Created a client-side component for "Load More" functionality
5. Integrated error handling and loading states
6. Optimized for SEO and performance

## Server Components and API Service

We leveraged Next.js 14's server components to fetch initial data on the server, improving performance and SEO. Here's how we implemented it:

1. Created a `services.ts` file to handle API requests
2. Implemented the `getUsers` function to fetch users from the external API
3. Used this function in the server component (`app/users/page.tsx`) for initial data fetching
4. Passed the fetched data to a client component for interactive features

This approach allows us to benefit from server-side rendering while maintaining interactive client-side features, resulting in improved performance and SEO compared to the traditional route handler approach.

## Exploring the Application

To explore the Users List, click the "Go to Users Page" button on the homepage.

## Learn More

For more information about the technologies used in this project, visit their official documentation:

- [Next.js Documentation](https://nextjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
