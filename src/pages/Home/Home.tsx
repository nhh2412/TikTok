import { useEffect, useState } from 'react'
import VideoRecommend from './VideoRecommend'

import styles from './Home.module.scss'
import classnames from 'classnames/bind'
import { DataVideo } from '~/interface'
import axios from 'axios'

const cx = classnames.bind(styles)

function Home() {
    const [videoList, setVideoList] = useState([])

    useEffect(() => {
        const getVideoForYou = async () => {
            const res = await axios.get(`https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=1`)
            setVideoList(res.data.data)
        }
        getVideoForYou()
    }, [])

    return videoList[0] ? (
        <>
            {videoList.map((data: DataVideo) => (
                <VideoRecommend key={data.id} data={data} />
            ))}
        </>
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
