import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import Tippy from '@tippyjs/react/headless'
import icons from '~/assets/icons'
const cx = classNames.bind(styles)

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('row')}>
                <a href="a" target="_blank">
                    Giới thiệu
                </a>
                <a href="a" target="_blank">
                    TikTok Browse
                </a>
                <a href="a" target="_blank">
                    Bảng tin
                </a>
                <a href="a" target="_blank">
                    Liên hệ
                </a>
                <a href="a" target="_blank">
                    Sự nghiệp
                </a>
                <a href="a" target="_blank">
                    ByteDance
                </a>
            </div>
            <div className={cx('row')}>
                <a href="a" target="_blank">
                    TikTok for Good
                </a>
                <a href="a" target="_blank">
                    Quảng cáo
                </a>
                <a href="a" target="_blank">
                    Developers
                </a>
                <a href="a" target="_blank">
                    Transparency
                </a>
                <a href="a" target="_blank">
                    TikTok Rewards
                </a>
            </div>
            <div className={cx('row')}>
                <a href="a" target="_blank">
                    Trợ giúp
                </a>
                <a href="a" target="_blank">
                    An toàn
                </a>
                <a href="a" target="_blank">
                    Điều khoản
                </a>
                <a href="a" target="_blank">
                    Quyền riêng tư
                </a>
                <a href="a" target="_blank">
                    Creator Portal
                </a>
                <a href="a" target="_blank">
                    Hướng dẫn Cộng đồng
                </a>
            </div>
            <div className={cx('footer-more')}>
                <Tippy
                    placement="top-start"
                    hideOnClick={false}
                    interactive
                    render={() => (
                        <div className={cx('more-popup')}>
                            <a href="a" target="_blank">
                                NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
                            </a>
                            <span className={cx('arrow')}>
                                <icons.arrow />
                            </span>
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
    )
}

export default Footer
