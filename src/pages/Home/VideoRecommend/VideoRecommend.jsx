import classNames from 'classnames/bind'
import styles from './VideoRecommend.module.scss'

import icons from '~/assets/icons'

const cx = classNames.bind(styles)

function VideoRecommend(video) {
    return (
        <div className={cx('container')}>
            <a href="#.">
                <img src={video.data.user.avatar} alt="" width={56} height={56} className={cx('avatar')} />
            </a>
            <div className={cx('content')}>
                <div className={cx('info')}>
                    <a href="#." className={cx('author')}>
                        <h3 className={cx('author-title')}>
                            {video.data.user.nickname} {video.data.user.tick && <icons.check />}
                        </h3>
                        <h4 className={cx('author-name')}>
                            {video.data.user.first_name} {video.data.user.last_name}
                        </h4>
                    </a>
                    <div className={cx('description')}>{video.data.description}</div>
                    <h4 className={cx('music')}>
                        <a href="#.">nhạc nền - Đà Lạt +</a>
                    </h4>
                </div>
                <div className={cx('video-wrapper')}>
                    <video src={video.data.file_url}></video>
                    <div className={cx('action')}></div>
                </div>
            </div>
            <button className={cx('follow-btn')}>Follow</button>
        </div>
    )
}

export default VideoRecommend
