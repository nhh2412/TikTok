import { useEffect, useRef, useState } from 'react'
import { useElementOnScreen } from '~/hooks'
import icons from '~/assets/icons'
import classNames from 'classnames/bind'
import styles from './VideoContainer.module.scss'
import Tippy from '@tippyjs/react/headless'
import Share from '~/components/popper/Share'
const cx = classNames.bind(styles)

function VideoItem({ data, setVolume, volume }) {
    const [playing, setPlaying] = useState(false)
    const [isShowAllShare, setIsShowAllShare] = useState(false)

    const videoRef = useRef()
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
                    promise.then(() => {
                        setPlaying(true)
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
    }, [isVisible])

    useEffect(() => {}, [volume])

    return (
        <div className={cx('video-container')}>
            <div className={cx('video-wrapper')}>
                <video
                    src={data.file_url}
                    loop
                    preload="true"
                    ref={videoRef}
                    onClick={() => {
                        setVolume(0)
                    }}
                ></video>
                <div className={cx('video-action')}>
                    <button className={cx('playing')} onClick={onVideoClick}>
                        {!playing ? <icons.play /> : <icons.pause />}
                    </button>
                    <div className={cx('volume-controller-container')}>
                        <div className={cx('volume-bar')}>
                            <div className={cx('volume-circle')}></div>
                            <div className={cx('volume-line')}></div>
                        </div>
                    </div>
                    <button
                        className={cx('loud-speaker', volume === 0 && 'muted')}
                        onClick={() => {
                            setVolume((prev) => {
                                if (volume > 0) {
                                    console.log(0)
                                    return 0
                                } else if (prev === 0) {
                                    console.log(0.8)

                                    return 0.8
                                } else {
                                    console.log(prev)

                                    return prev
                                }
                            })
                        }}
                    >
                        {volume !== 0 ? <icons.loudspeaker /> : <icons.loudspeakerMute />}
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
