import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

import icons from '~/assets/icons'

const cx = classNames.bind(styles)

function Header({ title, onBack }) {
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
