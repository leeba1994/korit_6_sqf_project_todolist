import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';
import Join from './pages/Join/Join';
import { Global } from '@emotion/react';
import { reset } from './styles/common';

function App() {
    return (
        <>  
            <Global styles={reset}/>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/login' element={<></>} />
                <Route path='/join' element={<Join />} />
                {/* 우선 순위 가장 낮음 */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
