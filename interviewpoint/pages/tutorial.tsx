import Navbar from "../component/navbar";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import tutorialStyle from "../AllCss/Tutorial.module.css";
import Footer from "../component/Footer";
import SingleTutorial from "@/component/Singletutorial";

const Tutorial = () => {
  const [dash, setDash] = React.useState(true);
  const [react, setReact] = React.useState(false);
  const [mongo, setMongo] = React.useState(false);
  const [express, setExpress] = React.useState(false);
  const [node, setNode] = React.useState(false);

  const handleReact = () => {
    setDash(false);
    setReact(true);
    setMongo(false);
    setExpress(false);
    setNode(false);
  };
  const handleMongo = () => {
    setDash(false);
    setReact(false);
    setMongo(true);
    setExpress(false);
    setNode(false);
  };
  const handleExpress = () => {
    setDash(false);
    setReact(false);
    setMongo(false);
    setExpress(true);
    setNode(false);
  };
  const handleNode = () => {
    setDash(false);
    setReact(false);
    setMongo(false);
    setExpress(false);
    setNode(true);
  };
  const handleBack = () => {
    setDash(true);
    setReact(false);
    setMongo(false);
    setExpress(false);
    setNode(false);
  };

  console.log("react", react, "mongo", mongo, "express", express, "node", node);
  const playerRef = React.useRef<any>();

  let ReactInfo = [
    { time: 73, title: "Differentiate between Virtual DOM and Real DOM" },
    { time: 183, title: "What is React?" },
    { time: 272, title: "What is the meaning of Virtual DOM?" },
    { time: 351, title: "What are some of the important features of React?" },
    { time: 444, title: "What is the meaning of JSX?" },
    { time: 521, title: "Can browsers read a JSX file?" },
    { time: 593, title: "Why is React widely used today?" },
    { time: 708, title: "Are there any disadvantages of using React?" },
    { time: 812, title: "Differentiate between Angular and React" },
    {
      time: 884,
      title:
        "What is the meaning of the component-based-architecture of React?",
    },
    { time: 957, title: "How does rendering work in React?" },
    { time: 1017, title: "What are states in React?" },
    { time: 1054, title: "What are props in React?" },
    { time: 1117, title: "What is the use of an arrow function in React?" },
    { time: 1187, title: "What is a higher-order-component in React?" },
    { time: 1256, title: "What is the meaning of create-react-app in React?" },
    {
      time: 1313,
      title:
        "What are some of the advantages of using create-react-app in React?",
    },
    { time: 1382, title: "What is the meaning of Redux?" },
    { time: 1461, title: "What is the difference between props and states?" },
    {
      time: 1523,
      title: "What are the three phases of a component life cycle in React?",
    },
    { time: 1607, title: "What are events in React?" },
    { time: 1667, title: "How are events created in React?" },
    {
      time: 1725,
      title: "How is routing in React different from conventional routing?",
    },
    { time: 1825, title: "Differentiate between Flux and Redux in React." },
    { time: 1920, title: "Can AJAX be used with React?" },
    { time: 1988, title: "What is the meaning of synthetic events in React?" },
    { time: 2047, title: "What are stateful components in React?" },
    { time: 2097, title: "What are refs in React?" },
    { time: 2164, title: "What are controlled components in React?" },
    { time: 2222, title: "Why is a router required in React?" },
  ];

  let NodeInfo = [
    { time: 37, title: "What is Node JS?" },
    {
      time: 87,
      title: "What is the difference between a Node JS and Javascript?",
    },
    { time: 183, title: "Can you briefly explain the working of Node JS?" },
    { time: 224, title: "Where is Node JS used?" },
    { time: 280, title: "What is the difference between Node JS and Angular?" },
    { time: 397, title: "Why is Node JS single-threaded?" },
    {
      time: 448,
      title: "What are the different API functions supported by Node JS?",
    },
    {
      time: 499,
      title:
        "What is the difference between synchronous and asynchronous functions?",
    },
    { time: 596, title: "What is the meaning of control flow function?" },
    { time: 641, title: "Why is Node JS so popular these days?" },
  ];

  let ExpressInfo = [
    { time: 33, title: "What is Express JS?" },
    { time: 153, title: "What are the Express JS features?" },
    { time: 426, title: "How to install Express JS?" },
    { time: 524, title: "What is Scaffolding in Express JS?" },
    { time: 677, title: "How to serve static files in Express JS?" },
    { time: 761, title: "What is Routing in Express JS?" },
    { time: 898, title: "What is dynamic routing in Express JS?" },
    { time: 992, title: "What is middelware in Express JS?" },
    { time: 1153, title: "Which templates Engines does support express?" },
    { time: 1191, title: "What is HTTP methods?" },
  ];

  let MongoInfo = [
    { time: 17, title: "What is NoSQL?" },
    { time: 50, title: "When to use NoSQL?" },
    { time: 82, title: "When to use SQL?" },
    {
      time: 126,
      title: "How does NoSQL database management system budget memory?",
    },
    { time: 156, title: "What is eventual consistency in NoSQL Stores?" },
    { time: 183, title: "What is Namespace in MongoDB?" },
    {
      time: 204,
      title:
        "What is the syntax to create a collection and to drop a collection in MongoDB?",
    },
    { time: 237, title: "Mention what is ObjectID composed of?" },
    {
      time: 276,
      title: "In a single MongoDB document what is the store capacity?",
    },
    {
      time: 294,
      title:
        "What is the alternate to store more than 16MB data in MongoDB document?",
    },
  ];

  return (
    <Box pb="20px">
      <Navbar />
      <button className={tutorialStyle.backBtn} onClick={() => handleBack()}>
        Back To Tutorials
      </button>
      {dash && (
        <div className={tutorialStyle.dash}>
          <div className={tutorialStyle.dashDiv} onClick={() => handleReact()}>
            <img
              src="data:image/png;base64,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"
              alt="react"
            />
            <div className={tutorialStyle.dashDivIn}>
              <h1>REACT: </h1>
              <h2>
                React is a free and open-source front-end JavaScript library for
                building user interfaces based on UI components. It is
                maintained by Meta and a community of individual developers and
                companies.
              </h2>
            </div>
          </div>
          <div className={tutorialStyle.dashDiv} onClick={() => handleMongo()}>
            <img
              src="data:image/png;base64,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"
              alt="mongo"
            />
            <div className={tutorialStyle.dashDivIn}>
              <h1>MONGO : </h1>
              <h2>
                MongoDB is a source-available cross-platform document-oriented
                database program. Classified as a NoSQL database program,
                MongoDB uses JSON-like documents with optional schemas. MongoDB
                is developed by MongoDB Inc. and licensed under the Server Side
                Public License which is deemed non-free
              </h2>
            </div>
          </div>
          <div
            className={tutorialStyle.dashDiv}
            onClick={() => handleExpress()}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAkCAMAAACE/VXhAAAAWlBMVEX///98hIvBxMfX2dvR09WXnKG5vL+IjpTr7O319vbx8vJ5gIfn6One3+H5+fnk5eerr7OOlJpyeoLIys2CiY+fo6hrc3uxtblkbXWkqa1cZm87SVVQW2VIVF/rn/gzAAACb0lEQVRYhe1VXbOcIAxFEBBcEESW6237//9m+RLinXXvdDrTh47nSZLAOQkhInTjxo0bfwEZqGcify7dKmT0JNNOPa42HaMEoy4vsKfm0cKnQKknbbkYSo16S0utkpJwn77d3syrRiQgOftFTONcmPGIdk6SGhS2UQq1D6IeQpUUD7wWKs33RYolrPKa9lk1qzXvPyTbmDphaK3nBpN5FR2r29UKPPPR9kitMM2VT39c0trp+CJ7TTMzpAQJnntV0sl4Z6i7C1KIsMdKpi9l2pnhgvZB+/eWNw7ZnA8ig+veZHefR1rdzsZ0m22ZPK5t09sFLxX9e8zJjKadq36ASBsjXVXpgB7EY779+HQPaj8tX+GkhxcpCvFSfAK9sacQrnxWf9lloZBY+/edHOtg4are5hbq7REDnCoUbhBYeZMIM5sJ2OjM3rRyLNDPbeioIsiv6iUMhgLeJ9g01LtWfuCs14HQ+UsRTrz2hXFWvu6F3bhc5duhRwvaFAnHzevA40pPiC/JuKoZmEf8LW+EOrswvYiDYVNuwzzstnxZ6gm8XnZe/wCOKH0HYctpOVzwwhnKEuNYSpMZ1Sfo26Tw4F3AyRM9vYrU8iAZD7sNALy8zCWrwCldADG+i3KAF84NHusQ+g8hJWJ7L3P44iBC61muEJCKQ5qT+PAuWU/jVa0vWK5Pm8M6KZqarMeL/qnwNKtTc9Js+48wjvr4jlie35qVsjReNJbRMNHS8stH9mj3zPm58l/S7LoB4x7PKbU5sQm+uJDf7+Rt9FY+1ftJhLiLm6OimqUwi7vXU26vpuQ3OM2Nf4ib9//mvXHjz/Abf0YWNZvQCZwAAAAASUVORK5CYII="
              alt="express"
            />
            <div className={tutorialStyle.dashDivIn}>
              <h1>EXPRESS :</h1>
              <h2>
                Express.js, or simply Express, is a back end web application
                framework for building RESTful APIs with Node.js, released as
                free and open-source software under the MIT License. It is
                designed for building web applications and APIs.
              </h2>
            </div>
          </div>
          <div className={tutorialStyle.dashDiv} onClick={() => handleNode()}>
            <img
              src="data:image/png;base64,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"
              alt="node"
            />
            <div className={tutorialStyle.dashDivIn}>
              <h1>NodeJS :</h1>
              <h2>
                Node.js is a cross-platform, open-source server environment that
                can run on Windows, Linux, Unix, macOS, and more. Node.js is a
                back-end JavaScript runtime environment, runs on the V8
                JavaScript Engine, and executes JavaScript code outside a web
                browser
              </h2>
            </div>
          </div>
        </div>
      )}
      {react && (
        <SingleTutorial
          tit={"React"}
          info={ReactInfo}
          Url={"https://www.youtube.com/watch?v=5UKe5BMnJgk&t=595s"}
        />
      )}
      {mongo && (
        <SingleTutorial
          tit={"Mongo"}
          info={MongoInfo}
          Url={"https://www.youtube.com/watch?v=geB_GAWwDUk&t=436s"}
        />
      )}
      {express && (
        <SingleTutorial
          tit={"Express"}
          info={ExpressInfo}
          Url={"https://www.youtube.com/watch?v=vS4nOHMYEgY&t=1242s"}
        />
      )}
      {node && (
        <SingleTutorial
          tit={"Node JS"}
          info={NodeInfo}
          Url={"https://www.youtube.com/watch?v=7npkRw7gMRA&t=644s"}
        />
      )}
      <Footer />
    </Box>
  );
};

export default Tutorial;
