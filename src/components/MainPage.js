import React from 'react';
import {Link} from "react-router-dom";
import './MainPage.css';

export function Main()
{
    return(
        <body>
            <div class="cont">
                <div class="welcome">
                    <h2 class="title">Dhanunjay's Portfolio</h2>
                </div>
                <div class="navsection">
                    <nav class="navbar">
                        {/* <span><i class="fa-solid fa-house fa-2x"></i></span> */}
                        <Link to="/">Home</Link>
                        {/* <span><i class="fa-solid fa-user"></i></span> */}
                        <Link to="/about">About</Link>
                        {/* <i class="fa-solid fa-school"></i> */}
                        <Link to="/study">Study</Link> 
                        {/* <i class="fa-solid fa-phone"></i> */}
                        <Link to="/contact">Contact</Link> 
                    </nav>
                </div>
                <div class="content">
                    <div class="C1">
                        <section>Hii My Name is Dhanunjaya Reddy!<p>Welcome to my Portfolio Webiste.</p>
                            <p>This Page is built for learning purpose.</p><p>Any Mistakes are Spot Kindly Ignore.</p>
                            <p>Start exploring about me.</p><a href="" target="">Explore🥳</a>
                        </section>
                    </div>
                </div>
                <div class="footer">
                    <div class="socialMedia">
                        <table>
                            <tr>
                                <td><i class="fa-brands fa-github"></i></td>
                                <td><a href="https://github.com/Dhanunjay-369" target="_blank">GitHib</a></td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td><i class="fa-brands fa-linkedin"></i></td>
                                <td><a href="https://www.linkedin.com/in/dhanunjay-reddy-844342238/" target="_blank">Linkedin</a></td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td><i class="fa-sharp fa-regular fa-envelope"></i></td>
                                <td><a href="mailto:dhanunjayareddykurakula@gmail.com" target="_blank">Mail-id</a></td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td><i class="fa-regular fa-phone"></i></td>
                                <td><a href="#" target="_self">Mobile Number</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </body>
    );
}