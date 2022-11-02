import { useEffect, useRef, useState } from 'react'
import { useElementOnScreen } from '~/hooks'
import icons from '~/assets/icons'
import classNames from 'classnames/bind'
import styles from './VideoContainer.module.scss'
import Tippy from '@tippyjs/react/headless'
import Share from '~/components/popper/Share'
import ReactSlider from 'react-slider'
import { convertMinute } from '~/functions'

const cx = classNames.bind(styles)

function VideoItem({ data, setVolume, volume, prevVolume, setPrevVolume }) {
    const [playing, setPlaying] = useState(false)
    const [isShowAllShare, setIsShowAllShare] = useState(false)
    const [isShowVideoController, setIsShowVideoController] = useState(false)
    const [currentVideoTime, setCurrentVideoTime] = useState(0)
    const [time, setTime] = useState(false)

    let type
    const ratioVideo = data.meta.video.resolution_x / data.meta.video.resolution_y
    const totalTimeVideo = data.meta.playtime_seconds

    const videoRef = useRef()

    if (ratioVideo < 0.6) {
        type = 'vertical'
    } else if (ratioVideo > 1.25) {
        type = 'horizontal'
    } else {
        type = 'equal'
    }

    useEffect(() => {
        if (totalTimeVideo > 30) {
            setIsShowVideoController(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

    // autoplay scroll
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

    // change volume
    useEffect(() => {
        videoRef.current.volume = volume
    }, [volume])

    // seek bar video
    useEffect(() => {
        videoRef.current.currentTime = currentVideoTime
    }, [currentVideoTime])

    useEffect(() => {
        if (playing) {
            setTimeout(() => setTime(!time), 0)
        } else {
        }
    }, [time, playing])

    return (
        <div className={cx('video-container')}>
            <div className={cx('video-wrapper', type)}>
                <video src={data.file_url} loop preload="true" ref={videoRef}></video>
                <div className={cx('video-action')}>
                    <button className={cx('playing')} onClick={onVideoClick}>
                        {!playing ? <icons.play /> : <icons.pause />}
                    </button>
                    <button
                        className={cx('loud-speaker', volume === 0 && 'muted')}
                        onClick={() => {
                            setVolume((prev) => {
                                if (volume > 0) {
                                    return 0
                                } else if (prev === 0 && prevVolume > 0) {
                                    return prevVolume
                                }
                            })
                        }}
                    >
                        {volume !== 0 ? <icons.loudspeaker /> : <icons.loudspeakerMute />}
                    </button>
                    <div className={cx('volume-controller-container')}>
                        <ReactSlider
                            orientation={'vertical'}
                            className={cx('volume-bar')}
                            thumbClassName={cx('volume-circle')}
                            trackClassName={cx('volume-line')}
                            value={volume * 100}
                            invert
                            onChange={(a) => {
                                setVolume(a / 100)
                                if (a === 0) setPrevVolume(0.8)
                            }}
                        />
                    </div>
                    {isShowVideoController && (
                        <div className={cx('video-controller-container')}>
                            <ReactSlider
                                className={cx('seek-bar-container')}
                                thumbClassName={cx('seek-bar-circle')}
                                trackClassName={cx('seek-bar-line')}
                                value={(videoRef.current.currentTime / totalTimeVideo) * 100}
                                onChange={(a) => {
                                    setCurrentVideoTime((a * totalTimeVideo) / 100)
                                }}
                            />
                            <div className={cx('time-container')}>
                                {convertMinute(videoRef.current.currentTime)}/{data.meta.playtime_string}
                            </div>
                        </div>
                    )}
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
