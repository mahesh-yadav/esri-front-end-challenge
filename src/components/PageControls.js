import React from 'react';

function PageControls(props) {
  return (
    <div>
      <button disabled={props.currentPage === 1} onClick={props.goToPrevPage}>
        Prev
      </button>
      <button
        disabled={props.currentPage === props.lastPage}
        onClick={props.goToNextPage}
      >
        Next
      </button>
    </div>
  );
}

export default PageControls;
