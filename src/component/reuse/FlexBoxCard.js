import React from 'react'
import './FlexBoxCard.css'

const FlexBoxCard = ( ) => {

    let courses = [
        {
            name: 'Front-End Developer',
            sub: 'HTML5 + CSS + JS Advanced + Bootstrap5 + React-Js + Next-Js + Git/Github',
            img: 'https://t3.ftcdn.net/jpg/02/92/88/72/360_F_292887204_2wH041phSQo70eqaE9GRqFvn5MmQ4B8w.jpg'
        },
        {
            name: 'Back-end Developer',
            sub: 'SQL + MySQL + MongoDB + Node-Js + Express-Js + Git/Github',
            img: 'https://t3.ftcdn.net/jpg/02/92/88/72/360_F_292887204_2wH041phSQo70eqaE9GRqFvn5MmQ4B8w.jpg'
        },
        {
            name: 'Full-Stack Developer',
            sub: 'HTML5 + CSS + JS-Advanced ES6 + Bootstrap5 + React-Js + Next-Js + Git/Github + SQL + MySQL + MongoDB + Node-Js + Express-Js',
            img: 'https://t3.ftcdn.net/jpg/02/92/88/72/360_F_292887204_2wH041phSQo70eqaE9GRqFvn5MmQ4B8w.jpg'
        },
        {
            name: 'PHP Developer',
            sub: 'HTML5 + CSS + JS-Advanced ES6 + Bootstrap5 + React-Js + Next-Js + Git + Github',
            img: 'https://t3.ftcdn.net/jpg/02/92/88/72/360_F_292887204_2wH041phSQo70eqaE9GRqFvn5MmQ4B8w.jpg'
        },
        {
            name: 'Database Management',
            sub: 'SQL, MySQL, MongoDB',
            img: 'https://t3.ftcdn.net/jpg/02/92/88/72/360_F_292887204_2wH041phSQo70eqaE9GRqFvn5MmQ4B8w.jpg'
        },
        {
            name: 'Programming Languages',
            sub: 'C/C++ + Python + Java',
            img: 'https://t3.ftcdn.net/jpg/02/92/88/72/360_F_292887204_2wH041phSQo70eqaE9GRqFvn5MmQ4B8w.jpg'
        },
    ];

    return (
        <>
            <div className="flex-box-card">
                {
                    courses.map((item) => (
                        <div class="card">
                            <img src={item.img} alt="" />
                            <div class="card__content">
                                <p class="card__title">{item.name}</p>
                                <p class="card__description">{item.sub}</p>
                            </div>
                        </div>
                    ))
                }



            </div>
        </>
    )
}

export default FlexBoxCard
