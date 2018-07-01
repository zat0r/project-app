import React from 'react';

const Card = ({Name, email, id}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
            <h2>{Name}</h2>
            <p>{email}</p>
            </div>
            </div>

    );
}

export default Card;