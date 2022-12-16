import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import { InfinitySpin } from 'react-loader-spinner';

const LazyLoginPage = React.lazy(() => import('./pages/Login'));
const LazyHomePage = React.lazy(() => import('./pages/Home'));
const LazyRoomPage = React.lazy(() => import('./pages/Room'));

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <React.Suspense fallback={
              <div className="loading">
                <InfinitySpin width='200' color="#233642"/>
              </div>}>
              <LazyLoginPage />
            </React.Suspense>
          }></Route>
          <Route path='/Home' element={
            <React.Suspense fallback={
              <div className="loading">
                <InfinitySpin width='200' color="#233642"/>
              </div>}>
              <LazyHomePage />
            </React.Suspense>
          }></Route>
          <Route path='/Room' element={
            <React.Suspense fallback={
              <div className="loading">
                <InfinitySpin width='200' color="#233642"/>
              </div>}>
              <LazyRoomPage />
            </React.Suspense>
          }></Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
