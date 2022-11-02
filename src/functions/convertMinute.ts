function convertMinute(second: number) {
    return (
        String(Math.floor(second / 60)).padStart(2, '0') +
        ':' +
        String(Math.floor(second - Math.floor(second / 60))).padStart(2, '0')
    )
}

export default convertMinute
