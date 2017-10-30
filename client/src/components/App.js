import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    console.log('props: ', this.props);
    const { byId, allIds } = this.props.jobs
    const jobs = allIds.map(jobId => {
      return <li key={byId[jobId].id}>{byId[jobId].title}</li>
    })
    return (
      <div>
        <header>
          <h1>Welcome to Jobby</h1>
        </header>
        <ul>
          {jobs}
        </ul>
      </div>
    );
  }
}

export default App;
