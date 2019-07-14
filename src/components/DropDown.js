import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  width: 200px;
  position: relative;
  & select {
    display: none;
  }
`

const SelectedItem = styled.div`
  background-color: DodgerBlue;
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;

  &:after {
    position: absolute;
    content: '';
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
  }

  &.select-arrow-active:after {
    border-color: transparent transparent #fff transparent;
    top: 7px;
  }
`

const Option = styled.div`
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;

  &.same-as-selected,
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const OptionList = styled.div`
  position: absolute;
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;

  &.select-hide {
    display: none;
  }
`

class DropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSelected: false,
      selectedOption: this.props.options[0],
    }
  }
  handleSelectChange() {
    this.setState({})
  }
  render() {
    const { options } = this.props

    const optionsToRender = options.map(option => {
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      )
    })

    return (
      <Container>
        <select value={this.state.selectedOption.value}>
          {optionsToRender}
        </select>
        <SelectedItem
          className={this.state.isSelected ? 'select-arrow-active' : ''}
          onClick={() => this.setState({ isSelected: !this.state.isSelected })}
        >
          {this.state.selectedOption.label}
        </SelectedItem>
        <OptionList className={this.state.isSelected ? '' : 'select-hide'}>
          {options.map(option => {
            return (
              <Option
                className={
                  option.value === this.state.selectedOption.value
                    ? 'same-as-selected'
                    : ''
                }
                key={option.label}
                onClick={() =>
                  this.setState({ selectedOption: option, isSelected: false })
                }
              >
                {option.label}
              </Option>
            )
          })}
        </OptionList>
      </Container>
    )
  }
}

DropDown.propTypes = {
  options: PropTypes.array,
}

export default DropDown
