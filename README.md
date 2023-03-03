This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Routing Summary
1. Page based routing mechanism - Pages are associated with a route based on their file name
2. Nested routes - Nested folder structure, files will be automatically routed in the same way in
the URL
3. Dynamic routes - Can be created by adding square brackets to a page name
4. Catch all routes - Add three dots inside square brackets to create a catch all route. Helpful
when you want different URLs for the same page layout or even when you're working with pages
where some of the route parameters are optional
5. Link component to navigate on click of an element
6: How to create Programmetically Navigations.
7: How to create 404 Custom page.
## Pre-rendering and Data Fetching.
Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
The difference is in when it generates the HTML for a page. 
Static Generation is the pre-rendering method that generates the HTML at build time.
The pre-rendered HTML is then reused on each request.
Types of pre-rendering
  1. Static Generation
   - without data
   - with data
   - Incremental Static Generation
   - dynamic parameters when fetching data
  2. Server-side Rendering
   - data fetching
Client-side data fetching
 Combining pre-rendering with client-side data fetching

