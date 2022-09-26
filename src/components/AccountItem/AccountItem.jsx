import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'

import icons from '~/assets/icons'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}></div>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Name</span>
                    <i>
                        <icons.check />
                    </i>
                </p>
                <span className={cx('username')}>username</span>
            </div>
        </div>
    )
}

export default AccountItem
