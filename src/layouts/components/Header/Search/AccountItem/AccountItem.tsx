import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { Link } from 'react-router-dom'

import { isImage } from '~/functions'
import icons from '~/assets/icons'
import { User } from '~/interface'

const cx = classNames.bind(styles)

function AccountItem({ data }: { data: User }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            {isImage(data.avatar) ? (
                <img className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            ) : (
                <div className={cx('avatar')}></div>
            )}

            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    <span className={cx('check')}>{data.tick && <icons.check />}</span>
                </p>
                <p className={cx('username')}>{data.nickname}</p>
            </div>
        </Link>
    )
}

export default AccountItem
