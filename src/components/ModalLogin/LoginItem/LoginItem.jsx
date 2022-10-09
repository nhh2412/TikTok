import classnames from 'classnames/bind'
import styles from './LoginItem.module.scss'

const cx = classnames.bind(styles)

function LoginItem({ icon, title }) {
    return (
        <div className={cx('login-item')}>
            {icon}
            {title}
            <div></div>
        </div>
    )
}

export default LoginItem
