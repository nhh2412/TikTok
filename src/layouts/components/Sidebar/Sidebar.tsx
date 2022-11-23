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
import AccountLiveList from './AccountLiveList'
import React from 'react'

const cx = classNames.bind(styles)

function Sidebar({ path }: { path: string }) {
    const sidebar = React.useRef<HTMLDivElement>(null)

    return (
        <aside className={cx('sidebar', (path === '/live' || path === '/@:nickname') && 's-sidebar')} ref={sidebar}>
            <SimpleBar className={cx('wrapper')}>
                <nav className={cx('navigation')}>
                    <MenuItem title="Dành cho bạn" to={config.routes.home} icons={icons.home} />
                    <MenuItem title="Đang Follow" to={config.routes.following} icons={icons.userGroup} />
                    <MenuItem title="LIVE" to={config.routes.live} icons={icons.camera} />
                </nav>
                <div className={cx('login', 'separate')}>
                    <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                    <button onClick={() => {}}>Đăng nhập</button>
                </div>
                {path !== '/following' && path !== '/live' && (
                    <div className={cx('account-list', 'separate')}>
                        <AccountList />
                    </div>
                )}
                {path === '/live' && (
                    <div className={cx('account-list', 'separate')}>
                        <AccountLiveList />
                    </div>
                )}
                {path !== '/live' && (
                    <div className={cx('discover', 'separate')}>
                        <Discover />
                    </div>
                )}
                <div className={cx('footer', 'separate')}>
                    <Footer />
                </div>
            </SimpleBar>
        </aside>
    )
}

export default Sidebar
