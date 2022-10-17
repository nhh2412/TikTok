import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

import icons from '~/assets/icons'
import { FC } from 'react'

const cx = classNames.bind(styles)

const Header: FC<{ title: string; onBack: () => void }> = ({ title, onBack }) => {
    return (
        <header className={cx('header')}>
            <button className={cx('icon-back')} onClick={onBack}>
                <icons.arrowLeft />
            </button>
            <div className={cx('title')}>
                <p>{title}</p>
            </div>
        </header>
    )
}

export default Header
