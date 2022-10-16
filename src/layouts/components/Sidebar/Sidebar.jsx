import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.css'

import icons from '~/assets/icons'
import config from '~/config'
import MenuItem from './MenuItem'
import AccountList from './AccountList/AccountList'
import Discover from './Discover'
import Footer from './Footer'

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('sidebar')}>
            <SimpleBar className={cx('wrapper')}>
                <nav className={cx('navigation')}>
                    <MenuItem title="Dành cho bạn" to={config.routes.home} icon={icons.home} />
                    <MenuItem title="Đang Follow" to={config.routes.following} icon={icons.userGroup} />
                    <MenuItem title="LIVE" to={config.routes.live} icon={icons.camera} />
                </nav>
                <div className={cx('login', 'separate')}>
                    <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                    <button onClick={() => {}}>Đăng nhập</button>
                </div>
                <div className={cx('account-list', 'separate')}>
                    <AccountList />
                </div>
                <div className={cx('discover', 'separate')}>
                    <Discover />
                </div>
                <div className={cx('footer', 'separate')}>
                    <Footer />
                </div>
            </SimpleBar>
        </aside>
    )
}

export default Sidebar
