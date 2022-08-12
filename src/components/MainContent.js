import React from "react";
import './MainContent.css';

export default function MainContent() {
    return (
        <main>
            <h1 className="beginning">Fun facts about React</h1>
            <ul className="last">
                <li>Was released in 2013</li>
                <li>Was originally created by Jordan walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}