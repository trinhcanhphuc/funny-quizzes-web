module.exports = {
    title: 'Tên blog',
    description: 'Mô tả về blog',
    locales: {
        '/vi': {
        lang: 'vi-VN',
        title: 'Tên blog tiếng việt',
        description: 'Mô tả tiếng việt'
        },
        '/en': {
        lang: 'en-VN',
        title: 'Tên blog tiếng anh',
        description: 'Mô tả tiếng anh'
        }
    },
    themeConfig: {
        sidebar: 'auto',
        nav: [
            { text: 'Trang Chủ', link: '/' },
            { text: 'Giới Thiệu', link: '/about/' },
            { text: 'Ehkoo', link: 'https://ehkoo.com' },
        ],
    },
    dest: 'docs'
}
