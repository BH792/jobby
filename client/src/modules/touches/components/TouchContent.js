import React, { Component } from 'react'
import itemLister from '../../shared/Lister';
import TouchItem from './TouchItem'
import TouchDetails from './TouchDetails'
import TouchForm from './TouchForm'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { ContentHeader } from '../../shared'
import * as selector from '../selectors';

class TouchContent extends Component {
  render() {
    const { touches, match } = this.props
    let TouchList = itemLister(TouchItem, touches, match)
    return (
      <div className='content container'>
        <ContentHeader match={match} type={'Touch'}/>
        <Switch>
          <Route exact path={`${match.url}/new`} component={TouchForm} />
          <Route exact path={`${match.url}/:touchId`} component={TouchDetails} />
          <Route path={`${match.url}/:touchId/edit`} component={TouchForm} />
        </Switch>
        <Route exact path={`${match.url}`} component={TouchList}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    touches: selector.getAllTouchesWithContactAndJob(state)
  }
}

export default connect(mapStateToProps, {})(TouchContent);
