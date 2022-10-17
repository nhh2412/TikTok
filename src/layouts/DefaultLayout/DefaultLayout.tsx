import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'

import Header from '~/layouts/components/Header'
import Sidebar from '~/layouts/components/Sidebar'
import { FC, ReactElement } from 'react'

const cx = classNames.bind(styles)

const DefaultLayout: FC<{ children: ReactElement }> = ({ children }) => {
    return (
        <>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('main')}>{children}</div>
            </div>
        </>
    )
}

export default DefaultLayout
