import React from 'react'
import ReactSelect, { components } from 'react-select'
import Arrow from '../images/arrow.svg'
import styled from 'styled-components'

const Select = ({ onChange, value, options, width, isMulti, mobileWidth }) => {
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
        border: '1px solid #CFCFCF',
        borderRadius: '20px',
        boxShadow: 'none',
        background: 'transparent',
        color: '#2D2D2D',
        width: width,
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
      color: '#498C92',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#2D2D2D',
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
      color: '#2D2D2D',
      fontFamily: 'Lato',
      display: 'inline',
      padding: '0',
      paddingLeft: '0',
      fontSize: 'inherit',
    }),
    multiValueRemove: (styles, state) => ({
      ...styles,
      display: 'none',
    }),
    clearIndicator: (styles, state) => ({
      ...styles,
      display: 'none',
    }),
    placeholder: (styles, state) => ({
      ...styles,
      color: 'white',
      fontFamily: 'Lato',
    }),
  }

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <Arrow />
      </components.DropdownIndicator>
    )
  }

  const Select = styled(ReactSelect)`
    & .react-select__control {
      min-width: ${props => (props.isMulti ? '150px' : 0)};
    }

    @media only screen and (max-width: 600px) {
      & .react-select__control,
      .react-select__menu {
        width: ${props =>
          props.mobileWidth ? props.mobileWidth : props.width};
      }
    }
  `

  return (
    <Select
      classNamePrefix="react-select"
      placeholder="Selecteer..."
      styles={customStyles}
      width={width}
      mobileWidth={mobileWidth}
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
