import styles from './NotFound.module.scss'
import classnames from 'classnames/bind'

import icon0 from '~/assets/images/icon0.png'
import icons from '~/assets/icons'
import { useEffect } from 'react'

const cx = classnames.bind(styles)

function NotFound() {
    useEffect(() => {
        document.title = 'TikTok'
    })
    return (
        <main className={cx('main')}>
            <div className={cx('content')}>
                <h1>
                    4
                    <img src={icon0} alt="" width={244} height={244} />4
                </h1>
                <p>Không thể tìm thấy trang này</p>
                <h2>Xem những video thịnh hành khác trên TikTok</h2>
                <button>
                    <a href="/">
                        <span className={cx('icon')}>
                            <icons.play />
                        </span>
                        Xem ngay
                    </a>
                </button>
            </div>
        </main>
    )
}

export default NotFound
