import styles from './RecommendCard.module.scss'
import classNames from 'classnames/bind'
import { User } from '~/interface'
import { isImage } from '~/hooks'
import icons from '~/assets/icons'

const cx = classNames.bind(styles)

function RecommendCard({ data }: { data: User }) {
    return (
        <a href="#/">
            <div className={cx('background', 'skeleton-animation')}>
                {isImage(data.popular_video.thumb_url) && <img src={data.popular_video.thumb_url} alt="" />}
            </div>
            <div className={cx('info')}>
                <span className={cx('avatar')}>
                    {isImage(data.avatar) ? (
                        <img src={data.avatar} alt={data.nickname} width={48} height={48} />
                    ) : (
                        <icons.avatarUser />
                    )}
                </span>
                <h5 className={cx('full-name')}>
                    {data.first_name} {data.last_name}
                </h5>
                <h6 className={cx('nickname')}>
                    {data.nickname} {data.tick && <icons.check />}
                </h6>
                <button>Follow</button>
            </div>
        </a>
    )
}

export default RecommendCard
