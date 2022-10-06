import { useEffect, useState } from 'react'
import AccountItem from './AccountItem'
import classNames from 'classnames/bind'
import styles from './AccountList.module.scss'
const cx = classNames.bind(styles)

function AccountList() {
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
        <div className={cx('account-container')}>
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
    )
}

export default AccountList
