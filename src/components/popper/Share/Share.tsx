import icons from '~/assets/icons'
import classNames from 'classnames/bind'
import styles from './Share.module.scss'
const cx = classNames.bind(styles)

const SHARE_LIST = [
    {
        icon: <icons.tag />,
        title: 'Nhúng',
    },
    {
        icon: <icons.plane />,
        title: 'Gửi đến bạn bè',
    },
    {
        icon: <icons.fb />,
        title: 'Chia sẻ với Facebook',
    },
    {
        icon: <icons.WhatsApp />,
        title: 'Chia sẻ với WhatsApp',
    },
    {
        icon: <icons.link />,
        title: 'Sao chép liên kết',
    },
    {
        icon: <icons.LinkedIn />,
        title: 'Chia sẻ với LinkedIn',
    },
    {
        icon: <icons.Reddit />,
        title: 'Chia sẻ với Reddit',
    },
    {
        icon: <icons.Telegram />,
        title: 'Chia sẻ với Telegram',
    },
    {
        icon: <icons.email />,
        title: 'Chia sẻ với email',
    },
    {
        icon: <icons.LINE />,
        title: 'Chia sẻ với Line',
    },
    {
        icon: <icons.Pinterest />,
        title: 'Chia sẻ với Pinterest',
    },
]

function Share(isShowAllShare: boolean, setIsShowAllShare: (arg0: boolean) => void) {
    return (
        <div className={cx('share-wrapper')}>
            <ul className={cx('share-list')}>
                {
                    // eslint-disable-next-line array-callback-return
                    SHARE_LIST.map((data, index) => {
                        if (!isShowAllShare) {
                            if (index < 5)
                                return (
                                    <li key={index} className={cx('share-item')}>
                                        {data.icon}
                                        {data.title}
                                    </li>
                                )
                        } else {
                            return (
                                <li key={index} className={cx('share-item')}>
                                    {data.icon}
                                    {data.title}
                                </li>
                            )
                        }
                    })
                }
            </ul>
            {!isShowAllShare && (
                <div className={cx('show-more')} onClick={() => setIsShowAllShare(true)}>
                    <icons.arrowDown />
                </div>
            )}
            <span className={cx('arrow')}>
                <icons.arrow />
            </span>
        </div>
    )
}

export default Share
