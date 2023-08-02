import React,{useState,useEffect} from "react";
import ReactPaginate from "react-paginate";
import { IoArrowBackOutline,IoArrowForwardOutline } from "react-icons/io5";
function Paginate({ pageCount, handlePageClick }) {
  return (
    <div>
      <div className="Table_Pagination">
        <div className="mb-0 justify-content-end">
          <ReactPaginate
            nextLabel={"Next"}
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel={"Previous"}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination  mb-0 d-flex flex-row justify-content-end"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
}

export default Paginate;