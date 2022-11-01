import { useEffect, useRef, useState } from 'react'
import { useElementOnScreen } from '~/hooks'
import icons from '~/assets/icons'
import classNames from 'classnames/bind'
import styles from './VideoContainer.module.scss'
import { Video } from '~/interface'
import Tippy from '@tippyjs/react/headless'
import Share from '~/components/popper/Share'
const cx = classNames.bind(styles)

function VideoItem({ data, setVolume, volume }: { data: Video; volume: number; setVolume: (arg0: number) => void }) {
    const [playing, setPlaying] = useState<boolean>(false)
    const [muted, setMuted] = useState<boolean>(false)
    const [isShowAllShare, setIsShowAllShare] = useState<boolean>(false)

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
                const promise = videoRef.current.play()
                if (promise !== undefined) {
                    promise
                        .then(() => {
                            setPlaying(true)
                        })
                        .catch(() => {
                            setMuted(true)
                        })
                }
            }
        } else {
            if (playing && videoRef.current) {
                videoRef.current.currentTime = 0
                videoRef.current.pause()
                setPlaying(false)
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible, muted])

    useEffect(() => {}, [volume])

    return (
        <div className={cx('video-container')}>
            <div className={cx('video-wrapper')}>
                <video src={data.file_url} loop preload="true" ref={videoRef} muted={muted}></video>
                <div className={cx('video-action')}>
                    <button className={cx('playing')} onClick={onVideoClick}>
                        {!playing ? <icons.play /> : <icons.pause />}
                    </button>
                    <button className={cx('loud-speaker', muted && 'muted')} onClick={() => setMuted(!muted)}>
                        {muted === false ? <icons.loudspeaker /> : <icons.loudspeakerMute />}
                    </button>
                </div>
            </div>
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
                    <div>
                        <Tippy
                            placement="top-start"
                            popperOptions={{ modifiers: [{ name: 'flip', enabled: false }] }}
                            offset={[-24, 10]}
                            interactive
                            delay={[0, 500]}
                            onHidden={() => setIsShowAllShare(false)}
                            render={() => Share(isShowAllShare, setIsShowAllShare)}
                        >
                            <button>
                                <icons.share />
                            </button>
                        </Tippy>
                    </div>
                    <strong>{data.shares_count}</strong>
                </div>
            </div>
        </div>
    )
}
export default VideoItem
