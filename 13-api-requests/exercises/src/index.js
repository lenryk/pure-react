import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';


class Reddit extends React.Component {
  // Set initial state object
  state = {
    posts: [],
    error: "",
    loading: true
  };

  componentDidMount() {
    axios.get(`https://www.reddit.com/r/${this.props.subreddit}.json`).then(res => { 
      const posts = res.data.data.children.map(obj => obj.data);
    this.setState({posts})
  }).catch((error) => this.setState({error: error.message})).finally(() => this.setState({loading: false}))
  // If error from response then update the state with this new object
  // Once promise has returned (error or no error) change the loading state to false
  }
  
  render() {
    const {posts, error, loading} = this.state;
  
    // If error state is not an empty string then must be an error message so return that to render it
    if (error) {
      return (
        <div>
          <h1>Error {error}</h1>
        </div>
      )
    }

    // If error message is falsy then must have been successful
    return (
      <div>
        <h1>{`/r${this.props.subreddit}`}</h1>
        <ul>
          {/* Render loading text while promising has not returned data yet */}
          {loading && "Loading data..."}
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  
}


ReactDOM.render(
  <Reddit subreddit="reactjs" />,
  document.getElementById('root')
);

