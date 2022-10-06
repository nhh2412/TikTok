import DiscoverItem from './DiscoverItem'
import classNames from 'classnames/bind'
import styles from './Discover.module.scss'
import icons from '~/assets/icons'

const cx = classNames.bind(styles)

function Discover() {
    return (
        <div className={cx('discover')}>
            <p className={cx('title')}>Khám phá</p>
            <div className={cx('discover-list')}>
                {true ? (
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
                        <DiscoverItem icon={<icons.musicNote />} title={'Tình Đã Đầy Một Tim - Huyền Tâm Môn'} />
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
    )
}

export default Discover
