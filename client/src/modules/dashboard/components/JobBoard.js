import React, { Component } from 'react';
import JobColumn from './JobColumn';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';


class JobBoard extends Component {
  componentDidMount() {
    if (!this.props.isDataCached) {
      this.props.fetchBoardAPI()
    }
  }

  render() {
    return (
      <div className='JobBoard'>
        <JobColumn status={'watching'}/>
        <JobColumn status={'applied'}/>
        <JobColumn status={'interviewed'}/>
        <JobColumn status={'offered'}/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(JobBoard);
