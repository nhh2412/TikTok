import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import DefaultLayout from '~/layouts/DefaultLayout'
// import { Fragment } from 'react'
import ModalLogin from './components/ModalLogin'

import './GlobalStyles.scss'
import { ExoticComponent, FC, Fragment, ReactElement } from 'react'

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page: () => ReactElement = route.Component
                        let Layout: FC<{ children: ReactElement }> | ExoticComponent<{ children: ReactElement }> =
                            DefaultLayout

                        if (route.layout === null) {
                            Layout = Fragment
                        } else if (route.layout) {
                            Layout = route.layout
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <>
                                        <Layout>
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
