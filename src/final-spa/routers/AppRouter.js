import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import { Header } from '../components/ui/Header';
import { Home } from '../components/screens/Home';
import { About } from '../components/screens/About';
import { Dashboard } from '../components/screens/Dashboard';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/dashboard" element={ <Dashboard /> } />
            </Routes>
        </BrowserRouter>
    );
};

