import ReactPaginate from "react-paginate";
import styles from "/src/components/Pagination.module.scss";

const Pagination = ({ pageCount, currentPage, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={"< "}
      nextLabel={" >"}
      breakLabel={"…"}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName={styles.root} // Используйте ваши стили здесь
      subContainerClassName={"pages pagination"}
      forcePage={currentPage}
    />
  );
};

export default Pagination;
