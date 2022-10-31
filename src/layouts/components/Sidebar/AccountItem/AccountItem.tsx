import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import icons from '~/assets/icons'
import { isImage } from '~/hooks'
import { User } from '~/interface'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const AccountItem: FC<{ data: User; index: number; isShowAll: boolean; type?: string | boolean }> = ({
    data,
    index,
    isShowAll,
    type,
}) => {
    return (
        <div>
            <Tippy
                delay={[800, 800]}
                placement="bottom-start"
                interactive
                render={() =>
                    type !== 's' && (
                        <div className={cx('mini-profile')}>
                            <div className={cx('head')}>
                                <Link to={`/@${data.nickname}`} className={cx('avatar')} target="_blank">
                                    {isImage(data.avatar) ? (
                                        <img src={data.avatar} alt={data.nickname} width={44} height={44} />
                                    ) : (
                                        <div className={cx('avatar-no-img')} style={{ width: 44, height: 44 }}></div>
                                    )}
                                </Link>
                                <button onClick={() => {}}>Follow</button>
                            </div>
                            <Link to={`/@${data.nickname}`} className={cx('nickname')} target="_blank">
                                <h4>{data.nickname}</h4> {data.tick && <icons.check />}
                            </Link>

                            <br />
                            <Link to={`/@${data.nickname}`} className={cx('full-name')} target="_blank">
                                <h5>
                                    {data.first_name} {data.last_name}
                                </h5>
                            </Link>
                            <div className={cx('stat')}>
                                <span className={cx('count')}>{data.followers_count}</span>
                                <span className={cx('follower')}>Follower</span>
                                <span className={cx('count')}>{data.likes_count}</span>
                                <span>Thích</span>
                            </div>
                        </div>
                    )
                }
            >
                <Link to={`/@${data.nickname}`} className={cx('wrapper', index > 4 && !isShowAll && 'hide')}>
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
