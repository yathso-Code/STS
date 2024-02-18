import React from "react"
import './SinglePage.css'
import htmlImage from '../img/html.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChalkboard, faCheck, faLanguage, faLaptopCode, faTrophy, faWifi } from '@fortawesome/free-solid-svg-icons';


const SinglePage = () => {


    return (
        <>

            {/*======= Hero-Banner-Starts =======*/}

            <div className="Hero">
                <div className="overlay" ><img src={htmlImage} alt='' /></div>
                <div className="text" >
                    <h6>Development <FontAwesomeIcon className="i" icon={faAngleRight} /> Programming Languages <FontAwesomeIcon className="i" icon={faAngleRight} /> JavaScript</h6>
                    <h2>The Complete Javascript Bootcamp From Zero to Hero in Javascript</h2>
                    <h5>Learn JavaScript like a Professional Start from the basics and go all the way to creating your own applications and games</h5>
                    <h6><FontAwesomeIcon className="i" icon={faLanguage} />Language - English, Hindi</h6>
                </div>

            </div>

            {/*======== Hero-Banner-Ends ========*/}


            {/*======= Topics-Starts =======*/}

            <div className="topicsParent" >
                <h2>What you will learn</h2>
                <div className="topics" >

                    {/*======= Two-Boxes =======*/}

                    <div className="Box">
                        <p>
                            <FontAwesomeIcon icon={faCheck} />
                            <span>Build 10 Web Development projects for your portfolio,ready to apply for junior web developer jobs.</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCheck} />
                            <span>After the course you will be able to build any website you want.</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCheck} />
                            <span>Work as a freelance web developer.</span>
                        </p>
                    </div>

                    <div className="Box">
                        <p>
                            <FontAwesomeIcon icon={faCheck} />
                            <span>Learn the latest technologies, including Javascript, React Js and Web3
                                development.</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCheck} />
                            <span>Build fully fledged website for your startups or business.</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCheck} />
                            <span>Master frontend development with React Js.</span>
                        </p>
                    </div>

                </div>
            </div>

            {/*======== Topics-Ends ========*/}


            {/*=========  Course - Includes =========*/}

            <div class="IncludeParent">
                <div class="Include">
                    <h2>This course includes</h2>
                    <p><FontAwesomeIcon icon={faChalkboard} />10 hours on-demand classes</p>
                    <p><FontAwesomeIcon icon={faWifi} />Access on free internet</p>
                    <p><FontAwesomeIcon icon={faLaptopCode} />20 coding practicals</p>
                    <p><FontAwesomeIcon icon={faTrophy} />Certificate of completion</p>
                </div>
            </div>

            {/*=========  Course - Includes =========*/}


            <div class="DescParent">
                <div class="Description">
                    <h2>Description</h2>
                    <h4>Welcome to the Complete Web Development Bootcamp, the only course you need to learn code
        and become a full stack web developer. Throught the course we cover follwing tools and technologies:</h4>
                    <p><FontAwesomeIcon className="i" icon={faCheck} />HTML-5</p>
                    <p><FontAwesomeIcon className="i" icon={faCheck} />CSS-3</p>
                    <p><FontAwesomeIcon className="i" icon={faCheck} />JS-Advanced</p>
                    <p><FontAwesomeIcon className="i" icon={faCheck} />React-Js</p>
                    <p><FontAwesomeIcon className="i" icon={faCheck} />Git</p>
                    <p><FontAwesomeIcon className="i" icon={faCheck} />GitHub</p>
                </div>
            </div>

        </>
    )
}

export default SinglePage
