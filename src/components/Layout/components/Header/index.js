import { useState } from 'react'

import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import TippyHeadless from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import Menu from '~/components/Popper/Menu'

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
    const [searchResult, setSearchResult] = useState([])

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

    setTimeout(() => {
        setSearchResult([1])
    }, 0)
    return (
        <header className={cx('header')}>
            <div className={cx('wrapper')}>
                <Link className="logo" to="/">
                    <images.logo />
                </Link>
                <div className={cx('header-search')}>
                    <TippyHeadless
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <div className={cx('account-title')}>Tài khoản</div>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <form className={cx('search-container')}>
                            <div className={cx('input-wrapper')}>
                                <input type="text" placeholder="Tìm kiếm tài khoản và video" />
                            </div>
                            <button className={cx('search-btn')}>
                                <icons.search className={cx('icon-search')} />
                            </button>
                        </form>
                    </TippyHeadless>
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
