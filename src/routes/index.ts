import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Feedback from '~/pages/Feedback'
import Live from '~/pages/Live'
import Profile from '~/pages/Profile'

import config from '~/config'

// public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.feedback, component: Feedback },
    { path: config.routes.upload, component: Upload },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
]

// const privateRoutes = []

export { publicRoutes }
