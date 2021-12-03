import { Link } from 'react-router-dom';

import '../../styles/header.css';

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="link"> Home </Link>
                    </li>
                    <li>
                        <Link to="/about" className="link"> About </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="link"> Dashboard </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
