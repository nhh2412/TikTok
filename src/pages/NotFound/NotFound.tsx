import styles from './NotFound.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

function NotFound() {
    return <main className={cx('main')}>Not Found</main>
}

export default NotFound
