import classnames from 'classnames/bind'
import styles from './ModalLogin.module.scss'
import icons from '~/assets/icons'
import LoginItem from './LoginItem'
import { useState } from 'react'

const cx = classnames.bind(styles)

const LOGIN_ITEM = [
    {
        title: 'Đăng nhập vào TikTok',
        documentTitle: 'Đăng nhập | TikTok',
        footer: 'Bạn không có tài khoản?',
        children: [
            {
                icon: <icons.qr />,
                title: 'Sử dụng mã QR',
                children: {
                    documentTitle: 'Đăng nhập | TikTok',
                    title: 'Đăng nhập bằng mã QR',
                    children: <div>hello</div>,
                },
            },
            {
                icon: <icons.user />,
                title: 'Số điện thoại / Email / TikTok ID',
                children: {
                    documentTitle: 'Đăng nhập | TikTok',
                    title: 'Đăng nhập',
                    children: <div>hello</div>,
                },
            },
            { icon: <icons.fb />, title: 'Tiếp tục với Facebook' },
            { icon: <icons.google />, title: 'Tiếp tục với Google' },
            { icon: <icons.twitter />, title: 'Tiếp tục với Twitter' },
            { icon: <icons.LINE />, title: 'Tiếp tục với LINE' },
            { icon: <icons.KaKaoTalk />, title: 'Tiếp tục với KaKaoTalk' },
            { icon: <icons.apple />, title: 'Tiếp tục với Apple' },
            { icon: <icons.instagram />, title: 'Tiếp tục với Instagram' },
        ],
    },
]

// const prevTitle = document.title
function ModalLogin() {
    const [items, setItems] = useState<any>(LOGIN_ITEM)
    const current = items[items.length - 1]

    // useEffect(() => {
    //     setItems(LOGIN_ITEM)
    // }, [isShowModalLogin])

    // if (isShowModalLogin) {
    //     document.querySelector('body').classList.add('hidden')
    //     document.onkeydown = (e) => {
    //         e.key === 'Escape' && setIsShowModalLogin(false)
    //     }
    //     document.title = current.documentTitle
    // } else {
    //     document.querySelector('body').classList.remove('hidden')
    //     document.title = prevTitle
    // }

    return (
        (
            <div className={cx('modal')}>
                <div className={cx('mask')}></div>
                <div className={cx('wrapper')}>
                    <button
                        onClick={() => {
                            // setIsShowModalLogin(false)
                        }}
                    >
                        <icons.closeModal />
                    </button>
                    <div className={cx('content')}>
                        <div className={cx('content-wrapper')}>
                            <h3>{current.title}</h3>
                            {Array.isArray(current.children)
                                ? current.children.map((e: any, i: number) => {
                                      return (
                                          <LoginItem
                                              icon={e.icon}
                                              title={e.title}
                                              key={i}
                                              children={e.children}
                                              setItems={setItems}
                                          />
                                      )
                                  })
                                : current.children}
                        </div>
                    </div>
                    <footer className={cx('footer')}>
                        Bạn không có tài khoản?
                        <span
                            className={cx('signup')}
                            onClick={() =>
                                setItems([
                                    ...LOGIN_ITEM,
                                    {
                                        documentTitle: 'Đăng ký | TikTok',
                                        title: 'Đăng ký TikTok',
                                        children: <div>hello</div>,
                                    },
                                ])
                            }
                        >
                            Đăng ký
                        </span>
                    </footer>
                </div>
            </div>
        ) && <></>
    )
}

export default ModalLogin
