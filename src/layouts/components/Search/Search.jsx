import TippyHeadless from '@tippyjs/react/headless'
import { useRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Search.module.scss'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'

import icons from '~/assets/icons'

const cx = classNames.bind(styles)

function Search() {
    const [, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(false)

    const inputRef = useRef()

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
            visible={showResult && searchValue.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('account-title')}>Tài khoản</div>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
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
                    {!!searchValue && (
                        <span className={cx('input-icons')} onClick={handleClear}>
                            <icons.close />
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
