import { Link } from 'react-router-dom'
import { isImage } from '~/hooks'
import { User } from '~/interface'
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import icons from '~/assets/icons'

const cx = classNames.bind(styles)

function Sidebar(data: User) {
    return (
        <div className={cx('mini-profile')}>
            <div className={cx('head')}>
                <Link to={`/@${data.nickname}`} className={cx('avatar')} target="_blank">
                    {isImage(data.avatar) ? (
                        <img src={data.avatar} alt={data.nickname} width={44} height={44} />
                    ) : (
                        <div className={cx('avatar-no-img')} style={{ width: 44, height: 44 }}></div>
                    )}
                </Link>
                <button onClick={() => {}}>Follow</button>
            </div>
            <Link to={`/@${data.nickname}`} className={cx('nickname')} target="_blank">
                <h4>{data.nickname}</h4> {data.tick && <icons.check />}
            </Link>

            <br />
            <Link to={`/@${data.nickname}`} className={cx('full-name')} target="_blank">
                <h5>
                    {data.first_name} {data.last_name}
                </h5>
            </Link>
            <div className={cx('stat')}>
                <span className={cx('count')}>{data.followers_count}</span>
                <span className={cx('follower')}>Follower</span>
                <span className={cx('count')}>{data.likes_count}</span>
                <span>Thích</span>
            </div>
        </div>
    )
}

export default Sidebar
