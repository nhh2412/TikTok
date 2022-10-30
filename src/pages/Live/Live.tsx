import styles from './Live.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

function Live() {
    return (
        <main className={cx('main')}>
            <div className={cx('live-room')}>
                <div id="loader" className={cx('loader')}></div>
            </div>
        </main>
    )
}

export default Live
