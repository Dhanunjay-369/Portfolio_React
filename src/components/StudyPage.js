import React from 'react';
import {Link} from 'react-router-dom';
import './StudyPage.css';
export function Study()
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
            <div class="box">
                <div class="school">
                    <section>
                       <title>Sri Chaitanya Techno School</title>
                       I studied my 9th and 10th Classes in Sri Chaitanya Techno School which is known for its popularity
                       in making students ready for IIT-JEE from the lower classes itself.Learnt much about competence
                       among the students.Always wants the students to work on their respective study as there should be no waste of time.
                    </section>
                </div>
                <div class="inter">
                    <section>
                       <title>Akansha Junior College</title>
                       Completed my Intermediate firts and second year at "SDR's Akanksha".Learnt how easy is the path
                       where lecturer pushes everyone to learn more and the harworking peers making others to work more.
                       Learnt many lessons,spent wonderful time in the grounds.Met many different people,knew at what level 
                       I am.Made friendships stronger,built trust-worthy lecturer-student relations. 
                    </section>
                </div>
                <div class="Btech">
                    <section>
                       <title>Vellore Institute of Technology</title>
                       Currently studying Btech in Computer Science and Technology at VIT,Chennai.I definitely feel it was not a smooth path for me.
                       Tried mahy possibilities,touched many domains,learnt new habits,met modern people with practical brains.Overall travelling a ROller
                       Coaster Ride.Lets see what VIT holds for my future. 
                    </section>
                </div>
            </div>
        </div>
    );
}