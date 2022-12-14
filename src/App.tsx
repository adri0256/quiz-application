import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InfinitySpin } from 'react-loader-spinner';

const LazyHome = React.lazy(() => import('./pages/Home'));
const LazyRoom = React.lazy(() => import('./pages/Room'));

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={
            <React.Suspense fallback={
              <div className="loading">
                <InfinitySpin width='200' color="#233642"/>
              </div>}>
              <LazyHome />
            </React.Suspense>
          }></Route>
          <Route path='Room' element={
            <React.Suspense fallback={
              <div className="loading">
                <InfinitySpin width='200' color="#233642"/>
              </div>}>
              <LazyRoom />
            </React.Suspense>
          }></Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
