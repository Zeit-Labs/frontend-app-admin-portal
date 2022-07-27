import React from 'react';
import LoadingMessage from '../LoadingMessage';

function TableLoadingOverlay() {
  return (
    <>
      <div className="table-loading-overlay" />
      <div className="table-loading-message d-flex align-items-center justify-content-center ">
        <LoadingMessage className="loading" />
      </div>
    </>
  );
}

export default TableLoadingOverlay;
