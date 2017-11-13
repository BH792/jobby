import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ButtonLink from './ButtonLink'

const ContentHeader = ({ match, type }) => {
  return (
    <div style={{display: 'flex'}}>
      <Route exact path={match.url} render={() => {
        return <ButtonLink
          path={`${match.url}/new`}
          text={`Add ${type}`} />
      }} />
      <Switch>
        <Route path={`${match.url}/new`} render={() => {
          return <ButtonLink
            path={`${match.url}`}
            text={'Back'}
          />
        }} />
        <Route exact path={`${match.url}/:id`} render={(props) => {
          return <ButtonLink
            path={`${props.match.url}/edit`}
            text={'Edit'}
          />
        }} />
      </Switch>
      <Switch>
        <Route exact path={`${match.url}/new`} render={() => <div></div>} />
        <Route exact path={`${match.url}/:id`} render={(props) => {
          return <ButtonLink
            path={`${match.url}`}
            text={'Back'}
          />
        }} />
      </Switch>
      <Route path={`${match.url}/:id/:something`} render={(props) => {
        return <ButtonLink
          path={`${match.url}/${props.match.params.id}`}
          text={'Back'}
        />
      }} />
    </div>
  )
}

export default ContentHeader
