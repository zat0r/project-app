import React from 'react';
import Cards from './Cards';

const CardList = ( {robots} ) => {
    return (
        <div>
        {
            robots.map((user, i) => {
            return <Cards key={i} id={robots[i].id} Name={robots[i].Name} email={robots[i].email}/>
            })
        }
        </div>
    );
}

export default CardList;