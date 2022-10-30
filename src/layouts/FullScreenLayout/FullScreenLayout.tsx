import classNames from 'classnames/bind'
import styles from './FullScreenLayout.module.scss'

import Header from '~/layouts/components/Header'
import Sidebar from '~/layouts/components/Sidebar'
import { FC, ReactElement } from 'react'

const cx = classNames.bind(styles)

const FullScreenLayout: FC<{ children: ReactElement; path: string }> = ({ children, path }) => {
    return (
        <>
            <Header type="full" />
            <div className={cx('container')}>
                <Sidebar path={path} />
                {children}
            </div>
        </>
    )
}

export default FullScreenLayout
