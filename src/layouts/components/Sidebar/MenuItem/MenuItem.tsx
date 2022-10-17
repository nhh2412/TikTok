import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

import { NavLink } from 'react-router-dom'
import { FC } from 'react'

const cx = classNames.bind(styles)

interface MenuItemInterFace {
    title: string
    to: string
    icon: { solid: FC; regular: FC }
}

const MenuItem: FC<MenuItemInterFace> = ({ title, to, icon }) => {
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
