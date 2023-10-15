import React from 'react';
import {Link} from "react-router-dom";
import './AboutPage.css';
export function About()
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
            <div class="content">
                <table class="details">
                    <tr>
                        <td>First Name</td>
                        <td>Dhanunjaya</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>Reddy</td>
                    </tr>
                    <tr>
                        <td>Current Study</td>
                        <td>B.Tech</td>
                    </tr>
                    <tr>
                        <td>University</td>
                        <td>Vellore Institute of Technology</td>
                    </tr>
                    <tr>
                        <td>Study Pursuing year</td>
                        <td>3rd Year</td>
                    </tr>
                    <tr>
                        <td>Branch of Study</td>
                        <td>Computer Science and Engineering</td>
                    </tr>
                    <tr>
                        <td>Field Of Interest</td>
                        <td>AI&ML</td>
                    </tr>
                    <tr>
                        <td>Hobbies</td>
                        <td>Learning Books,Playing Cricket,Running,Discussions with Friends</td>
                    </tr>
                </table>
            </div>
        </div>  
    );
}
