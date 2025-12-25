import {Link} from 'react-router-dom'
import styles from '../styles/NavBar.module.css';
import {useState} from 'react';


export default function NavBar({setSearchKey}){
    const [inputSearch, setInputSearch] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        setSearchKey(inputSearch.trim());
    }

    return (
        <>
            <nav className={styles.navBar}>
                <h3>LOBO MOVIES</h3>
                <ul className={styles.navLinks}>
                    <Link className={styles.links} to="/">HOME</Link>
                    <Link className={styles.links} to="/favorites">FAVORITES</Link>
                    <form className={styles.search} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Search movie here...' value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)}/>
                        <button type='submit'>Search</button>
                    </form>
                </ul>
            </nav>
        </>
    );
}