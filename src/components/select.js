import React from 'react'
import ReactSelect, { components } from 'react-select'
import Arrow from '../images/arrow.svg'

const Select = ({ onChange, value, options, width, isMulti }) => {
  const customStyles = {
    container: (provided, state) => {
      return {
        ...provided,
        display: 'inline-block',
      }
    },
    control: (provided, state) => {
      return {
        ...provided,
        '&::after': {
          content: '""',
          display: 'block',
          marginLeft: '8px',
          width: '96%',
          borderBottom: '1px solid white',
        },
        position: 'relative',
        border: 'none',
        boxShadow: 'none',
        background: 'transparent',
        color: 'white',
        width: state.isMulti ? '100%' : width,
      }
    },
    menu: (provided, state) => ({
      ...provided,
      width: width,
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
    multiValue: (styles, state) => ({
      ...styles,
      backgroundColor: 'transparent',
      display: 'inline',
      lineHeight: '2',
      '&:after': {
        content: '","',
      },
      '&:last-of-type:after': {
        content: '"."',
      },
    }),
    multiValueLabel: (styles, state) => ({
      ...styles,
      backgroundColor: 'transparent',
      color: 'white',
      fontFamily: 'Lato',
      fontSize: '21px',
      display: 'inline',
      padding: '0',
      paddingLeft: '0',
    }),
    multiValueRemove: (styles, state) => ({
      ...styles,
      display: 'none',
    }),
    clearIndicator: (styles, state) => ({
      ...styles,
      display: 'none',
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
      isMulti={isMulti}
      onChange={onChange}
      isSearchable={false}
      components={{ DropdownIndicator }}
      hideSelectedOptions={false}
    />
  )
}

export default Select
