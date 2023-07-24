import React, { useRef, useState } from "react";

import Footer from "../share/footer/Footer";
import Header from "../share/header/Header";
import Pdf from "react-to-pdf";

const BlogPages = () => {
  const [inputValue, setInputValue] = useState({
    note: "",
    date: "",
    issued: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      [name]: value
    });
  };

  const ref = useRef();
  return (
    <div  className="BlogPages">
     
      <Header></Header>
      <div className="flex justify-end mx-auto px-12  font-bold">
     <Pdf targetRef={ref} filename="document.pdf" className='container mx-auto'>
        {({ toPdf }) => (
          <button onClick={toPdf} className="btn-shadow">
            Generate PDF
          </button>
        )}
      </Pdf>
     </div>
      <div className="container mx-auto px-8" ref={ref}>
        <div className="mb-14">
        <h2 className='text-center text-teal-500 h2 pt-8 py-12' >Blogs</h2>
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Components
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  11 May 2023
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Tell us the differences between uncontrolled and controlled
                  components.
                </h2>
                <p className="leading-relaxed">
                  In React, there are two ways to manage form inputs: controlled
                  components and uncontrolled components. Here are the main
                  differences between them: <br />
                  <br />
                  <h1 className="h6">Controlled components:</h1>
                  <br />
                  <p className="p">Advantages:</p>
                  <br />
                  ➤Full control over the value of the form field, so you can
                  easily validate and sanitize user input.
                  <br />
                  ➤Easily implement custom behaviors, such as debouncing,
                  throttling, or auto-focusing.
                  <br />
                  ➤Store the form data in the component's state and pass it up
                  to a parent component when the form is submitted.
                  <br /><br />
                  <p className="p">Disadvantages:</p>
                  <br />
                  ➤They require more code and state management, which can make
                  them more complex and harder to debug.
                  <br />
                  ➤They can be slower to update, since every keystroke triggers
                  a re-render of the component.
                  <br /> <br />
                  <h1 className="h6">Uncontrolled components:</h1>
                  <br />
                  <p className="p">Advantages:</p>
                  <br />
                  ➤They are simpler and require less code, since you don't need
                  to manage state or write an onChange handler.
                  <br />
                  ➤They can be faster to update, since the value of the form
                  field is stored in the DOM, not in the component's state.
                  <br />
                  ➤They work well for simple forms or forms with many fields.
                  <br /> <br />
                  <p className="p">Disadvantages:</p>
                  <br />
                  ➤They don't provide a way to validate or sanitize user input
                  before it is submitted.
                  <br />
                  ➤They can be harder to integrate with React state or parent
                  components.
                  <br />
                  <br />
                </p>
                <figure className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                  <a href="#">
                    <img
                      className="rounded-lg mx-auto object-cover"
                      src="https://i.ibb.co/58vqzMJ/uncontrolled-forms-name-attrs.png"
                      alt="blogs description image"
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>

          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Props
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  15 May 2023
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  How to validate React props using PropTypes?
                </h2>
                <p className="leading-relaxed">
                  PropTypes is a library that is used in React to validate the
                  props that are passed to a component. PropTypes helps you to
                  ensure that the props that your component receives are of the
                  correct type and shape. This is important because it can help
                  you catch errors early and prevent unexpected behavior in your
                  app. <br />
                  <br />
                  To use PropTypes, you need to import the library from the
                  prop-types package, which is typically included as a
                  dependency in your project. You can then declare the PropTypes
                  for each prop that your component expects, using the propTypes
                  property of your component.
                  <br />
                  <br />
                  PropTypes provides a number of different types that you can
                  use to validate your props, such as string, number, bool,
                  object, array, and more. You can also use PropTypes to
                  validate the shape of an object, by defining a PropTypes
                  object that matches the structure of the expected object.
                  <br />
                  <br />
                  When you define a PropTypes object for your component, you can
                  use the isRequired modifier to indicate that a prop is
                  required, and should throw a warning if it is not provided.
                  This can help you catch errors early and prevent unexpected
                  behavior in your app.
                  <br />
                  <br />
                  Overall, PropTypes is a powerful tool that can help you write
                  more robust and reliable React components, by ensuring that
                  the props that your component receives are of the correct type
                  and shape.
                  <br />
                  <br />
                </p>
                {/* <figure className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                  <a href="#">
                    <img
                      className="rounded-lg mx-auto object-cover"
                      src="https://i.ibb.co/thryNW0/customhook.png"
                      alt="blogs description image"
                    />
                  </a>
                </figure> */}
              </div>
            </div>
          </div>

          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Server side
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  31 May 2023
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Tell us the difference between nodejs and express js.
                </h2>
                <p className="leading-relaxed">
                  Node.js and Express.js are both popular technologies for
                  building web applications in JavaScript. While they are
                  related, there are some important differences between them:
                  <br /> <br />
                  Node.js is a runtime environment for executing JavaScript code
                  outside of a web browser. It allows you to write server-side
                  code in JavaScript, and provides a number of built-in modules
                  for working with files, networking, and other system-level
                  tasks.
                  <br /> <br />
                  Express.js is a web framework built on top of Node.js, which
                  provides a higher-level abstraction for building web
                  applications. Express.js provides a number of features such as
                  routing, middleware, and template engines that make it easier
                  to build web applications.
                  <br />
                  <br />
                  Node.js is the underlying technology that allows you to write
                  server-side code in JavaScript, while Express.js provides a
                  set of tools and conventions for building web applications on
                  top of Node.js.
                  <br />
                  <br />
                  Node.js provides a low-level API for working with HTTP
                  requests and responses, while Express.js provides a
                  higher-level API that abstracts away some of the details of
                  working with HTTP.
                  <br />
                  <br />
                  While Node.js provides basic support for handling HTTP
                  requests and responses, Express.js provides a more robust and
                  flexible set of features for building web applications, such
                  as routing, middleware, and template engines.
                  <br />
                  <br />
                  In summary, Node.js is a runtime environment for executing
                  JavaScript code, while Express.js is a web framework built on
                  top of Node.js that provides a higher-level API for building
                  web applications. While both technologies are related, they
                  serve different purposes and are often used together to build
                  modern web applications.
                  <br />
                  <br />
                </p>
                {/* <figure className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                  <a href="#">
                    <img
                      className="rounded-lg mx-auto object-cover"
                      src="https://i.ibb.co/7KfKzMT/useref.png"
                      alt="blogs description image"
                    />
                  </a>
                </figure> */}
              </div>
            </div>
          </div>

          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Custom Hook
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  13 May 2023
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  What is a custom hook, and why will you create a custom
                  hook?
                </h2>
                <p className="leading-relaxed">
                  A custom hook is a reusable function in React that
                  encapsulates logic that can be shared across multiple
                  components. Custom hooks allow you to extract common code from
                  your components into a separate function, which can be easily
                  reused across different parts of your application. <br />{" "}
                  <br />
                  A custom hook can be created for a wide range of use cases,
                  such as managing state, performing side effects, fetching
                  data, or handling events. By creating a custom hook, you can
                  avoid duplicating code in your components, and make your code
                  more modular and easier to test.
                  <br />
                  <br />
                  Custom hooks are created by prefixing a function with the word
                  "use". For example, if you wanted to create a custom hook for
                  managing a counter, you might create a function called
                  "useCounter". This function would then use React's built-in
                  hooks, such as useState, to manage the state of the counter,
                  and expose an API that can be used by other components.
                  <br />
                  <br />
                  Creating a custom hook can provide a number of benefits, such
                  as reducing duplication, improving readability, and
                  simplifying testing. By encapsulating logic in a custom hook,
                  you can also make it easier to reuse code across different
                  parts of your application, and make your code more modular and
                  easier to reason about.
                  <br />
                  <br />
                </p>
                <figure className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                  <a href="#">
                    <img
                      className="rounded-lg mx-auto object-cover"
                      src="https://i.ibb.co/6R5w6GB/1-K5-Qp-Nirqw-E9-DUCn-FMSe-z-Q.png"
                      alt="blogs description image"
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BlogPages;
