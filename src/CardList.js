import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

    const cards = robots.map((robot, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} img={`https://robohash.org/${robots[i].id}`}/>
    })

    return (
        <div>
            {cards}
        </div>
    );
}
export default CardList;


