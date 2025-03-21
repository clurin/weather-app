import React, { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import useCitySearch from "../../hooks/useCitySearch"

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null)
  const loadOptions = useCitySearch()

  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search