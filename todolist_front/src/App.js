import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';
import Join from './pages/Join/Join';
import { Global } from '@emotion/react';
import { reset } from './styles/common';
import DandP from './pages/DandP/DandP';
import MainLayout from './components/MainLayout/MainLayout';

function App() {
    return (
        <>  
            <Global styles={reset}/>
            <MainLayout >
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/login' element={<></>} />
                    <Route path='/join' element={<Join />} />
                    <Route path='/dp' element={<DandP />} />
                    {/* 우선 순위 가장 낮음 */}
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </MainLayout>
        </>
    );
}

export default App;
