import Header from '~/layouts/components/Header'

function OnlyHeader({ children }: { children: any }) {
    return (
        <>
            <Header />
            <div style={{ marginTop: 60 }}>
                <div>{children}</div>
            </div>
        </>
    )
}

export default OnlyHeader
