import classNames from 'classnames/bind'
import styles from './OnyHeaderLayout.module.scss'

import Header from '~/layouts/components/Header'
import { FC, ReactElement } from 'react'

const cx = classNames.bind(styles)

const OnyHeaderLayout: FC<{ children: ReactElement }> = ({ children }) => {
    return (
        <>
            <Header type="full" />
            <div className={cx('container')}>{children}</div>
        </>
    )
}

export default OnyHeaderLayout
