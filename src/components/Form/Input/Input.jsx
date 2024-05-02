import React from 'react'
import { StyledInput } from './Input.styled'
import { CiSearch } from "react-icons/ci";

export const Input = ({ name, register, placeholder, selected, setSelected}) => {
    return (
    <StyledInput>
    <CiSearch />
    <input
          autoComplete='off'
          {...register(name)}
          placeholder={placeholder}
          value={selected?.value || ''}
          onChange={(e) => {
              setSelected({value: e.target.value})
          }}
      />        
    </StyledInput>
      
  )
}
