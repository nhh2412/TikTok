import axios from 'axios'
import { useEffect, useState } from 'react'
import RecommendCard from './RecommendCard'
import styles from './Following.module.scss'
import classnames from 'classnames/bind'
import { User } from '~/interface'

const cx = classnames.bind(styles)

function Following() {
    const [suggestAccounts, setSuggestAccounts] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getSuggestAccounts = async () => {
            const res1 = await axios.get(`https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=16`)
            setLoading(false)
            const res2 = await axios.get(`https://tiktok.fullstack.edu.vn/api/users/suggested?page=2&per_page=16`)
            const res3 = await axios.get(`https://tiktok.fullstack.edu.vn/api/users/suggested?page=3&per_page=16`)
            setSuggestAccounts([...res1.data.data, ...res2.data.data, ...res3.data.data])
        }
        getSuggestAccounts()
    }, [])
    return (
        <div className={cx('main')}>
            {!loading ? (
                suggestAccounts.map((data, index) => (
                    <div className={cx('recommend-card')}>
                        <RecommendCard data={data} key={index} />
                    </div>
                ))
            ) : (
                <>
                    <div className={cx('recommend-card', 'skeleton-animation')}></div>
                    <div className={cx('recommend-card', 'skeleton-animation')}></div>
                    <div className={cx('recommend-card', 'skeleton-animation')}></div>
                    <div className={cx('recommend-card', 'skeleton-animation')}></div>
                    <div className={cx('recommend-card', 'skeleton-animation')}></div>
                    <div className={cx('recommend-card', 'skeleton-animation')}></div>
                    <div className={cx('recommend-card', 'skeleton-animation')}></div>
                    <div className={cx('recommend-card', 'skeleton-animation')}></div>
                    <div className={cx('recommend-card', 'skeleton-animation')}></div>
                </>
            )}
        </div>
    )
}

export default Following
