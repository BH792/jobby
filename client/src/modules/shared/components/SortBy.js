import React from 'react';

const SortBy = ({
  selectedOption,
  handleChange,
  options
}) => {
  return (
    <div>
      <label style={{display: 'inline'}}>
        Sort By:
      </label>
      <select
        style={{display: 'inline'}}
        name='status'
        value={selectedOption}
        onChange={handleChange}
        className='form select normal'
        >
          {options.map(o => (
            <option value={o} key={o}>{o}</option>
          ))}
        </select>
    </div>
  )
};

SortBy.defaultProps = {
  selectedOption: 'Latest',
  options: ['Latest', 'Alphabetical']
}

export default SortBy;
