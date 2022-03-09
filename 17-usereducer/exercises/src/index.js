import React, {useReducer, useRef} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: state.length,
          name: action.name
        }
      ];
    case 'remove':
      return state.filter(
        (_, index) => index !== action.index
      );

    case 'clear':
      return [];

    default:
      return state;
  }
};

function ShoppingList() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer(reducer, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: 'add',
      name: inputRef.current.value
    });
    inputRef.current.value = '';
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <button
        onClick={() => dispatch({ type: 'clear' })}
      >
        Clear
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() =>
                dispatch({ type: 'remove', index })
              }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

function Room() {
  const [light, dispatch] = useReducer(reducer, 0)

  function reducer(state, action) {
    switch (action.type) {
      case 'off':
        return 0
      default:
        return (state + 1) % 4
    }
  }

  function convertLight(level) {
    const lightLevel = {
      0: "off",
      1: "low",
      2: "medium",
      3: "high"
    }
    return lightLevel[level]
  }

  return (
    <>
      <h1>Light is currently: {convertLight(light)}</h1>
      <button
        onClick={() => dispatch({ type: 'next' })}
      >Change brightness</button>
      <button
        onClick={() => dispatch({ type: 'off' })}
      >Turn Off</button>
    </>
  )
}


function Keypad({ combo }) {
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'keypress':
        // if the lock is already unlocked, leave it alone
        if (state.status === 'unlocked') {
          return state;
        }

        // if this key matches the next one in the sequence, keep it
        if (
          action.value ===
          parseInt(state.combo[state.nextKeyIndex], 10)
        ) {
          const nextKeyIndex = state.nextKeyIndex + 1;
          return {
            ...state,
            nextKeyIndex,
            status:
              nextKeyIndex === state.combo.length
                ? 'unlocked'
                : 'locked'
          };
        } else {
          // if this key was wrong, reset
          return {
            ...state,
            nextKeyIndex: 0
          };
        }

      default:
        return state;
    }
  };

  const [lock, dispatch] = useReducer(reducer, {
    combo,
    status: 'locked',
    nextKeyIndex: 0
  });

  
  return (
    <>
      <p>Enter the correct combination:</p>
      {[1, 2, 3, 4, 5, 6].map(i => (
        <button
          key={i}
          onClick={() =>
            dispatch({ type: 'keypress', value: i })
          }
        >
          {i}
        </button>
      ))}
      <p>The lock is {lock.status}</p>
      <p>
        You've gotten {lock.nextKeyIndex} keys correct.
      </p>
    </>
  );
}

ReactDOM.render(
  <Keypad combo="123456" />,
  document.getElementById('root')
);

