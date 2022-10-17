import classNames from 'classnames/bind'
import { FC, ReactNode } from 'react'
import styles from './DiscoverItem.module.scss'

const cx = classNames.bind(styles)

const DiscoverItem: FC<{ icon: ReactNode; title: string }> = ({ icon, title }) => {
    return (
        <button className={cx('discover-item')}>
            <span>{icon}</span>
            <p>{title}</p>
        </button>
    )
}

export default DiscoverItem
