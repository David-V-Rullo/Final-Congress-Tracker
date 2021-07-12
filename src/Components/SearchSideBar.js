import React from 'react'

const SearchSideBar = () => {
    return (
        <div class="row justify-content-start">
        <div class="col-md-3 side-bar p-2">
          <h5>Search by content or topic:</h5>
          <input id="input-text" type="text" placeholder="Search" />
          <select class="search-select-topic my-2" id="topic">
            <label for="topic">Choose a Bill Topic:</label> 
            <option>Select a Topic</option>
            <option>Public Lands and Natural Resources</option>
            <option>Science, Technology, Communications</option>
            <option>Economics and Public Finance</option>
          </select>
          <h5>Search by Timeframe:</h5>
          <input
            class="button search-select-button"
            type="button"
            value="Past Week"
            id="time-search"
          />
          <input
            class="button search-select-button"
            type="button"
            value="Past Month"
            id="time-search"
          />
          <input
            class="button search-select-button"
            type="button"
            value="Current Congress"
            id="time-search"
          />
          <button class="search-submit" id="search-submit">Search</button>
        </div>
        </div>
    )
}

export default SearchSideBar
