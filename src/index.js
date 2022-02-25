import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  return (
    <div>Hello World</div>
  )
}

function Books() {
  return (
  <div className='book'>
    <div className='title'>
      The Title
    </div>
    <div className='author'>
      The Author
    </div>
    <ul className='stats'>
      <li className='rating'>
        5 stars
      </li>
      <li className='isbn'>
        12-345678-910
      </li>
    </ul>
  </div>
  )
}

function EmptyLineExamples() {
  return (
    <>
      <div>
        Newline
        Test
      </div>
      <div>
        Empty

        Newlines

        Here
      </div>
      <div>
        &nbsp;Non-breaking
        &nbsp;Spaces&nbsp;
      </div>
      <div>
        Line1
        {' '}
        Line2
      </div>
    </>
  )
}

// How to create a React element without components
// React.createElement(
//   type,
//   [props],
//   [...children]
// )

function BooksTwo() {
  return (
    React.createElement('div', {className: 'book'},
    React.createElement('div', {className: 'title'}, 'The Title'),
    React.createElement('div', {className: 'author'}, 'The Author'),
    React.createElement('ul', {className: 'stats'},
      React.createElement('li', {className: 'rating'}, 'The Title'),
      React.createElement('li', {className: 'isbn'}, '12-345678-910')
    )
  )
  )
}

function Greetings() {
  let username = "root";
  // let username = undefined;
  // let username = null;
  // let username = false;

  return (
    <>
    {username ? `Hello ${username}` : "Not logged in"}
    </>
  )
}

function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <td>Test</td>
        </tr>
        <tr>
          <td>Test2</td>
        </tr>
        <tr>
          <td>Test3</td>
        </tr>
      </tbody>
    </table>
  )
}

function TableModified() {
  return (
    <table>
      <tbody>
       <Table />
       <Table />
       <Table />
      </tbody>
    </table>
  )
}

function Data() {
  return (
    <tr>
      <td>Test</td>
    </tr>
  )
}

ReactDOM.render(
  <Table />,
  document.getElementById('root')
);


