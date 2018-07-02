import React from 'react';

const Card = ({Name, email, id}) => {
    return (
        <div className='grow Cardlook'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
            <h2>{Name}</h2>
            <p>{email}</p>
            </div>
            </div>

    );
}

export default Card;