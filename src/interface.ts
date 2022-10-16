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
}

export interface DataVideo {
    id: number
    description: string
    file_url: string
    likes_count: number
    comments_count: number
    shares_count: number
    user: User
}
