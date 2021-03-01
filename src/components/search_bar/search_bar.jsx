import React, { memo } from 'react';
import styles from './search_bar.module.css';

const SearchBar = memo((props) => {
    return(
            <form>
                <div className={styles.search}>
                    <input type="text" placeholder="search.."></input>
                    <i className={`fas fa-search ${styles.icon}`}></i>
                </div>
            </form>
    )});

export default SearchBar;