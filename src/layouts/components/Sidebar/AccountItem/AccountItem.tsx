import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import icons from '~/assets/icons'
import { isImage } from '~/functions'
import { User } from '~/interface'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import MiniProfile from '~/components/popper/MiniProfile'

const cx = classNames.bind(styles)

const AccountItem: FC<{ data: User }> = ({ data }) => {
    return (
        <div>
            <Tippy
                delay={[800, 800]}
                placement="bottom-start"
                offset={[0, 0]}
                interactive
                render={() => MiniProfile.Sidebar(data)}
            >
                <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
                    <div className={cx('avatar')}>
                        {isImage(data.avatar) ? (
                            <img src={data.avatar} alt={data.nickname} width={32} height={32} />
                        ) : (
                            <div className={cx('avatar-no-img')}></div>
                        )}
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('name')}>
                            <h4>{data.nickname}</h4> {data.tick && <icons.check />}
                        </div>
                        <p className={cx('username')}>
                            {data.first_name} {data.last_name}
                        </p>
                    </div>
                </Link>
            </Tippy>
        </div>
    )
}

export default AccountItem
