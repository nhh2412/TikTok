import classnames from 'classnames/bind'
import styles from './LoginItem.module.scss'

const cx = classnames.bind(styles)

function LoginItem({ icon, title, children, setItems }) {
    const handleChangeContent = () => {
        if (children) {
            setItems((prev) => [...prev, children])
        }
    }
    return (
        <div className={cx('login-item')} onClick={handleChangeContent}>
            {icon}
            {title}
            <div></div>
        </div>
    )
}

export default LoginItem
