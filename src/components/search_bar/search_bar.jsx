import React, { memo } from 'react';
import styles from './search_bar.module.css';

const SearchBar = memo(({onSearch}) => {
    const searchRef = React.createRef();
    const onSubmit = (e)=>{
        e.preventDefault();
        const searchValue = searchRef.current.value;
        searchValue && onSearch(searchValue);
        searchRef.current.value='';
    }
    return(
            <form>
                <div className={styles.search}>
                    <input ref={searchRef} type="text" placeholder="search.."></input>
                    <button className={styles.icon} onClick={onSubmit}><i className="fas fa-search" ></i></button>
                </div>
            </form>
    )});

export default SearchBar;