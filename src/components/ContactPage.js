import React from 'react';
import {Link} from 'react-router-dom';
import './ContactPage.css';
export function Contact()
{
    return(
        <div>
            <div class="welcome">
                    <h2 class="title">Dhanunjay's Portfolio</h2>
                </div>
                <div class="navsection">
                    <nav class="navbar">
                        {/* <span><i class="fa-solid fa-house fa-2x"></i></span> */}
                        <Link to="/">Home</Link>
                        {/* <span><i class="fa-solid fa-user"></i></span> */}
                        <Link to="/about">About</Link>
                        <Link to="/study">Study</Link> 
                        {/* <i class="fa-solid fa-phone"></i> */}
                        <Link to="/contact">Contact</Link> 
                    </nav>
                </div>
            <div class="info">
                <div class="tab">
                    <table>
                        <tr>
                            <th>Contact</th>
                            <th>Link</th>
                        </tr>
                        <tr>
                            <td>Mobile Number</td>
                            <td>6#########</td>
                        </tr>
                        <tr>
                            <td>Mail-id</td>
                            <td><a href="mailto:dhanujayareddykurakula@gmail" target="_blank">dhanujayareddykurakula@gmail</a></td>
                        </tr>
                        <tr>
                            <td>Github</td>
                            <td><a href="https://github.com/Dhanunjay-369" target="_blank">Dhanunjay-369</a></td>
                        </tr>
                        <tr>
                            <td>Linkedin</td>
                            <td><a href="https://www.linkedin.com/in/dhanunjay-reddy-844342238/" target="_blank">Dhanunjaya Reddy</a></td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td><a href="https://www.google.co.in/maps/place/Nandyala,+Andhra+Pradesh/" target="_blank">Nandyal</a></td>
                        </tr>
                        <tr>
                            <td>College</td>
                            <td><a href="https://chennai.vit.ac.in" target="_blank">VIT Chennai</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}