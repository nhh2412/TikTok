import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

import icons from '~/assets/icons'
import config from '~/config'
import Menu, { MenuItem } from './Menu'

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <aside className={cx('wrapper')}>
                <Menu className={cx('title')}>
                    <MenuItem title="Dành cho bạn" to={config.routes.home} icon={icons.home} />
                    <MenuItem title="Đang Follow" to={config.routes.following} icon={icons.userGroup} />
                    <MenuItem title="LIVE" to={config.routes.live} icon={icons.camera} />
                </Menu>
            </aside>
        </div>
    )
}

export default Sidebar
