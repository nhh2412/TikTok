import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import { useEffect, useState } from 'react'

import Tippy from '@tippyjs/react/headless'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.css'

import icons from '~/assets/icons'
import config from '~/config'
import MenuItem from './MenuItem'
import AccountItem from './AccountItem'
import DiscoverItem from './DiscoverItem'

const cx = classNames.bind(styles)

function Sidebar() {
    const [suggestAccounts, setSuggestAccounts] = useState([])
    const [showAllSuggestAccounts, setShowAllSuggestAccounts] = useState(false)

    useEffect(() => {
        const fetchApi = async () => {
            let data = []
            let response
            let newData
            for (let i = 0; i < 3; i++) {
                response = await fetch(`https://tiktok.fullstack.edu.vn/api/users/suggested?page=${i}&per_page=12`)
                newData = await response.json()
                data = [...data, ...newData.data]
            }
            setSuggestAccounts(data)
        }

        fetchApi()
    }, [])

    return (
        <aside className={cx('sidebar')}>
            <SimpleBar className={cx('wrapper')}>
                <nav className={cx('navigation')}>
                    <MenuItem title="Dành cho bạn" to={config.routes.home} icon={icons.home} />
                    <MenuItem title="Đang Follow" to={config.routes.following} icon={icons.userGroup} />
                    <MenuItem title="LIVE" to={config.routes.live} icon={icons.camera} />
                </nav>
                <div className={cx('login', 'separate')}>
                    <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                    <button>Đăng nhập</button>
                </div>
                <div className={cx('account-container', 'separate')}>
                    <div className={cx('account-suggest')}>
                        <p className={cx('title')}>Tài khoản được đề xuất</p>
                        {suggestAccounts[0] ? (
                            <>
                                {suggestAccounts.map((data, i) => (
                                    <AccountItem data={data} index={i} key={i} isShowAll={showAllSuggestAccounts} />
                                ))}
                                <div
                                    className={cx('show-all')}
                                    onClick={() => setShowAllSuggestAccounts(!showAllSuggestAccounts)}
                                >
                                    {showAllSuggestAccounts ? <p>Ẩn bớt</p> : <p>Xem tất cả</p>}
                                </div>
                            </>
                        ) : (
                            <div className={cx('account-load')}>
                                <div className={cx('avatar-no-img', 'skeleton-animation')}></div>
                                <div className={cx('info')}>
                                    <div className={cx('name', 'skeleton-animation')}></div>
                                    <div className={cx('username', 'skeleton-animation')}></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={cx('discover', 'separate')}>
                    <p className={cx('title')}>Khám phá</p>
                    <div className={cx('discover-list')}>
                        {suggestAccounts[0] ? (
                            <>
                                <DiscoverItem icon={<icons.hashtag />} title={'suthatla'} />
                                <DiscoverItem icon={<icons.hashtag />} title={'mackedoi'} />
                                <DiscoverItem icon={<icons.hashtag />} title={'sansangthaydoi'} />
                                <DiscoverItem
                                    icon={<icons.musicNote />}
                                    title={'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n'}
                                />
                                <DiscoverItem
                                    icon={<icons.musicNote />}
                                    title={'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng'}
                                />
                                <DiscoverItem icon={<icons.musicNote />} title={'Thiên Thần Tình Yêu - RICKY STAR'} />
                                <DiscoverItem icon={<icons.hashtag />} title={'7749hieuung'} />
                                <DiscoverItem icon={<icons.hashtag />} title={'genzlife'} />
                                <DiscoverItem
                                    icon={<icons.musicNote />}
                                    title={'Tình Đã Đầy Một Tim - Huyền Tâm Môn'}
                                />
                                <DiscoverItem
                                    icon={<icons.musicNote />}
                                    title={'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham'}
                                />
                            </>
                        ) : (
                            <>
                                <div className={cx('discover-load', 'skeleton-animation')}></div>
                                <div className={cx('discover-load', 'skeleton-animation')}></div>
                            </>
                        )}
                    </div>
                </div>
                <footer className={cx('footer', 'separate')}>
                    <div className={cx('row')}>
                        <a href="#.">Giới thiệu</a>
                        <a href="#.">TikTok Browse</a>
                        <a href="#.">Bảng tin</a>
                        <a href="#.">Liên hệ</a>
                        <a href="#.">Sự nghiệp</a>
                        <a href="#.">ByteDance</a>
                    </div>
                    <div className={cx('row')}>
                        <a href="#.">TikTok for Good</a>
                        <a href="#.">Quảng cáo</a>
                        <a href="#.">Developers</a>
                        <a href="#.">Transparency</a>
                        <a href="#.">TikTok Rewards</a>
                    </div>
                    <div className={cx('row')}>
                        <a href="#.">Trợ giúp</a>
                        <a href="#.">An toàn</a>
                        <a href="#.">Điều khoản</a>
                        <a href="#.">Quyền riêng tư</a>
                        <a href="#.">Creator Portal</a>
                        <a href="#.">Hướng dẫn Cộng đồng</a>
                    </div>
                    <div className={cx('footer-more')}>
                        <Tippy
                            placement="top-start"
                            hideOnClick={false}
                            interactive
                            render={() => (
                                <div className={cx('more-popup')}>
                                    <a href="#.">NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK</a>
                                </div>
                            )}
                        >
                            <span>Thêm</span>
                        </Tippy>
                    </div>
                    <div>
                        <span>© 2022 TikTok</span>
                    </div>
                </footer>
            </SimpleBar>
        </aside>
    )
}

export default Sidebar
