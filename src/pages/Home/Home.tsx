import { useEffect, useState } from 'react'
import VideoRecommend from './VideoRecommend'

import styles from './Home.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

function Home() {
    const [videoList, setVideoList] = useState([])

    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=1')
            .then((res) => res.json())
            .then((res) => setVideoList(res.data))
    }, [])
    return videoList[0] ? (
        <>
            {videoList.map((data: any) => (
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
