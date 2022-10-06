import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind'

import icons from '~/assets/icons'
import { isImage } from '~/hooks'

const cx = classNames.bind(styles)

function AccountItem({ data, index, isShowAll }) {
    return (
        <a href="." className={cx('wrapper', index > 4 && !isShowAll ? 'hide' : '')}>
            <div className={cx('avatar')}>
                {isImage(data.avatar) ? (
                    <img src={data.avatar} alt="avatar" width={32} height={32} />
                ) : (
                    <div className={cx('avatar-no-img')}></div>
                )}
            </div>
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>{data.nickname}</h4> {data.tick && <icons.check />}
                </div>
                <p className={cx('username')}>
                    {data.first_name} {data.last_name}
                </p>
            </div>
        </a>
    )
}

export default AccountItem
