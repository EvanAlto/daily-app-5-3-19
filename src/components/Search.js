import React, { Component } from 'react'

class Search extends Component {

  state = {
    searchValue: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ searchValue: '' })
  }

  handleChange = event => {
    this.setState({ searchValue: event.target.value })
  }

  render() {
    const { searchValue } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <button>Search</button>
        <input value={searchValue} onChange={this.handleChange}/>
      </form>
    )
  }
}

export default Search

