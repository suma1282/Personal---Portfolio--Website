
import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

function App(){
return (
<div>

<nav>
<h2>Suma</h2>
<div>
<a>About</a>
<a>Skills</a>
<a>Projects</a>
<a>Contact</a>
</div>
</nav>

<section className="hero">
<div>
<h1>Hi, I'm Bombothu Suma 👋</h1>
<h3>Full Stack Developer</h3>
<p>
Computer Science Student passionate about building modern web applications.
</p>
<button>View Resume</button>
<br /><br />
<button>GitHub</button>
<button>LinkedIn</button>
</div>
</section>


<section>
<h2>About Me</h2>
<p>
I love creating responsive websites using React, Node.js,
and database technologies.
</p>
</section>


<section>
<h2>Skills</h2>

<div className="skills">
<span>HTML</span>
<span>CSS</span>
<span>JavaScript</span>
<span>React</span>
<span>Node.js</span>
<span>MongoDB</span>
<span>MySQL</span>
</div>

</section>


<section>

<h2>Projects</h2>

<div className="cards">

<div className="card">
<h3>Portfolio Website</h3>
<p>React + Node.js professional portfolio.</p>
</div>

<div className="card">
<h3>Student Management System</h3>
<p>Java and MySQL application.</p>
</div>

<div className="card">
<h3>E-Commerce Website</h3>
<p>MERN stack shopping platform.</p>
</div>

</div>

</section>


<section>

<h2>Contact Me</h2>

<input placeholder="Your Email"/>
<textarea placeholder="Message"></textarea>

<button>Send Message</button>

</section>


<footer>
© 2026 Bombothu Suma
</footer>


</div>
)
}


createRoot(document.getElementById('root')).render(<App/>);