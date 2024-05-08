import React from 'react';
import Card from './Card';

const randomData = [
    {
        title: "Card title", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aperiam dolor. Nam laborum tempora sint reiciendis aut voluptatibus sunt, sit doloribus maiores excepturi consequatur eum mollitia possimus officia? Est, odit",
        bottom: "Find out more!"
    },
    {
        title: "Card title", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aperiam dolor. Nam laborum tempora sint reiciendis aut voluptatibus sunt, sit doloribus maiores excepturi consequatur eum mollitia possimus officia? Est, odit",
        bottom: "Find out more!"
    },
    {
        title: "card title", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aperiam dolor. Nam laborum tempora sint reiciendis aut voluptatibus sunt, sit doloribus maiores excepturi consequatur eum mollitia possimus officia? Est, odit",
        bottom: "Find out more!"
    },
    {
        title: "Card title", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aperiam dolor. Nam laborum tempora sint reiciendis aut voluptatibus sunt, sit doloribus maiores excepturi consequatur eum mollitia possimus officia? Est, odit",
        bottom: "Find out more!"
    },
]

const Deck = () => {
    return (
        <>
            <div style={{display: 'flex', gap: 10, padding: "0 2rem"}}> {
                    randomData.map((item, key) => <Card title={item.title} text={item.text} bottom={item.bottom}/>) 
                }
            </div>
        </> 
    );
} 

export default Deck;