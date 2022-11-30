import classNames from 'classnames/bind'
import styles from './VideoRecommend.module.scss'
import Tippy from '@tippyjs/react/headless'

import icons from '~/assets/icons'
import { Video } from '~/interface'
import { isImage } from '~/functions'
import { Link } from 'react-router-dom'
import VideoItem from './VideoContainer'
import MiniProfile from '~/components/popper/MiniProfile'

import { parseHashtag } from '~/functions'

const cx = classNames.bind(styles)

function VideoRecommend({
    data,
    setVolume,
    volume,
    prevVolume,
    setPrevVolume,
}: {
    data: Video
    volume: number
    setVolume: (arg0: number) => void
    prevVolume: number
    setPrevVolume: (arg0: number) => void
}) {
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
                            render={() => MiniProfile.HomePage(data)}
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

                    <div className={cx('description')}>
                        {parseHashtag(data.description).des}
                        {parseHashtag(data.description).hashtags?.map((e, i) => (
                            <strong key={i}>{e} </strong>
                        ))}
                    </div>
                    <h4 className={cx('music')}>
                        <Link to={''}>
                            <span className={cx('music-icon')}>
                                <icons.musicNote />
                            </span>
                            {data.music}
                        </Link>
                    </h4>
                </div>
                <VideoItem
                    data={data}
                    volume={volume}
                    setVolume={setVolume}
                    prevVolume={prevVolume}
                    setPrevVolume={setPrevVolume}
                />
            </div>
            <button className={cx('follow-btn')} onClick={() => true}>
                Follow
            </button>
        </div>
    )
}

export default VideoRecommend
