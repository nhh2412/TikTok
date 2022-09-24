import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import Menu from '~/components/Popper/Menu'
import Search from '../Search'

import images from '~/assets/images'
import icons from '~/assets/icons'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <icons.language />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <icons.question />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <icons.keyboard />,
        title: 'Phím tắt trên bàn phím',
    },
]

const currentUser = false

function Header() {
    const userMenu = [
        {
            icon: <icons.user />,
            title: 'Xem hồ sơ',
            to: '/profile',
        },
        {
            icon: <icons.question />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <icons.question />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <icons.question />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ]

    return (
        <header className={cx('header')}>
            <div className={cx('wrapper')}>
                <Link className="logo" to="/">
                    <images.logo />
                </Link>
                <div className="search">
                    <Search />
                </div>
                <div className={cx('act')}>
                    {currentUser ? (
                        <>
                            <button className={cx('upload')}>
                                <Link to="/upload">
                                    <icons.plus className={cx('icon-plus')} />
                                    <p>Tải lên</p>
                                </Link>
                            </button>
                            <Tippy content="Tin nhắn" placement="bottom">
                                <icons.message className={cx('message-icon')} />
                            </Tippy>
                            <Tippy content="Hộp thư" placement="bottom">
                                <icons.mailbox className={cx('mailbox-icon')} />
                            </Tippy>
                            <Menu items={userMenu}>
                                <div className={cx('user-icon')}></div>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <button className={cx('upload')}>
                                <Link to="/upload">
                                    <icons.plus className={cx('icon-plus')} />
                                    <p>Tải lên</p>
                                </Link>
                            </button>
                            <button className={cx('login')}>
                                <p>Đăng nhập</p>
                            </button>
                            <Menu items={MENU_ITEMS}>
                                <icons.more className={cx('icon-more')} />
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
