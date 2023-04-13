import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
    const dispatch = useDispatch();

    const onChange = e => {
        const value = e.target.value.toLowerCase();
        dispatch(setFilter(value));
  };

    return (
        <label className={css.filter_label}> Find contacts by name
            <input
                className={css.filter_input}
                type='text'
                onChange={onChange} />
        </label>
    )
}

export default Filter;