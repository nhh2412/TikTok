const icons = {
    // social
    apple: require('./social/apple').default,
    fb: require('./social/fb').default,
    google: require('./social/google').default,
    instagram: require('./social/instagram').default,
    KaKaoTalk: require('./social/KaKaoTalk').default,
    LINE: require('./social/LINE').default,
    twitter: require('./social/twitter').default,

    // deco
    arrow: require('./deco/arrow').default,
    loading: require('./deco/loading').default,
    avatarUser: require('./deco/avatarUser').default,

    // button
    closeSearch: require('./button/closeSearch').default,
    closeModal: require('./button/closeModal').default,
    search: require('./button/search').default,
    plus: require('./button/plus').default,
    more: require('./button/more').default,
    arrowLeft: require('./button/arrowLeft').default,
    heart: require('./button/heart').default,
    comment: require('./button/comment').default,
    share: require('./button/share').default,

    // menu
    mailbox: require('./menu/mailbox').default,
    message: require('./menu/message').default,
    language: require('./menu/language').default,
    question: require('./menu/question').default,
    keyboard: require('./menu/keyboard').default,
    user: require('./menu/user').default,
    tiktok: require('./menu/tiktok').default,
    setting: require('./menu/setting').default,
    qr: require('./menu/qr').default,
    signOut: require('./menu/signOut').default,

    // nav
    camera: require('./nav/camera'),
    home: require('./nav/home'),
    userGroup: require('./nav/userGroup'),

    // content
    musicNote: require('./content/musicNote').default,
    hashtag: require('./content/hashtag').default,
    check: require('./content/check').default,
}

export default icons
