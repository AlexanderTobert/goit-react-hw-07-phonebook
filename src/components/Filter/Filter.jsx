import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice'; 

const Filter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(store => store.filter);

  const handleChangeFilter = e => {
    const value = e.target.value;
    const action = setFilter(value);
    dispatch(action);
  };

  return (
    <div>
      <input
        value={filter}
        onChange={handleChangeFilter}
        type="text"
        name="filter"
        placeholder="Search..."
      />
    </div>
  );
};

export default Filter;