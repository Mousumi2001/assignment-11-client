import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-pink-700 '>Questions and Answer:-</h1>
            <div className='grid justify-center lg:ml-10 my-6'>
                <h1 className='bg-white rounded-full text-xl p-4 w-2/4 font-bold my-3'> <span className='text-blue-500 font-bold'>1. </span>Difference between SQL and NoSQL ?</h1>
                <p className='text-md bg-white rounded-full w-2/3 '>SQL is the most common language for extracting and organizing data that is stored in a relational database . A database is a table that consists of rows and columns. SQL is the language of databases.NoSQL is an approach to database management that can accommodate a wide variety of data models, including key-value, document, columnar and graph formats . </p>
            </div>
            <div className='grid justify-center lg:ml-10 my-6'>
                <h1 className='bg-white rounded-full text-xl p-4 w-2/4 font-bold my-3'>
                    <span className='text-blue-500 font-bold'>2. </span> What is JWT, and how does it work?</h1>
                <p className='text-md bg-white rounded-full w-2/3'>JWT, or JSON Web Token , is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            </div>
            <div className='grid justify-center lg:ml-10 my-6'>
                <h1 className='bg-white rounded-full text-xl p-4 w-2/4 font-bold my-3'>
                    <span className='text-blue-500 font-bold'>3. </span> What is the difference between javascript and NodeJS?</h1>
                <p className='text-md bg-white rounded-full w-2/3'>Javascript is a programming language that is used for writing scripts on the website.
                    NodeJS is a Javascript runtime environment.
                    Javascript can only be run in the browsers.	We can run Javascript outside the browser with the help of NodeJS.
                    It is basically used on the client-side.	It is mostly used on the server-side.
                    Javascript is capable enough to add HTML and play with the DOM.
                    Nodejs does not have capability to add HTML tags.
                    Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                    V8 is the Javascript engine inside of node.js that parses and runs Javascript. </p>
            </div>
            <div className='grid justify-center lg:ml-10 my-6'>
                <h1 className='bg-white rounded-full text-xl p-4 w-2/4 font-bold my-3'>
                    <span className='text-blue-500 font-bold'>4. </span> How does NodeJS handle multiple requests at the same time?</h1>
                <p className='text-md bg-white rounded-full w-2/3'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blog;