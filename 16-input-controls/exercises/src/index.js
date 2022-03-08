import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';




function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")



  return (
    <>
    <h1>Hello{!(firstName || lastName ) && "!"} {firstName}{!(!firstName || lastName) && "!"} {lastName}{lastName && "!"}</h1>
    <label>First Name</label><input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
    <label>Second Name</label><input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
    </>
  )
}


function AppTwo() {
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const firstName = useRef()
  const lastName = useRef()

  function update(e) {
    setFirst(firstName.current.value)
    setLast(lastName.current.value)
  }

  return (
    <>
    <h1>Hello{!(first || last ) && "!"} {first}{!(!first || last) && "!"} {last}{last && "!"}</h1>
    <label>First Name</label><input type="text" ref={firstName} ></input>
    <label>Second Name</label><input type="text" ref={lastName}></input>
    <button type="submit" onClick={update}>Submit</button>
    </>
  )
}

function PizzaApp() {
  const [size, setSize] = useState()
  const [topping, setTopping] = useState()
  const [gluten, setGluten] = useState()
  const [instructions, setInstructions] = useState()

  function handleSubmit(e) {
    e.preventDefault();

    alert(`Your order:
    Size: ${size}
    Gluten free? ${gluten ? 'yes' : 'no'}
    Topping: ${topping || 'none'}
    Special instructions: ${instructions || 'none'}`);
  }

  return (
    <>
      <h1>Order Your Pizza</h1>
      <h3>Size</h3>
      <form onSubmit={handleSubmit}>
        <input
          id="small"
          type="radio"
          value="s"
          checked={size === 's'}
          onChange={e => setSize(e.target.value)}
          />
        <label for="small">Small</label>
        
        <input
          id="medium"
          type="radio"
          value="m"
          checked={size === 'm'}
          onChange={e => setSize(e.target.value)}
          />
        <label for="medium">Medium</label>

        <input
          id="large"
          type="radio"
          value="l"
          checked={size === 'l'}
          onChange={e => setSize(e.target.value)}
          />
        <label for="large">Large</label>
        <br/>
        <br/>
        <label>Topping
        <br/>
        <select
              onChange={e => setTopping(e.target.value)}
              value={topping}
            >
              <option value="">
                - Pick a topping -
              </option>
              <option value="pepperoni">
                Pepperoni
              </option>
              <option value="peppers+onions">
                Peppers and onions
              </option>
              <option value="pineapple">
                Pineapple
              </option>
            </select>
          </label>
          <br/>
          <br/>
          <label>
            <input
              type="checkbox"
              checked={gluten}
              onChange={e => setGluten(e.target.checked)}
            />
            Gluten free
          </label>
          <br />
          <br />
          <label>
            Special instructions:
            <br />
            <textarea
              value={instructions}
              onChange={e => setInstructions(e.target.value)}
            />
          </label>
          <br />
          <br />
        <button type="submit">Send Order</button>
      </form>
    </>
  )
}

















ReactDOM.render(
  <PizzaApp />,
  document.getElementById('root')
);
