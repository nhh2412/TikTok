import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import Tippy from '@tippyjs/react/headless'
import icons from '~/assets/icons'
const cx = classNames.bind(styles)

function Footer() {
    return (
        <footer className={cx('footer')}>
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
