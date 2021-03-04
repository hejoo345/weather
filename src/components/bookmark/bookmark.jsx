import React, { memo } from 'react';
import BookmarkItem from './bookmark_item';
import styles from './bookmark.module.css';

const Bookmark = memo(({bookmark, onSearch, removeBookmark}) => {
    return(
        <section className={styles.container}>
            <h1 className={styles.title}>Bookmark</h1>
            <div className={styles.items}>
            {
                bookmark.map(item=>(
                    <BookmarkItem 
                    key={item}
                    bookmarkItem={item}
                    onSearch={onSearch}
                    removeBookmark={removeBookmark}/>
                ))
            }
            </div>

        </section>
    )})

export default Bookmark;