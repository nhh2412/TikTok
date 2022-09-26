import { useEffect } from 'react'

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return <h2>Home Page</h2>
}

export default Home
