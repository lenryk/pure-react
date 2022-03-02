import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

// Trello Card List

function TrelloList({data}) {
  return (
    <div className="wrapper">
    <h2>Phone Features</h2>
      {data.map((item) => <Item>{item}</Item>
      )}
    </div>
  )
};

function Item({children}) {

  return (
    <div className="item">
      {children}
    </div>
  )
}

const trelloData = ["Subwoofer", "Non-prous, washable", "Wings", "Beveled Bezel", "Bezeled Bevel", "Seedless"];

// Hacker News

function HackerNewsList({data}) {
  return (
    <div className="hackerNewsList">
    {data.map(({title, url, points, author, timeAgo, comments, id}) => <HackerArticle title={title} url={url} points={points} author={author} timeAgo={timeAgo} comments={comments} key={id} id={id} />)}
    </div>
  )
};

function HackerArticle({title, url, points, author, timeAgo, comments, id}) {
  return (
    <div className="articleWrapper">
      <p><span className="id">{id}. </span><span className="title">{title} </span><span className="url">({url})</span></p>
      <p className="stats">{points} points by {author} {timeAgo} | flag | hide | {comments} comments | instapaper | save to pocket</p>
    </div>
  )
}

const hackerData = [
  {
    title: "Why I'm suing the US Government",
    url: "bunniestudios.com",
    points: 1346,
    author: "ivank",
    timeAgo: "11 hours ago",
    comments: 257,
    id: 1,
  },
  {
    title: "Zenzizenzizenzic",
    url: "wikipedia.org",
    points: 140,
    author: "vinchuco",
    timeAgo: "4 hours ago",
    comments: 40,
    id: 2,
  },
  {
    title: "A practical security guide for web developers",
    url: "github.com",
    points: 72,
    author: "zianwar",
    timeAgo: "2 hours ago",
    comments: 6,
    id: 3,
  },
  {
    title: "I got arrsted in Kazakhstan and represented myself in court",
    url: "medium.com",
    points: 370,
    author: "drpp",
    timeAgo: "7 hours ago",
    comments: 79,
    id: 4,
  },
  {
    title: "Sculpture of Housing Prices Ripping San Francisco Apart",
    url: "dougmccune.com",
    points: 254,
    author: "dougmccune",
    timeAgo: "7 hours ago",
    comments: 149,
    id: 5,
  },
  {
    title: "Practical Guide to Bare Metal C++",
    url: "gitbooks.io",
    points: 175,
    author: "adamnemecek",
    timeAgo: "7 hours ago",
    comments: 31,
    id: 6,
  },
  {
    title: "Superformula",
    url: "wikipedia.org",
    points: 77,
    author: "GuiA",
    timeAgo: "5 hours ago",
    comments: 17,
    id: 7,
  },
  {
    title: "Police asked 3D printing lab to recreate a dead man;s finger to unlock phone",
    url: "fusion.net",
    points: 109,
    author: "theandrewbailey",
    timeAgo: "7 hours ago",
    comments: 57,
    id: 8,
  },
  {
    title: "Edward Snowden's New Research Aims to Keep Smartphone from Betraying Owners",
    url: "theintercept.com",
    points: 190,
    author: "secfirstmd",
    timeAgo: "11 hours ago",
    comments: 69,
    id: 9,
  },
  {
    title: "Assessing IDM's POWER8, Part 1: A Low Level Look at Little Endian",
    url: "anandtech.com",
    points: 24,
    author: "tambourine_man",
    timeAgo: "3 hours ago",
    comments: 1,
    id: 10,
  }
]


ReactDOM.render(<HackerNewsList data={hackerData} />,
  document.getElementById('root')
);
