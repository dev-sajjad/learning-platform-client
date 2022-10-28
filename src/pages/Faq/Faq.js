import React from 'react';

const Faq = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 w-2/4 mx-auto">
        <div>
          <h2 className=" text-xl font-semibold mb-2 text-black bg-rose-300">
            What is cors?
          </h2>
          <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </p>
        </div>
        <div>
          <h2 className=" text-xl font-semibold mb-2 text-black bg-rose-300">
            Why i am using firebase?
          </h2>
          <p>
            Firebase helps you develop high-quality apps, grow your user base,
            and earn more money. Each feature works independently, and they work
            even better together.
          </p>
          <h2 className=" text-xl font-semibold mb-2 text-black bg-rose-300">
            {" "}
            What other options do you have to implement authentication?
          </h2>
          <p>
            Usually, authentication by a server entails the use of a user name
            and password. Other ways to authenticate can be through cards,
            retina scans, voice recognition, and fingerprints.
          </p>
        </div>
        <div>
          <h2 className=" text-xl font-semibold mb-2 text-black bg-rose-300">
            How does the private route work?
          </h2>
          <p>
            The react private route component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property
          </p>
        </div>
        <div>
          {" "}
          <h2 className=" text-xl font-semibold mb-2 text-black bg-rose-300">
            What is node?
          </h2>
          <p>
            Node.js is written in C, C++, and JavaScript, and it is built on the
            open-source V8 JavaScript engine which also powers JS in browsers
            such as Google Chrome. As V8 supports new features in JavaScript,
            they are incorporated into Node.
          </p>
        </div>

        <div>
          <h2 className=" text-xl font-semibold mb-2 text-black bg-rose-300">
            How dose node work?
          </h2>
          <p>
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
          </p>
        </div>
      </div>
    );
};

export default Faq;