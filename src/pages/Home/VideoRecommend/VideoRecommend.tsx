import classNames from 'classnames/bind'
import styles from './VideoRecommend.module.scss'
import Tippy from '@tippyjs/react/headless'

import icons from '~/assets/icons'
import { Video } from '~/interface'
import { isImage } from '~/hooks'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function VideoRecommend({ data }: { data: Video }) {
    return (
        <div className={cx('container')}>
            <div>
                <Link to={`/@${data.user.nickname}`} className={cx('avatar')}>
                    {isImage(data.user.avatar) && <img src={data.user.avatar} alt="" width={56} height={56} />}
                </Link>
            </div>
            <div className={cx('content')}>
                <div className={cx('info')}>
                    <div>
                        <Tippy
                            delay={[800, 800]}
                            offset={[-75, 35]}
                            placement="bottom-start"
                            interactive
                            render={() => (
                                <div className={cx('mini-profile')}>
                                    <div className={cx('head')}>
                                        <Link to={`/@${data.user.nickname}`} className={cx('avatar')}>
                                            {isImage(data.user.avatar) && (
                                                <img
                                                    src={data.user.avatar}
                                                    alt={data.user.nickname}
                                                    width={44}
                                                    height={44}
                                                />
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
                            )}
                        >
                            <Link to={`/@${data.user.nickname}`} className={cx('author')}>
                                <h3 className={cx('author-title')}>
                                    {data.user.nickname} {data.user.tick && <icons.check />}
                                </h3>
                                <h4 className={cx('author-name')}>
                                    {data.user.first_name} {data.user.last_name}
                                </h4>
                            </Link>
                        </Tippy>
                    </div>

                    <div className={cx('description')}>{data.description}</div>
                    <h4 className={cx('music')}>
                        <Link to={`/@${data.user.nickname}`}>
                            <span className={cx('music-icon')}>
                                <icons.musicNote />
                            </span>
                            {data.music}
                        </Link>
                    </h4>
                </div>
                <div className={cx('video-wrapper')}>
                    <video src={data.file_url}></video>
                    <div className={cx('action')}>
                        <div className={cx('icon')} onClick={() => true}>
                            <button>
                                <icons.heart />
                            </button>
                            <strong>{data.likes_count}</strong>
                        </div>
                        <div className={cx('icon')} onClick={() => true}>
                            <button>
                                <icons.comment />
                            </button>
                            <strong>{data.comments_count}</strong>
                        </div>
                        <div className={cx('icon')} onClick={() => true}>
                            <button>
                                <icons.share />
                            </button>
                            <strong>{data.shares_count}</strong>
                        </div>
                    </div>
                </div>
            </div>
            <button className={cx('follow-btn')} onClick={() => true}>
                Follow
            </button>
        </div>
    )
}

export default VideoRecommend
