import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Lister.css'

// function itemLister(ItemComponent, itemProps, match) {
//   return class extends React.Component {
//     componentDidMount() {
//       console.log('lister is mounting');
//     }
//
//     render() {
//       const components = itemProps.map(item => {
//         return (
//           <Link to={`${match.url}/${item.id}`} key={item.id} className="ListItem">
//             <ItemComponent {...item}/>
//           </Link>
//         )
//       })
//
//       return (
//         <div className='Lister'>
//           {components}
//         </div>
//       )
//     }
//   }
// };
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
