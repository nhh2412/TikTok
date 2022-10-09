import classnames from 'classnames/bind'
import styles from './ModalLogin.module.scss'
import icons from '~/assets/icons'
import LoginItem from './LoginItem'

const cx = classnames.bind(styles)

const LOGIN_ITEM = [
    {
        title: 'Đăng nhập vào TikTok',
        content: (
            <>
                <LoginItem icon={<icons.qr />} title={'Sử dụng mã QR'} />
                <LoginItem icon={<icons.user />} title={'Số điện thoại / Email / TikTok ID'} />
                <LoginItem icon={<icons.fb />} title={'Tiếp tục với Facebook'} />
                <LoginItem icon={<icons.google />} title={'Tiếp tục với Google'} />
                <LoginItem icon={<icons.twitter />} title={'Tiếp tục với Twitter'} />
                <LoginItem icon={<icons.LINE />} title={'Tiếp tục với LINE'} />
                <LoginItem icon={<icons.KaKaoTalk />} title={'Tiếp tục với KaKaoTalk'} />
                <LoginItem icon={<icons.apple />} title={'Tiếp tục với Apple'} />
                <LoginItem icon={<icons.instagram />} title={'Tiếp tục với Instagram'} />
            </>
        ),
    },
]

function ModalLogin({ isShowModalLogin, setIsShowModalLogin }) {
    if (isShowModalLogin) {
        document.querySelector('body').classList.add('hidden')
        document.onkeydown = (e) => {
            e.key === 'Escape' && setIsShowModalLogin(false)
        }
    } else {
        document.querySelector('body').classList.remove('hidden')
    }
    return (
        isShowModalLogin && (
            <div className={cx('modal')}>
                <div className={cx('mask')}></div>
                <div className={cx('wrapper')}>
                    <button
                        onClick={() => {
                            setIsShowModalLogin(false)
                        }}
                    >
                        <icons.closeModal />
                    </button>
                    <div className={cx('content')}>
                        <div className={cx('content-wrapper')}>
                            <h3>{LOGIN_ITEM[LOGIN_ITEM.length - 1].title}</h3>
                            {LOGIN_ITEM[LOGIN_ITEM.length - 1].content}
                        </div>
                    </div>
                    <footer className={cx('footer')}>
                        Bạn không có tài khoản?<a href="#.">Đăng ký</a>
                    </footer>
                </div>
            </div>
        )
    )
}

export default ModalLogin
