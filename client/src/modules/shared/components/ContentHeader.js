import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ButtonLink from './ButtonLink';
import BackButton from './BackButton';

const ContentHeader = ({ match, type, children }) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div style={{display: 'flex'}}>
        <Route exact path={match.url} render={() => {
          return <ButtonLink
            path={`${match.url}/new`}
            text={`New ${type}`} />
          }} />
          <Switch>
            <Route path={`${match.url}/new`} component={BackButton} />
            <Route exact path={`${match.url}/:id`} render={(props) => {
              return <ButtonLink
                path={`${props.match.url}/edit`}
                text={'Edit'}
              />
            }} />
          </Switch>
          <Switch>
            <Route exact path={`${match.url}/new`} render={() => <div></div>} />
            <Route exact path={`${match.url}/:id`} component={BackButton} />
          </Switch>
          <Route path={`${match.url}/:id/:something`} component={BackButton} />
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default ContentHeader
