import { useEffect, useState } from 'react'
import VideoRecommend from './VideoRecommend'

function Home({ setIsShowModalLogin }) {
    const [videoList, setVideoList] = useState([])
    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=1')
            .then((res) => res.json())
            .then((res) => setVideoList(res.data))
    }, [])
    return (
        <>
            {videoList.map((data) => (
                <VideoRecommend key={data.id} data={data} setIsShowModalLogin={setIsShowModalLogin} />
            ))}
        </>
    )
}

export default Home
