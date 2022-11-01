import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import Tippy from '@tippyjs/react/headless'
import { ReactElement, useState } from 'react'

import icons from '~/assets/icons'

import MenuItem from './MenuItem'
import Header from './Header'

const cx = classNames.bind(styles)

function Menu({ children, items = [] }: { children: ReactElement; items: any }) {
    const [history, setHistory] = useState<{ data: any; title?: string }[]>([{ data: items }])
    const current = history[history.length - 1]

    const renderItems = () =>
        current.data.map((item: any, index: number) => {
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (item.children) {
                            setHistory((prev) => [...prev, item.children])
                        }
                    }}
                />
            )
        })

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1))
    }

    const renderResult = () => (
        <div className={cx('menu')}>
            {history.length > 1 && current.title && <Header title={current.title} onBack={handleBack} />}
            <ul>{renderItems()}</ul>
            <span className={cx('arrow')}>
                <icons.arrow />
            </span>
        </div>
    )

    // Reset to first page
    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1))
    }

    return (
        <Tippy
            interactive
            placement="bottom-end"
            hideOnClick={false}
            onHide={handleReset}
            delay={[0, 700]}
            offset={[12, 8]}
            render={renderResult}
        >
            {children}
        </Tippy>
    )
}

export default Menu
