function parseHashtag(url: string) {
    return {
        hashtags: url.match(/#\w+/g),
        des: url.replace(/#\S+/g, ''),
    }
}

export default parseHashtag
