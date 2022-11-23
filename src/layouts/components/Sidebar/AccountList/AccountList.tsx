import { useEffect, useState } from 'react'
import AccountItem from '../AccountItem'
import classNames from 'classnames/bind'
import styles from './AccountList.module.scss'
import axios from 'axios'
const cx = classNames.bind(styles)

function AccountList() {
    const [suggestAccounts, setSuggestAccounts] = useState([])
    const [showAllSuggestAccounts, setShowAllSuggestAccounts] = useState(false)

    useEffect(() => {
        const getSuggestAccounts = async () => {
            const res = await axios.get(`https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=20`)
            setSuggestAccounts(res.data.data)
        }
        getSuggestAccounts()
    }, [])
    return (
        <div className={cx('account-container')}>
            <div className={cx('account-suggest')}>
                <p className={cx('title')}>Tài khoản được đề xuất</p>
                {suggestAccounts[0] ? (
                    <>
                        {suggestAccounts.map((data, i) => {
                            if (i > 4 && !showAllSuggestAccounts) {
                                // eslint-disable-next-line array-callback-return
                                return
                            } else {
                                return <AccountItem data={data} key={i} />
                            }
                        })}
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
