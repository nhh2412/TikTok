function MenuItem({ data, onClick }) {
    return data.to ? (
        <li className={data.separate && 'separate'} onClick={onClick}>
            <a href={data.to}>
                {data.icon}
                <p>{data.title}</p>
            </a>
        </li>
    ) : (
        <li className={data.separate && 'separate'} onClick={onClick}>
            {data.icon}
            <p>{data.title}</p>
        </li>
    )
}
export default MenuItem
