import React, { Component } from 'react';
import StatusJobColumn from './StatusJobColumn';
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
        <StatusJobColumn status={'watching'}/>
        <StatusJobColumn status={'applied'}/>
        <StatusJobColumn status={'interviewed'}/>
        <StatusJobColumn status={'offered'}/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(JobBoard);
