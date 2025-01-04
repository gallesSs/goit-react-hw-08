import css from "./SearchBox.module.css";
import {useDispatch} from 'react-redux';
import {changeFilter} from '../../redux/filtersSlice.js';

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <label className={css.label}>
          Find contacts by name:
          <input
            className={css.inputClassName}
            type="text"
            onChange={() => dispatch(changeFilter(event.target.value))
            }
          />
        </label>
      </div>
    </>
  );
};

export default SearchBox;
