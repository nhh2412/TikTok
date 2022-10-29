import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import DefaultLayout from '~/layouts/DefaultLayout'
import ModalLogin from './components/ModalLogin'

import './GlobalStyles.scss'
import { FC, ReactElement } from 'react'

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page: () => ReactElement = route.Component
                        let Layout: FC<{ children: ReactElement; path: string }> = DefaultLayout

                        if (route.layout) {
                            Layout = route.layout
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <>
                                        <Layout path={route.path}>
                                            <Page />
                                        </Layout>
                                        <ModalLogin />
                                    </>
                                }
                            />
                        )
                    })}
                </Routes>
            </Router>
        </div>
    )
}

export default App
