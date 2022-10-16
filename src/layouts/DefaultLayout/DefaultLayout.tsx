import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'

import Header from '~/layouts/components/Header'
import Sidebar from '~/layouts/components/Sidebar'

const cx = classNames.bind(styles)

function DefaultLayout({ Children }: { Children: () => JSX.Element }) {
    return (
        <>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('main')}>
                    <Children />
                </div>
            </div>
        </>
    )
}

export default DefaultLayout
