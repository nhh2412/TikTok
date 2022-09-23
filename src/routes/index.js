import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Feedback from '~/pages/Feedback'
import OnlyHeader from '~/components/Layout/OnlyHeader'

// public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/feedback', component: Feedback, layout: OnlyHeader },
    { path: '/upload', component: Upload, layout: OnlyHeader },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
