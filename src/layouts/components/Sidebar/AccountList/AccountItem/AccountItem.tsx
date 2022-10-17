import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import icons from '~/assets/icons'
import { isImage } from '~/hooks'
import { User } from '~/interface'
import { FC } from 'react'

const cx = classNames.bind(styles)

const AccountItem: FC<{ data: User; index: number; isShowAll: boolean }> = ({ data, index, isShowAll }) => {
    return (
        <Tippy
            delay={[800, 800]}
            placement="bottom-start"
            interactive
            render={() => (
                <div className={cx('mini-profile')}>
                    <div className={cx('head')}>
                        <a href="#." className={cx('avatar')}>
                            <img src={data.avatar} alt={data.nickname} width={44} height={44} />
                        </a>
                        <button onClick={() => {}}>Follow</button>
                    </div>
                    <a href="." className={cx('nickname')}>
                        <h4>{data.nickname}</h4> {data.tick && <icons.check />}
                    </a>
                    <br />
                    <a href="." className={cx('full-name')}>
                        <h5>
                            {data.first_name} {data.last_name}
                        </h5>
                    </a>
                    <div className={cx('stat')}>
                        <span className={cx('count')}>{data.followers_count}</span>
                        <span className={cx('follower')}>Follower</span>
                        <span className={cx('count')}>{data.likes_count}</span>
                        <span>Thích</span>
                    </div>
                </div>
            )}
        >
            <a href="." className={cx('wrapper', index > 4 && !isShowAll && 'hide')}>
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
            </a>
        </Tippy>
    )
}

export default AccountItem
