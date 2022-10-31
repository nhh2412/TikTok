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
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const getVideoForYou = async () => {
        setLoading(true)
        const res = await axios.get(`https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=${page}`)
        setVideoList((prev: any) => [...prev, ...res.data.data])
        setTotalPages(res.data.meta.pagination.total_pages)
        setTimeout(() => setLoading(false), 2000)
    }

    useEffect(() => {
        !loading && page <= totalPages && getVideoForYou()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY + window.innerHeight - 59 >= document.body.clientHeight && !loading) {
                setPage((prev) => prev + 1)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return videoList.length > 0 ? (
        <main className={cx('main')}>
            {videoList.map((data: Video) => (
                <VideoRecommend key={data.id} data={data} />
            ))}
            <div id="loader"></div>
        </main>
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
