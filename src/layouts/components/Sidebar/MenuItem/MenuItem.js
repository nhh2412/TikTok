import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

import { NavLink } from 'react-router-dom'

const cx = classNames.bind(styles)

function MenuItem({ title, to, icon }) {
    return (
        <NavLink
            className={(nav) => cx('menu-item', { active: nav.isActive })}
            to={to}
            end
            children={({ isActive }) => {
                return (
                    <>
                        {isActive ? <icon.solid /> : <icon.regular />}
                        <h2 className={cx('title')}>{title}</h2>
                    </>
                )
            }}
        />
    )
}

export default MenuItem
