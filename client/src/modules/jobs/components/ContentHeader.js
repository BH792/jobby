import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

const ContentHeader = ({ match, type, location }) => {
  return (
    <div style={{display: 'flex'}}>
      <Route exact path={match.url} render={() => {
        return <ButtonLink
          path={`${match.url}/new`}
          text={`Add New ${type}`} />
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
      <Route path={`${match.url}/:id/edit`} render={(props) => {
        return <ButtonLink
          path={`${match.url}/${props.match.params.id}`}
          text={'Back'}
        />
      }} />
    </div>
  )
}

const ButtonLink = ({path, text}) => {
  return (
    <Link to={path}>
      <button className='form submit normal'>
        {text}
      </button>
    </Link>
  )
}

export default ContentHeader
