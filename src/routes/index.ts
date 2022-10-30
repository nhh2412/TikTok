import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Live from '~/pages/Live'
import Profile from '~/pages/Profile'

import config from '~/config'
import { FC, ReactElement } from 'react'
import FullScreenLayout from '~/layouts/FullScreenLayout'

interface Routes {
    path: string
    Component: () => ReactElement
    layout?: FC<{ children: ReactElement; path: string }>
}

// public routes
const publicRoutes: Routes[] = [
    { path: config.routes.home, Component: Home },
    { path: config.routes.following, Component: Following },
    { path: config.routes.live, Component: Live, layout: FullScreenLayout },
    { path: config.routes.profile, Component: Profile },
]

// const privateRoutes = []

export { publicRoutes }
