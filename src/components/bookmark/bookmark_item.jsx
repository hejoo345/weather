import React, { memo, useState } from 'react';
import styles from './bookmark_item.module.css';

const BookmarkItem = memo(({bookmarkItem, onSearch, removeBookmark}) => {
    const [isShown, setIsShown] = useState(false);
    const bookmarkClick =(e)=>{
        e.preventDefault();
        onSearch(e.target.value);
    }
    const removeBookmarkHandle=(e)=>{
        const city = e.currentTarget.dataset.name;
        removeBookmark(city);
    }
    const mouseEnter=()=>{
        setIsShown(true);
    }
    const mouseLeave=()=>{
        setIsShown(false);
    }

    return(
        <div>
            <button className={styles.container} 
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={bookmarkClick} value={bookmarkItem}> 
                {bookmarkItem}
            </button>
            {isShown&& (
            <div className={styles.removeIcon}
            data-name={bookmarkItem}
            onMouseEnter={mouseEnter}
             onClick={removeBookmarkHandle}>
                <span><i className="fas fa-minus"></i></span>
            </div>
            )}
        </div>
    )})

export default BookmarkItem;