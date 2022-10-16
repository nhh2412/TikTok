import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import DefaultLayout from '~/layouts'
import { Fragment, useState } from 'react'
import ModalLogin from './components/ModalLogin'

import './GlobalStyles.scss'

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component
                        let Layout: any = DefaultLayout
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
