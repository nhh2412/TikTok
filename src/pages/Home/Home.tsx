import { useEffect, useState } from 'react'
import VideoRecommend from './VideoRecommend'

import styles from './Home.module.scss'
import classnames from 'classnames/bind'
import { Video } from '~/interface'
import axios from 'axios'

const cx = classnames.bind(styles)

function Home() {
    const [videoList, setVideoList] = useState<any>([])
    const [loading, setLoading] = useState(false)

    const getVideoForYou = async () => {
        setLoading(true)
        const res = await axios.get(`https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=1`)
        setVideoList((prev: any) => [...prev, ...res.data.data])
        setLoading(false)
    }
    useEffect(() => {
        getVideoForYou()
    }, [])

    return videoList[0] ? (
        <div className={cx('main')}>
            {videoList.map((data: Video, index: number) => (
                <VideoRecommend key={index} data={data} />
            ))}
        </div>
    ) : (
        <div className={cx('skeleton-container')}>
            <div className={cx('avatar-no-img', 'skeleton-animation')}></div>
            <div className={cx('content')}>
                <div className={cx('name', 'skeleton-animation')}></div>
                <div className={cx('username', 'skeleton-animation')}></div>
                <div className={cx('description')}>
                    <div className={cx('description-item', 'skeleton-animation')}></div>
                    <div className={cx('description-item', 'skeleton-animation')}></div>
                </div>
            </div>
        </div>
    )
}

export default Home
