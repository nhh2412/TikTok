import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Feedback from '~/pages/Feedback'
import OnlyHeader from '~/layouts/OnlyHeader'
import config from '~/config'

// public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.feedback, component: Feedback, layout: OnlyHeader },
    { path: config.routes.upload, component: Upload, layout: OnlyHeader },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
