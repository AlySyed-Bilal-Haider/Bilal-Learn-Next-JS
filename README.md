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
 Combining pre-rendering with client-side data fetching.
 ## Pre-rendering 
 React vs Next
 
 By default, Next JS pre-renders every page in the application
 What does pre-render mean?
 
 Next JS generates HTML for each page in advance instead of having it all done by client-side
JavaScript.
![image](https://user-images.githubusercontent.com/87702448/222713171-c5388496-8a40-482c-9e46-8e2f861b09bd.png)

## Why pre-render?
 1. Pre-rendering improves performance.

  In a React app, you need to wait for the JavaScript to be executed.
  
  Perhaps fetch data from an external API and then render the UI
  
  There is a wait time for the user.
  With a pre-rendered page, the HTML is already generated and loads faster.
  
2. Pre-rendering helps with SEO.
  If you're building a blog or an e-commerce site, SEO is a concern.
  
  With a React app, if the search engine hits your page, it only sees a div tag with id equal to root
  
## Static Generation
A method of pre-rendering where the HTML pages are generated at build time.

The HTML with all the data that makes up the content of the web page are generated in advance
when you build your application.

Recommended method to pre-render pages whenever possible.

Page can be built once, cached by a CDN and served to the client almost instantly.

Ex: Blog pages, e-commerce Product pages, documentation and marketing pages.

## Static Generation contd.

Next JS, by default, without any configuration, statically generates every page in our app when
we build it for production. This allows the page to be cached by a CDN and indexed by a search
engine.
## Static Generation & Data
![image](https://user-images.githubusercontent.com/87702448/222725055-af9d0484-71ad-4c44-bede-54afc14aab24.png)

## getStaticProps

1.getStaticProps runs only on the server side
The function will never run client-side

The code you write inside getStaticProps won't even be included in the JS bundle that is sent to the
browser

2.You can write server-side code directly in getStaticProps
Accessing the file system using the fs module or querying a database can be done inside getStaticProps

3.You also don't have to worry about including API keys in getStaticProps as that won't make it to the
browser.

getStaticProps is allowed only in a page and cannot be run from a regular component file
It is used only for pre-rendering and not client-side data fetching

4. getStaticProps should return an object and object should contain a props key which is an object*
In our example, we returned an object & the object contained a props key which was an object as well.

5.getStaticProps will run at build time
 During development, getStaticProps runs on every request





