import React from 'react'
import ReactSelect, { components } from 'react-select'
import Arrow from '../images/arrow.svg'

const Select = ({ onChange, value, options }) => {
  console.log("Got here")
  const customStyles = {
    control: (provided, state) => {
      return {
        ...provided,
        '&::after': {
          content: '""',
          position: 'absolute',
          display: 'block',
          marginLeft: '8px',
          width: '96%',
          paddingTop: '32px',
          borderBottom: '1px solid white',
        },
        position: 'relative',
        border: 'none',
        boxShadow: 'none',
        background: 'transparent',
        color: 'white',
        width: 200,
      }
    },
    menu: (provided, state) => ({
      ...provided,
      width: 200,
      marginLeft: '8px',
      fontFamily: 'Lato',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: 'white',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: 'white',
      fontFamily: 'Lato',
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
    }),
  }

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <Arrow />
      </components.DropdownIndicator>
    )
  }

  return (
    <ReactSelect
      styles={customStyles}
      value={value}
      options={options}
      onChange={onChange}
      isSearchable={false}
      components={{ DropdownIndicator }}
    />
  )
}

export default Select
