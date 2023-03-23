import React from "react";
import { usePagination, DOTS } from "./usePagination";
import "./Pagination.scss";
import configuration from "../../../configuration.json";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    styleVariant,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 1) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={`paginationContainer ${styleVariant} ${configuration?.global?.appearance?.paginationStyle}`}
    >
      <li
        className={`paginationItem ${
          currentPage === 1 ? "disabled" : ""
        }`.trim()}
        onClick={onPrevious}
      >
        {styleVariant !== "Style-3" ? <AiOutlineLeft /> : <span>Prev</span>}
      </li>
      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return (
            <li className={`paginationItem dots`} key={i}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={`paginationItem ${
              pageNumber === currentPage ? "selected" : ""
            }`.trim()}
            onClick={() => onPageChange(pageNumber)}
            key={i}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`paginationItem ${
          currentPage === lastPage ? "disabled" : ""
        }`.trim()}
        onClick={onNext}
      >
        {styleVariant !== "Style-3" ? <AiOutlineRight /> : <span>Next</span>}
      </li>
    </ul>
  );
};

export default Pagination;
