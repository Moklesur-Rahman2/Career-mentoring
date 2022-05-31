import React from 'react';

const Blog = () => {
    return (
        <div className='blog'>
            <div className="blog-header bg-info">
                <div className="container py-5">
                    <h1 className='text-center'>Blog</h1>
                </div>
            </div>
            <div className="container py-5">
                <h2 className='mb-5'>Question and Answers</h2>
                <div className="question">
                    <h4>Difference between authorization and authentication</h4>
                    <p>Authentication verifies who the user is.</p>
                    <p>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</p>
                    <p>Authentication is visible to and partially changeable by the user.</p>
                    <p>Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</p>

                    <p className='mt-5'>Authorization determines what resources a user can access.</p>
                    <p>Authorization works through settings that are implemented and maintained by the organization.</p>
                    <p>Authorization always takes place after authentication.</p>
                    <p>Authorization isn’t visible to or changeable by the user.</p>
                </div>
                <div className="question mt-5">
                    <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </p>
                    <p>Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system. It offers a straightforward getting started experience, optional UX components designed to minimize user friction, and is built on open standards and backed by Google infrastructure.
                    </p>
                </div>
                <div className="question">
                    <h4>What other services does firebase provide other than authentication</h4>
                    <p>There are many services firebase provide list are below:</p>
                    <ul>
                        <li>Realtime Database</li>
                        <li>Remote config</li>
                        <li>firebase Ml</li>
                        <li>Cloud fuctions</li>
                        <li>Cloud Messaging</li>
                        <li>Hosing</li>
                        <li>Cloud storage</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog;