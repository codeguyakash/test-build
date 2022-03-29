// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   [
//     <h1>Welcome to BrainyDx</h1>,
//     <p>Software Development Company</p>,
//     <h2>Task No 1</h2>,
//   ],
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <div>
//     <h1>Welcome to BrainyDx</h1>
//     <p>Software Development Company</p>
//     <h2>Task No 1</h2>
//     </div>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.Fragment>
//     <h1>Welcome to BrainyDx</h1>
//     <p>Software Development Company</p>
//     <h2>Task No 1</h2>
//     </React.Fragment>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <>
//     <h1>Welcome to BrainyDx</h1>
//     <p>Software Development Company</p>
//     <h2>Task No 1</h2>
//     </>,
//   document.getElementById('root')
//   );

// ReactDOM.render(
//   <>
//     <h1>My Favorite Movies</h1>
//     <p>Movies List</p>
//     <ol>
//       <li>Jai Bhim</li>
//       <li>Squad Game</li>
//       <li>Pushpa</li>
//       <li>Jhund</li>
//       <li>Shudra the Rising</li>
//     </ol>
//   </>,
//   document.getElementById('root')
// );

// import React from "react";
// import ReactDOM  from "react-dom";

// const MyName = "Akash Atheist";

// ReactDOM.render(
//   <>
//   <h1>Hello Guys My Name is {MyName} </h1>
//   <h2>and you Watch React Application</h2>
//   <h3>Random Number by Expression :  {Math.random()}</h3>
//   </>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import './index.css'

const CurrDate = new Date().toLocaleDateString();
const CurrTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
    <h1 class="Heading">This is LIVE Time & Dates</h1>
    <img src="https://images.unsplash.com/photo-1644982648791-a010e61aa845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Oppo Mobile Phone"/>
    <h2 class="Date">Current Date is = {CurrDate}</h2>
    <h2 class="Time">Current Time is ={CurrTime}</h2>
    <a href="https://www.youtube.com/" target="black">Youtube</a>
  </>,
  document.getElementById("root")
);




