import { useEffect, useRef, useState } from 'react'
import { useElementOnScreen } from '~/hooks'
import icons from '~/assets/icons'
import classNames from 'classnames/bind'
import styles from './VideoRecommend.module.scss'
import { Video } from '~/interface'
import Tippy from '@tippyjs/react/headless'
const cx = classNames.bind(styles)

function VideoItem({ data }: { data: Video }) {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef<any>()
    const options = {
        root: null,
        rootMargin: '-200px 0px',
        threshold: 0.3,
    }
    const isVisible = useElementOnScreen(options, videoRef)
    const onVideoClick = () => {
        if (playing && videoRef.current) {
            videoRef.current.pause()
            setPlaying(!playing)
        } else {
            videoRef.current && videoRef.current.play()
            setPlaying(!playing)
        }
    }
    useEffect(() => {
        if (isVisible && videoRef.current) {
            if (!playing) {
                videoRef.current.play()
                setPlaying(true)
            }
        } else {
            if (playing && videoRef.current) {
                videoRef.current.currentTime = 0
                videoRef.current.pause()
                setPlaying(false)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible])

    return (
        <div className={cx('video-wrapper')}>
            <video src={data.file_url} loop preload="true" ref={videoRef} onClick={onVideoClick}></video>
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
                    <Tippy render={() => 'hello'}>
                        <button>
                            <icons.share />
                        </button>
                    </Tippy>
                    <strong>{data.shares_count}</strong>
                </div>
            </div>
        </div>
    )
}
export default VideoItem
