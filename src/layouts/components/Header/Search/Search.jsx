import TippyHeadless from '@tippyjs/react/headless'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Search.module.scss'

import axios from 'axios'
import AccountItem from '~/layouts/components/Header/Search/AccountItem'

import icons from '~/assets/icons'
import { useDebounce } from '~/hooks'

const cx = classNames.bind(styles)

function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)

    const debouncedSearchValue = useDebounce(searchValue, 500)

    const inputRef = useRef()

    useEffect(() => {
        if (!debouncedSearchValue.trim()) return

        const getResultSearch = async () => {
            setLoading(true)

            const res = await axios.get(
                `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                    debouncedSearchValue,
                )}&type=less`,
            )

            setLoading(false)

            setSearchResult(res.data.data)
        }

        getResultSearch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearchValue])

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleChange = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <TippyHeadless
            interactive
            onClickOutside={handleHideResult}
            visible={showResult && searchValue && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <div className={cx('wrapper')}>
                        <div className={cx('account-title')}>Tài khoản</div>
                        {searchResult.map((data) => (
                            <AccountItem data={data} key={data.id} />
                        ))}
                        <div className={cx('see-all')}>Xem tất cả kết quả dành cho "{searchValue}"</div>
                    </div>
                </div>
            )}
        >
            <form className={cx('search-form')}>
                <div className={cx('search-wrapper')}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Tìm kiếm tài khoản và video"
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {searchValue && !loading && (
                        <span className={cx('input-icons')} onClick={handleClear}>
                            <icons.closeSearch />
                        </span>
                    )}
                    {loading && (
                        <span className={cx('input-icons', 'loading')}>
                            <icons.loading />
                        </span>
                    )}
                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => {
                            e.preventDefault()
                        }}
                        onClick={handleSubmit}
                    >
                        <icons.search className={cx('icon-search')} />
                    </button>
                </div>
            </form>
        </TippyHeadless>
    )
}

export default Search
