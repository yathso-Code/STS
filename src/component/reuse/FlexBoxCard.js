import React from 'react'
import './FlexBoxCard.css'

const FlexBoxCard = () => {

    let courses = [
        {
            name: 'Front-End Developer',
            sub: 'HTML5 + CSS + JS Advanced + Bootstrap5 + React-Js + Next-Js + Git/Github',
            img: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&uid=R120958505&ga=GA1.1.543567340.1680985813&semt=ais'
        },
        {
            name: 'Back-end Developer',
            sub: 'SQL + MySQL + MongoDB + Node-Js + Express-Js + Git/Github',
            img: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&uid=R120958505&ga=GA1.1.543567340.1680985813&semt=ais'
        },
        {
            name: 'Full-Stack Developer',
            sub: 'HTML5 + CSS + JS-Advanced ES6 + Bootstrap5 + React-Js + Next-Js + Git/Github + SQL + MySQL + MongoDB + Node-Js + Express-Js',
            img: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&uid=R120958505&ga=GA1.1.543567340.1680985813&semt=ais'
        },
        {
            name: 'PHP Developer',
            sub: 'HTML5 + CSS + JS-Advanced ES6 + Bootstrap5 + React-Js + Next-Js + Git + Github',
            img: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&uid=R120958505&ga=GA1.1.543567340.1680985813&semt=ais'
        },
        {
            name: 'Database Management',
            sub: 'SQL, MySQL, MongoDB',
            img: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&uid=R120958505&ga=GA1.1.543567340.1680985813&semt=ais'
        },
        {
            name: 'Programming Languages',
            sub: 'Java + Python + C/C++',
            img: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&uid=R120958505&ga=GA1.1.543567340.1680985813&semt=ais'
        },
    ];

    return (
        <>
            <div className="flex-box-card">
                {
                    courses.map((item) => (
                        <div class="card">
                            <div class="image">
                                <img src={item.img} alt="" />
                            </div>
                            <div class="card-content">
                                <h1 class="card-title">{item.name}</h1>
                                <p class="card-text">{item.sub}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default FlexBoxCard
