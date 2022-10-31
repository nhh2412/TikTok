import { useEffect, useState } from 'react'
import AccountItem from '../AccountItem'
import classNames from 'classnames/bind'
import styles from './AccountLiveList.module.scss'
import axios from 'axios'
const cx = classNames.bind(styles)

function AccountList({ isMiniProfile }: { isMiniProfile: boolean }) {
    const [suggestAccounts, setSuggestAccounts] = useState([])
    const [showAllSuggestAccounts, setShowAllSuggestAccounts] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const getSuggestAccounts = async () => {
            const res = await axios.get(`https://tiktok.fullstack.edu.vn/api/users/live?page=1&per_page=20`)
            setSuggestAccounts(res.data.data)
        }
        getSuggestAccounts()
    }, [])
    return (
        <div className={cx('account-container')}>
            <div className={cx('account-suggest')}>
                <p className={cx('title')}>Các chủ phòng được đề xuất</p>
                {suggestAccounts[0] ? (
                    <>
                        {suggestAccounts.map((data, i) => (
                            <AccountItem
                                data={data}
                                index={i}
                                key={i}
                                isShowAll={showAllSuggestAccounts}
                                isMiniProfile={isMiniProfile}
                            />
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
    )
}

export default AccountList
