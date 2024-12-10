import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux//filters/selectors";
import { FaSearch } from "react-icons/fa";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const showFilteredContacts = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.inpWrap}>
      <FaSearch className={css.icon} />
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={showFilteredContacts}
      />
    </div>
  );
};

export default SearchBox;
