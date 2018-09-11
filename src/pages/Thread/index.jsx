import React from 'react'
import axios from 'axios'

export default class Thread extends React.Component {

  state = {
    thread: {},
    loading: true
  }

  componentDidMount() { 
    axios.get(`https://v-forum-api.bahdcasts.com/api/threads/show/${this.props.match.params.id}`).then((response) => {
      this.setState({
        thread: response.data.data,
        loading: false
      })
    }).catch((error) => {
      this.props.history.push('/page-not-found')
    })
  }
  render() {
    return <div>{this.state.loading ? <h1>LOADING .... </h1> : <h1>THE CREATOR OF THIS THREAD IS: {this.state.thread.creator.name}</h1>}</div>
  }
}