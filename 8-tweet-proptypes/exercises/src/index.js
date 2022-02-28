import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function AddressLabel({person, className}) {
  return (
    <div className="addressWrapper">
      <p>{person.name}</p>
      <p>{person.street}</p>
      <p>{person.state}</p>
    </div>
  )
}

function Envelope({toPerson, fromPerson}) {
  return (
    <div className="envelope">
      <div className="from">
        <AddressLabel person={fromPerson}  />
        <Stamp />
      </div>
      <div className="to">
        <AddressLabel person={toPerson}  />
      </div>
    </div>
  )
}

function Stamp() {
  return (
    <div className="stamp" >
      I'm a stamp
    </div>
  )
}
  
const stampData = {
  sender: {
    name: "Mr. Sender",
    street: "123 Fake St.",
    state: "Boston, MA 02118"
  },
  receiver: {
    name: "Mrs. Receiver",
    street: "123 Fake St.",
    state: "San Francisco, CA 94101"
  }
};

// ReactDOM.render(<Envelope toPerson={stampData.receiver} fromPerson={stampData.sender} />,
// document.querySelector('#root'));

// Credit Card Exercise

function CreditCard({cardInfo}) {
  return (
    <div className="creditcard">
      <div>
        <h3>{cardInfo.bank}</h3>
      </div>
      <div>
        <p>{cardInfo.number}</p>
        <p>{cardInfo.exp}</p>
        <p>{cardInfo.name}</p>
      </div>
    </div>
  )
}

const creditCardData = {
  name: "Lewis M. Kirk",
  exp: "12/2025",
  number: 1234567898561231,
  bank: "Big Boy Bank"
}

// ReactDOM.render(<CreditCard cardInfo={creditCardData} />,
//   document.querySelector('#root'));

// Poster Exercise

function Poster({image, title, text}) {
  return (
    <div className="posterWrapper">
      <img src={image} alt="react logo" />
      <h2 className="title">{title}</h2>
      <p className="text">{text}</p>
    </div>
  )
}

// ReactDOM.render(<Poster image="https://ionicframework.com/docs/icons/logo-react-icon.png" title="REACT" text="The best thing since jQuery, probably" />,
//   document.querySelector('#root'));

  // Email Exercise

function Email({email}) {
  return (
    <div className="emailWrapper">
      <div className="top" >
        <p>{email.sender}</p>
        <p>{email.subject}</p>
        <p>{email.date}</p>
      </div>
      <div className="preview">
        <p>{email.message}</p>
      </div>
    </div>
  )
}

const email = {
  sender: "myemail@gmail.com",
  subject: "I rock at react",
  date: "Feb 27th",
  message: "Hey bro, just to let you know i started learning react and its coming along pretty well. Hire me for your next freelance project ok?"
}

ReactDOM.render(<Email email={email} />,
  document.querySelector('#root'));
