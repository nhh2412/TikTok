import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react/headless'

import Menu from '~/layouts/components/Header/Menu'
import Search from './Search'
import config from '~/config'

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
                    class: 'language',
                    title: 'Tiếng Việt (Việt Nam)',
                    act: true,
                },
                {
                    class: 'language',
                    title: 'العربيةt',
                },
                {
                    class: 'language',
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    class: 'language',
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    class: 'language',
                    title: 'Čeština (Česká republika)',
                },
                {
                    class: 'language',
                    title: 'Deutsch',
                },
                {
                    class: 'language',
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    class: 'language',
                    title: 'Español',
                },
                {
                    class: 'language',
                    title: 'Suomi (Suomi)',
                },
                {
                    class: 'language',
                    title: 'Filipino (Pilipinas)',
                },
                {
                    class: 'language',
                    title: 'Français',
                },
                {
                    class: 'language',
                    title: 'עברית (ישראל)',
                },
                {
                    class: 'language',
                    title: 'हिंदी',
                },
                {
                    class: 'language',
                    title: 'Magyar (Magyarország)',
                },
                {
                    class: 'language',
                    title: 'Bahasa Indonesia (Indonesia)',
                },
                {
                    class: 'language',
                    title: 'Italiano (Italia)',
                },
                {
                    class: 'language',
                    title: '日本語（日本）',
                },
                {
                    class: 'language',
                    title: 'Basa Jawa (Indonesia)',
                },
                {
                    class: 'language',
                    title: 'ខ្មែរ (កម្ពុជា)',
                },
                {
                    class: 'language',
                    title: '한국어 (대한민국)',
                },
                {
                    class: 'language',
                    title: 'Bahasa Melayu (Malaysia)',
                },
                {
                    class: 'language',
                    title: 'မြန်မာ (မြန်မာ)',
                },
                {
                    class: 'language',
                    title: 'Nederlands (Nederland)',
                },
                {
                    class: 'language',
                    title: 'Polski (Polska)',
                },
                {
                    class: 'language',
                    title: 'Português (Brasil)',
                },
                {
                    class: 'language',
                    title: 'Română (Romania)',
                },
                {
                    class: 'language',
                    title: 'Русский (Россия)',
                },
                {
                    class: 'language',
                    title: 'Svenska (Sverige)',
                },
                {
                    class: 'language',
                    title: 'ไทย (ไทย)',
                },
                {
                    class: 'language',
                    title: 'Türkçe (Türkiye)',
                },
                {
                    class: 'language',
                    title: 'Українська (Україна)',
                },
                {
                    class: 'language',
                    title: 'اردو',
                },
                {
                    class: 'language',
                    title: '简体中文',
                },
                {
                    class: 'language',
                    title: '繁體中文',
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

let currentUser: boolean = false

const USER_MENU = [
    {
        icon: <icons.user />,
        title: 'Xem hồ sơ',
        to: config.routes.profile,
    },
    {
        icon: <icons.tiktok />,
        title: 'Nhận xu',
    },
    {
        icon: <icons.setting />,
        title: 'Cài đặt',
    },
    ...MENU_ITEMS,
    {
        icon: <icons.signOut />,
        title: 'Đăng xuất',
        separate: true,
    },
]

function Header({ type }: { type?: string }) {
    return (
        <header className={cx('header', type === 'full' && 'header-full')}>
            <div className={cx('wrapper')}>
                <Link className={cx('logo')} to={config.routes.home}>
                    <images.logo />
                </Link>
                <div className={cx('search')}>
                    <Search />
                </div>
                <div className={cx('act')}>
                    {currentUser ? (
                        <>
                            <button className={cx('upload')}>
                                <div className={cx('icon-plus')}>
                                    <icons.plus />
                                </div>
                                <span>Tải lên</span>
                            </button>
                            <Tippy content="Tin nhắn" placement="bottom">
                                <span className={cx('message-icon')}>
                                    <icons.message />
                                </span>
                            </Tippy>
                            <Tippy content="Hộp thư" placement="bottom">
                                <span className={cx('mailbox-icon')}>
                                    <icons.mailbox />
                                </span>
                            </Tippy>
                            <Menu items={USER_MENU}>
                                <div className={cx('user-icon')}></div>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <button className={cx('upload')} onClick={() => {}}>
                                <div className={cx('icon-plus')}>
                                    <icons.plus />
                                </div>
                                <span>Tải lên</span>
                            </button>
                            <button className={cx('login')} onClick={() => {}}>
                                <span>Đăng nhập</span>
                            </button>
                            <Menu items={MENU_ITEMS}>
                                <span className={cx('icon-more')}>
                                    <icons.more />
                                </span>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
