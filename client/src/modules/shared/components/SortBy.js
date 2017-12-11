import React from 'react';

const SortBy = ({
  selectedOption,
  handleChange,
  options
}) => {
  return (
    <select
      name='status'
      value={selectedOption}
      onChange={handleChange}
      className='form select wide'
    >
      {options.map(o => (
        <option value={o} key={o}>{o}</option>
      ))}
    </select>
  )
};

SortBy.defaultProps = {
  selectedOption: 'Latest',
  options: ['Latest', 'Alphabetical']
}

export default SortBy;
