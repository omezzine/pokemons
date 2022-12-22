import { useState } from 'react';
import ReactPaginate from 'react-paginate';

export interface PaginationPropsI {
  offset?: number | string;
  limit?: number | string;
  count?: number | string;
  onChange: (newOffset: string | number) => void;
}

export const Pagination: React.FC<PaginationPropsI> = ({
  offset,
  limit,
  count,
  onChange,
}) => {
  const [itemOffset, setItemOffset] = useState(offset);
  const pageCount = Math.ceil(Number(count) / Number(limit));
  const handlePageClick = (event) => {
    const newOffset = (event.selected * Number(limit)) % Number(count);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    onChange(newOffset);
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
