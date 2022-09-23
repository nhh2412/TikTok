function avatar({ className }) {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect cx="150" cy="150" fill="#888" fillOpacity=".5"></rect>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M58.74 269.054C74.383 234.242 109.361 210 150 210s75.617 24.242 91.26 59.054C215.978 288.463 184.336 300 150 300c-34.336 0-65.978-11.537-91.26-30.946z"
                fill="#fff"
                fillOpacity=".75"
            ></path>
            <circle cx="150" cy="138" r="55" fill="#fff" fillOpacity=".75"></circle>
        </svg>
    )
}

export default avatar
