import { ReactNode, FC } from 'react'
export interface User {
    first_name: string
    last_name: string
    followers_count: number
    likes_count: number
    bio: string
    nickname: string
    avatar: string
    full_name: string
    tick: boolean
    id: number
    popular_video: Video
}

export interface Video {
    id: number
    description: string
    file_url: string
    likes_count: number
    comments_count: number
    shares_count: number
    user: User
    music: string
    thumb_url: string
}

export interface Menu {
    to: string
    title: string
    icon?: ReactNode
    icons?: { solid: FC; regular: FC }
    separate?: Boolean
    class?: string
}
