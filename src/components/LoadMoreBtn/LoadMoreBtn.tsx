import css from "./LoadMoreBtn.module.css";


type LoadMoreBtnProps = {
  onLoadMore: () => void;
}
const LoadMoreBtn = ({ onLoadMore }: LoadMoreBtnProps) => {
  const handleClick = () => {
    onLoadMore();
  };

  return (
    <button className={css.loadMoreBtn} onClick={handleClick} type="button">
      Load more
    </button>
  );
};

export default LoadMoreBtn;
