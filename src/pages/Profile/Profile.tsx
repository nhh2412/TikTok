import axios from 'axios'
import { useEffect, useState } from 'react'

import styles from './Profile.module.scss'
import classnames from 'classnames/bind'
import icons from '~/assets/icons'
import { useParams } from 'react-router-dom'
const cx = classnames.bind(styles)

function Profile() {
    const [dataUser, setDataUser] = useState<any>()
    const { nickname } = useParams()

    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get(`https://tiktok.fullstack.edu.vn/api/users${window.location.pathname}`)
            setDataUser(res.data.data)
            document.title = `${res.data.data.first_name} ${res.data.data.last_name} (@${res.data.data.nickname})`
        }
        getUser()
    }, [nickname])
    return (
        dataUser && (
            <main className={cx('main')}>
                <div className={cx('info')}>
                    <div className={cx('header')}>
                        <div className={cx('avatar')}></div>
                        <div className={cx('title-container')}>
                            <h2>
                                {dataUser.nickname} {dataUser.tick && icons.check}
                            </h2>
                            <h1>{`${dataUser.first_name} ${dataUser.last_name}`}</h1>
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className={cx('count-info')}>
                        <div className={cx('following')}>
                            <strong>{dataUser.followings_count}</strong>
                            <span>Đang Follow</span>
                        </div>
                        <div className={cx('follower')}>
                            <strong>{dataUser.followers_count}</strong>
                            <span>Đang Follow</span>
                        </div>
                        <div className={cx('likes')}>
                            <strong>{dataUser.likes_count}</strong>
                            <span>Đang Follow</span>
                        </div>
                    </div>
                    <p className={cx('user-bio')}>{dataUser.bio}</p>
                </div>
                <div className={cx('videos')}></div>
            </main>
        )
    )
}

export default Profile
