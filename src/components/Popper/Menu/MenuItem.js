import PropTypes from 'prop-types'

import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function MenuItem({ data, onClick }) {
    if (data.class === 'language') {
        return (
            <li className={cx('language')} onClick={onClick}>
                <Link to={data.to}>
                    {data.icon}
                    <p>{data.title}</p>
                </Link>
            </li>
        )
    }
    return data.to ? (
        <li className={data.separate && 'separate'} onClick={onClick}>
            <Link to={data.to}>
                {data.icon}
                <p>{data.title}</p>
            </Link>
        </li>
    ) : (
        <li className={data.separate && 'separate'} onClick={onClick}>
            {data.icon}
            <p>{data.title}</p>
        </li>
    )
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}
export default MenuItem
