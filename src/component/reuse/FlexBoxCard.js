import React from 'react'
import './FlexBoxCard.css'

const FlexBoxCard = ({num}) => {

    let courses = [
        {
            id: 1,
            name: 'Front-End Developer',
            sub: 'HTML5 + CSS + JS Advanced + Bootstrap5 + React-Js + Next-Js + Git/Github',
            img: 'https://img.freepik.com/free-vector/woman-working-new-app_23-2148682102.jpg?size=626&ext=jpg&ga=GA1.1.1843226523.1702881965&semt=ais'
        },
        {
            id: 2,
            name: 'Back-end Developer',
            sub: 'SQL + MySQL + MongoDB + Node-Js + Express-Js + Git/Github',
            img: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&uid=R120958505&ga=GA1.1.543567340.1680985813&semt=ais'
        },
        {
            id:3,
            name: 'Full-Stack Developer',
            sub: 'HTML5 + CSS + JS-Advanced ES6 + Bootstrap5 + React-Js + Next-Js + Git/Github + SQL + MySQL + MongoDB + Node-Js + Express-Js',
            img: 'https://img.freepik.com/premium-vector/cartoon-3d-character-developer-designer-working-laptop-web-app-development_808510-1403.jpg?size=626&ext=jpg&ga=GA1.1.1843226523.1702881965&semt=ais'
        },
        {
            id: 4,
            name: 'PHP Developer',
            sub: 'HTML5 + CSS + JS-Advanced ES6 + Bootstrap5 + React-Js + Next-Js + Git + Github',
            img: 'https://images.unsplash.com/photo-1535551951406-a19828b0a76b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhwJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww'
        },
        {
            id: 5,
            name: 'Database Management',
            sub: 'SQL, MySQL, MongoDB',
            img: 'https://img.freepik.com/free-vector/server-room-isometric-icon-database-connection-transfer-data-remote-cloud-storage-server-rack_39422-842.jpg?size=626&ext=jpg&ga=GA1.1.1843226523.1702881965&semt=sph'
        },
        {
            id: 6,
            name: 'Programming Languages',
            sub: 'Java + Python + C/C++',
            img: 'https://img.freepik.com/free-vector/app-development-concept-with-programming-languages_23-2148688949.jpg?size=626&ext=jpg&ga=GA1.1.1843226523.1702881965&semt=ais'
        },
    ];

    return (
        <>
            <div className="flex-box-card">
                {
                    courses.slice(0, num).map((item) => (
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
