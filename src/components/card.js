import React from 'react';
import { Card } from 'antd';



const CardPersonaje = ({personaje}) => {
    const { Meta } = Card;


    return (
        <>
            <Card
                hoverable
                style={{ width: 240}}
                cover={<img alt="example" src={personaje.image} />}
            >
                <Meta title={personaje.name}description={`${personaje.status} -- ${personaje.species}`} />
            </Card>
        </>
    )
}


export default CardPersonaje