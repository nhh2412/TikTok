import { Link } from 'react-router-dom'
import { isImage } from '~/functions'
import classNames from 'classnames/bind'
import styles from './HomePage.module.scss'
import { Video } from '~/interface'
import icons from '~/assets/icons'
const cx = classNames.bind(styles)

function HomePage(data: Video) {
    return (
        <div className={cx('mini-profile')}>
            <div className={cx('head')}>
                <Link to={`/@${data.user.nickname}`} className={cx('avatar')}>
                    {isImage(data.user.avatar) && (
                        <img src={data.user.avatar} alt={data.user.nickname} width={44} height={44} />
                    )}
                </Link>
                <button onClick={() => true}>Follow</button>
            </div>
            <Link to={`/@${data.user.nickname}`} className={cx('nickname')}>
                <h4>{data.user.nickname}</h4> {data.user.tick && <icons.check />}
            </Link>
            <br />
            <Link to={`/@${data.user.nickname}`} className={cx('full-name')}>
                <h5>
                    {data.user.first_name} {data.user.last_name}
                </h5>
            </Link>
            <div className={cx('stat')}>
                <span className={cx('count')}>{data.user.followers_count}</span>
                <span className={cx('follower')}>Follower</span>
                <span className={cx('count')}>{data.user.likes_count}</span>
                <span>Thích</span>
            </div>
            <div className={cx('bio')}>
                <p>{data.user.bio}</p>
            </div>
        </div>
    )
}

export default HomePage
