import React from 'react';
import styles from '../styles/PageControls.module.css'

function PageControls(props) {
  return (
    <div className={styles['page-controls']}>
      <button className={styles['btn']} disabled={props.currentPage === 1} onClick={props.goToPrevPage}>
        <i className="fas fa-angle-double-left"></i>{' '}
        Prev
      </button>
      <button className={styles['btn']}
        disabled={props.currentPage === props.lastPage}
        onClick={props.goToNextPage}
      >
        Next
        {' '}<i className="fas fa-angle-double-right"></i>
      </button>
    </div>
  );
}

export default PageControls;
