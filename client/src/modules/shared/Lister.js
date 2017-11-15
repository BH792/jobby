import React from 'react'
import { Link } from 'react-router-dom'


function itemLister(ItemComponent, itemProps, match) {
  return () => {
    const components = itemProps.map(item => {
      return (
        <Link to={`${match.url}/${item.id}`} key={item.id} className="ListItem">
          <ItemComponent {...item}/>
        </Link>
      )
    })

    return (
      <div className='Lister'>
        {components}
      </div>
    )
  }
};

export default itemLister;
