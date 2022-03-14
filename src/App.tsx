import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Auth from './components/auth/auth';
import Header from './components/header/header';
import PageNotFound from './components/page-not-found/page-not-found';
import PrivateRoute from './components/private-route/private-route';
import Profile from './components/profile/profile';
import {AppRoute} from './consts';
import GlobalStyles from './styles/global'

function App(): JSX.Element {
    return (
        <>
            <GlobalStyles />
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path={AppRoute.SignIn} element={<Auth/>}/>
                    <Route path={AppRoute.Profile} element={
                        <PrivateRoute>
                            <Profile/>
                        </PrivateRoute>
                    }/>
                    <Route path={'*'} element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
