import React from 'react';

const NewsList = (props)=>{

    const items = props.data.map(item =>{
       return(
           <div key={item.id}>
               <h3>{item.title}</h3>
               <div>{item.feed}</div><br></br>
           </div>
       ) 
    })
    return (
        <div className="news">
          {props.children}
          {items}
        </div>
      )
}

export default NewsList;

