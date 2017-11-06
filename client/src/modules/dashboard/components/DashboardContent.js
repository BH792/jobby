import React from 'react'
import ConnectedJobBoard from './ConnectedJobBoard'

import { LoginRedirect } from '../../../containers/hocs/LoginRedirector';

const DashboardContent = () => {
  return <ConnectedJobBoard />
}

export default LoginRedirect(DashboardContent)
