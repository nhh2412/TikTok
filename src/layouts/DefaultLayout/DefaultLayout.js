import PropTypes from 'prop-types'

import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'

import Header from '~/layouts/components/Header'
import Sidebar from './Sidebar'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className={cx('container')}>
                <div className={cx('main-container')}>
                    <Sidebar />
                    {children}
                </div>
            </div>
        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout
