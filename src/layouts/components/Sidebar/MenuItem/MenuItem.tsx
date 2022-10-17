import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

import { NavLink } from 'react-router-dom'
import { FC } from 'react'
import { Menu } from '~/interface'

const cx = classNames.bind(styles)

const MenuItem: FC<Menu> = ({ title, to, icons }) => {
    return (
        <NavLink
            className={(nav) => cx('menu-item', { active: nav.isActive })}
            to={to}
            end
            children={({ isActive }) => {
                if (icons)
                    return (
                        <>
                            {isActive ? <icons.solid /> : <icons.regular />}
                            <h2 className={cx('title')}>{title}</h2>
                        </>
                    )
            }}
        />
    )
}

export default MenuItem
