import TippyHeadless from '@tippyjs/react/headless'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Search.module.scss'

import AccountItem from '~/layouts/components/Header/Search/AccountItem'

import icons from '~/assets/icons'
import { useDebounce } from '~/hooks'

const cx = classNames.bind(styles)

function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)

    const debounced = useDebounce(searchValue, 500)

    const inputRef = useRef()

    useEffect(() => {
        if (!debounced.trim()) return

        const fetchApi = async () => {
            setLoading(true)

            const response = await fetch(
                `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`,
            )
            const result = await response.json()

            setSearchResult(result.data)
            setLoading(false)
        }

        fetchApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounced])

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
                            <icons.close />
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
