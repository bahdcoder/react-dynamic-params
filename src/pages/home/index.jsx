import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

class Home extends React.Component {
  state = {
    threads: []
  };
  componentWillMount() {
    const threadsPromise = axios.get(
      "https://v-forum-api.bahdcasts.com/api/threads"
    );

    threadsPromise.then(response => {
      this.setState({
        threads: response.data.data.data
      });
    });
  }

  getThreads = () => {
    const threads = this.state.threads;

    const threadsJSX = threads.map(thread => {
      return (
        <div key={thread.id} className="card my-5">
          <div className="card-header">{thread.title}</div>
          <div className="card-body">
            <Link to={`/threads/${thread.id}`} className="btn btn-danger">READ MORE</Link>
          </div>
        </div>
      );
    });
    return threadsJSX;
  };

  render() {
    return <div className="container">{this.getThreads()}</div>;
  }
}

export default Home;
