import React, { Component } from 'react';
import StatusJobColumn from '../containers/StatusJobColumn';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import '../styles/JobBoard.css';

class JobBoard extends Component {
  componentDidMount() {
    this.props.fetchBoard()
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
