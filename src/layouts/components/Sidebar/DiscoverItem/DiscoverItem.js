import classNames from 'classnames/bind'
import styles from './DiscoverItem.module.scss'

const cx = classNames.bind(styles)

function DiscoverItem({ icon, title }) {
    return (
        <button className={cx('discover-item')}>
            <span>{icon}</span>
            <p>{title}</p>
        </button>
    )
}

export default DiscoverItem
