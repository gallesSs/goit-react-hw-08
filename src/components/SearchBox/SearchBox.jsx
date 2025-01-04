import css from "./SearchBox.module.css";
import {useDispatch, useSelector} from 'react-redux';
import { changeFilter } from "../../redux/filters/slice";
import {useId} from 'react';
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const searchId = useId()
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter)
  return (
    <>
      <div>
        <label className={css.label}>
          Find contacts by name:
          <input
            id={searchId}
            className={css.inputClassName}
            type="text"
            value={value}
            onChange={() => dispatch(changeFilter(event.target.value))
            }
          />
        </label>
      </div>
    </>
  );
};

export default SearchBox;
