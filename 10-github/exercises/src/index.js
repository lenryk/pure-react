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

// Pinterest

function PinterestList({data}) {
  return (
    <div className="pinterestList">
    {data.map(({title, user, image, pins, smallImageOne, smallImageTwo, smallImageThree}) => <PinterestBoard title={title} user={user} image={image} pins={pins} smallImageOne={smallImageOne} smallImageTwo={smallImageTwo} smallImageThree={smallImageThree} />)}
    </div>
  )
}

function PinterestBoard({title, user, image, pins, smallImageOne, smallImageTwo, smallImageThree}) {
  return (
    <div className="pinterestWrapper">
      <div className="content">
        <h4>{title}</h4>
        <p>{user}</p>
      </div>
      <div className="imageWrapper">
      <img src={image} alt="cover pic" className="coverPic" />
        <p className="pinsWrapper">{pins}</p>
      </div>
      <div className="smallImages">
        <img className="smallImage" src={smallImageOne} alt="small one" />
        <img className="smallImage" src={smallImageTwo} alt="small two" />
        <img className="smallImage" src={smallImageThree} alt="small three" />
      </div>
      <button>Follow</button>
    </div>
  )
}

const pinterestData = [
  {
    title: "DIY - Tips Tricks Ideas Repair",
    user: "Aviation Explorer",
    image: "https://cdn.lifehack.org/wp-content/uploads/2013/02/diy-projects-1024x768.jpeg",
    pins: 4850,
    smallImageOne: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/painting-a-jar-royalty-free-image-800402850-1532647880.jpg",
    smallImageTwo: "https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/03/DIY-Crafts-for-your-Home-JPEG-e1585579765723.jpg",
    smallImageThree: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/diy-wall-decor-san-giorgio-suites-famoso-012-1578599787.jpg",
  },
  {
    title: "AVIATION",
    user: "Aviation Explorer",
    image: "https://compote.slate.com/images/222e0b84-f164-4fb1-90e7-d20bc27acd8c.jpg",
    pins: 641,
    smallImageOne: "https://www.rd.com/wp-content/uploads/2020/01/GettyImages-1131335393-e1580493890249-scaled.jpg",
    smallImageTwo: "https://www.irmi.com/images/default-source/article-images/aviation/boeing-737.jpg",
    smallImageThree: "https://cdn.luxatic.com/wp-content/uploads/2021/08/best-small-airplanes.jpg",
  },
  {
    title: "Exceptional Avaition",
    user: "Aviation Explorer",
    image: "https://cdn.shopify.com/s/files/1/0061/7735/7891/articles/airplanes-actuators_17389e9d-f144-4f38-8d51-f8632a63c39c_1200x1200.jpg?v=1585138977",
    pins: 209,
    smallImageOne: "https://www.grunge.com/img/gallery/the-real-reason-airplanes-are-almost-always-painted-white/intro-1567189774.jpg",
    smallImageTwo: "https://www.motherjones.com/wp-content/uploads/2021/05/20210518_zia_c218_005.jpeg",
    smallImageThree: "https://www.grunge.com/img/gallery/the-real-reason-airplanes-are-almost-always-painted-white/intro-1567189774.jpg",
  },
  {
    title: "AEROSPACE",
    user: "Aviation Explorer",
    image: "",
    pins: 1495,
    smallImageOne: "",
    smallImageTwo: "",
    smallImageThree: "",
  },
  {
    title: "WHEN FLYING WAS WORT...",
    user: "Aviation Explorer",
    image: "",
    pins: 209,
    smallImageOne: "",
    smallImageTwo: "",
    smallImageThree: "",
  },
  {
    title: "Aircraft Recycled Into Furni...",
    user: "Aviation Explorer",
    image: "",
    pins: 75,
    smallImageOne: "",
    smallImageTwo: "",
    smallImageThree: "",
  }
]

// Internet Radio

const radioData = 
  {
    large: ["Smooth Jazz", "Classic Rock", "Easy Listening", "Jazz", "Blues", "80s", "Rock", "Classical", "Country"],
    big: ["Oldies", "Ambient", "House", "Top 40", "Chillout", "Lounge", "70s", "Trance", "Techno", "Reggae"],
    medium: ["Pop", "Metal", "Deep House", "Hip Hop", "Greek", "Funk", "Instrumental", "Heavy Metal", "90s", "60s", "Drum And Bass", "Psytrance", "Soul", "Disco", "Meditation","Edm", "Salsa", "Bollywood", "50s", "Hindi"],
    small: ["Rockability", "Christian", "Chill", "Electronic", "Rap", "Alternative", "Talk", "Big Band", "Swing", "New Age", "Dub", "Rnb", "Dancehall", "Downtemp", "Latin", "Psychedlic", "Anime", "Christmas", "Hardcore"]
  }
  



ReactDOM.render(<PinterestList data={pinterestData} />,
  document.getElementById('root')
);
