import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Feedback from '~/pages/Feedback'
import Live from '~/pages/Live'
import Profile from '~/pages/Profile'

import config from '~/config'
import { FC, ReactElement } from 'react'

interface Routes {
    path: string
    Component: () => ReactElement
    layout?: FC<{ children: ReactElement }> | null
}

// public routes
const publicRoutes: Routes[] = [
    { path: config.routes.home, Component: Home },
    { path: config.routes.following, Component: Following },
    { path: config.routes.feedback, Component: Feedback },
    { path: config.routes.upload, Component: Upload },
    { path: config.routes.live, Component: Live },
    { path: config.routes.profile, Component: Profile },
]

// const privateRoutes = []

export { publicRoutes }
