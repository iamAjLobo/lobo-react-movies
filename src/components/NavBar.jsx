import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';
import { useState } from 'react';

export default function NavBar({ setSearchKey }) {
    const [inputSearch, setInputSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSearchKey(inputSearch.trim());
        setMenuOpen(false); // close menu after search
    }

    return (
        <nav className={styles.navBar}>
            <h3>LOBO MOVIES</h3>

            {/* Hamburger */}
            <div 
                className={styles.hamburger} 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>

            <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
                <Link className={styles.links} to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
                <Link className={styles.links} to="/favorites" onClick={() => setMenuOpen(false)}>FAVORITES</Link>

                <form className={styles.search} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search movie here..."
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </ul>
        </nav>
    );
}