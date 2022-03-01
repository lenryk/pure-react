import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ErrorBox({children}) {
  return (
    <div className="alert">
      <div className="alert-text">{children}</div>
    </div>
  )
}


// This function takes any number of child elements but only returns the first one
// Multiple children are returned as an array
function FirstChildOnly({children}) {
  return (
    <div>
      {children[0]}
    </div>
  )
}

// This function takes any number of child elements but only returns the last one
// Multiple children are returned as an array
// To select the last one we use React.Children.count() to get the length - can also use.length
function LastChildOnly({children}) {
  return (
    <div>
    {children[React.Children.count(children) - 1]}
  </div>
  )
}

// This function takes a number prop that tells it how many children to return
// Multiple children are returned as an array
// To limit how many children are returned we can use slice()
function Head({children, number}) {
  return (
    <div>
    {children.slice(0, number)}
    </div>
  )
}

// This function takes a number prop that tells it how many children to return
// Multiple children are returned as an array
// TO limit how many children are returned we can use slice()
// In this case we return from the end to the start
function Tail({children, number}) {
  return (
    <div>
    {children.slice(children.length - number)}
    </div>
  )
}

function Dialog({children}) {
  return (
    <div className="alertWrapper">
      {children}
    </div>
  )
}

function Title({title}) {
  return (
  <h2>{title}</h2>
  )
}

function Body({text}) {
  return (
    <p>{text}</p>
  )
}

function Footer({button}) {
  return (
    <button>{button}</button>
  )
}

ReactDOM.render(<Dialog number={2}><Title title="This Is Important" /><Body text="Here is some important text or error or something" /><Footer button="Close" /></Dialog>,
document.querySelector('#root'));
