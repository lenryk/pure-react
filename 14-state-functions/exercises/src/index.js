import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Room() {
  const [light, setLight] = useState(false)

  function HandleButtonClick() {
    setLight(e => !e)
  }

  return (
    <>
      <h1>{light ? "The Room Is Lit" : "The Room Is Dark"}</h1>
      <button onClick={HandleButtonClick}>Lightswitch</button>
    </>
  )
}

function RandomList() {
  const [numbers, setNumbers] = useState([])

  function HandleRandomNumber() {
    setNumbers(e => [...e, Math.ceil(Math.random() * 100)])
  }

  return (
    <>
      <h1>Here are the random numers</h1>
      <ul>
        {numbers.map(num => <li>{num}</li>)}
      </ul>
      <button onClick={HandleRandomNumber}>Add Random Number</button>
    </>
  )
}

function AudioControlsSingle() {
  const [volume, setVolume] = useState(89)
  const [treble, setTreble] = useState(32)
  const [mid, setMid] = useState(50)
  const [bass, setBass] = useState(41)

  return (
    <>
      <h1>Audio Master</h1>
      <h3>Volume</h3>
      <button onClick={() => setVolume(volume - 1)}>-</button> {volume} <button onClick={() => setVolume(volume + 1)}>+</button>
      <h3>Treble</h3>
      <button onClick={() => setTreble(treble - 1)}>-</button> {treble} <button onClick={() => setTreble(treble + 1)}>+</button>
      <h3>Mid</h3>
      <button onClick={() => setMid(mid - 1)}>-</button> {mid} <button  onClick={() => setMid(mid + 1)}>+</button>
      <h3>Bass</h3>
      <button onClick={() => setBass(bass - 1)}>-</button> {bass} <button onClick={() => setBass(bass + 1)}>+</button>
    </>
  )
}

function AudioControlsObject() {
  const [state, setState] = useState({
    volume: 89,
    treble: 32,
    mid: 50,
    bass: 41
  })

  function ButtonHandler(e) {
    const buttonId = e.target.id.split("-")
    const operator = buttonId[1] === "up" ? 1 : -1

    setState({
      ...state,
      [buttonId[0]]: state[buttonId[0]] + (1 * operator)
    })

  }

  return (
    <>
    <h1>Audio Master</h1>
    <h3>Volume</h3>
    <button id="volume-down" onClick={ButtonHandler}>-</button> {state.volume} <button id="volume-up" onClick={ButtonHandler}>+</button>
    <h3>Treble</h3>
    <button id="treble-down" onClick={ButtonHandler}>-</button> {state.treble} <button id="treble-up" onClick={ButtonHandler}>+</button>
    <h3>Mid</h3>
    <button id="mid-down" onClick={ButtonHandler}>-</button> {state.mid} <button id="mid-up" onClick={ButtonHandler}>+</button>
    <h3>Bass</h3>
    <button id="bass-down" onClick={ButtonHandler}>-</button> {state.bass} <button id="bass-up" onClick={ButtonHandler}>+</button>
  </>
  )
}

ReactDOM.render(
  <AudioControlsObject />,
  document.getElementById('root')
);
