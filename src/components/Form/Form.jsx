import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import React, { useMemo } from 'react';

import { filterByCategory, sortByPrice } from 'constants/formConstants';
import { options } from 'helpers/options';
import useSetStateValues from 'hooks/useSetState';

import { getFilteredData } from 'components/redux/products/productsSlice';

import { Input } from './Input/Input';

import { SelectContainer, StyledButton, StyledForm } from './Form.styled';
import './select.css';

export const Form = () => {
  const { register, handleSubmit, setValue, reset } = useForm();
  const dispatch = useDispatch();

  const { selectedSortBy, selectedFilterBy, selectedSearch, setSelectedSortBy, setSelectedFilterBy, setSelectedSearch, clearSelectedValues } = useSetStateValues();

  const sortOptions = useMemo(() => {
    return options(sortByPrice);
  }, []);

  const filterOptions = useMemo(() => {
    return options(filterByCategory);
  }, []);

  const submit = data => {
    dispatch(getFilteredData(data));
    reset();
    clearSelectedValues();
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <Input
          name="searchValue"
          placeholder="Search"
          register={register}
          selected={selectedSearch}
          setSelected={setSelectedSearch}
        />{' '}
        <SelectContainer>
          <div>
            <Select
              id="sortByPrice"
              name="sortByPrice"
              className="react-select-sortByPrice"
              classNamePrefix="react-select"
              options={sortOptions}
              value={selectedSortBy}
              placeholder="Sort by"
              onChange={value => {
                setValue('sortByPrice', value.value);
                setSelectedSortBy(value);
              }}
            />
          </div>
          <div>
            <Select
              id="filterByCategory"
              name="filterByCategory"
              className="react-select-filterByCategory"
              classNamePrefix="react-select"
              options={filterOptions}
              value={selectedFilterBy}
              placeholder="Categories"
              onChange={value => {
                setValue('filterByCategory', value.value);
                setSelectedFilterBy(value);
              }}
            />
          </div>
        </SelectContainer>
        <StyledButton>Search</StyledButton>
      </StyledForm>
    </div>
  );
};
