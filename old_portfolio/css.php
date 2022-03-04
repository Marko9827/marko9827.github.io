/* stylesheet */

@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');


:root {
    --blure-color: #337ab7;
    --white-color: #fff;
}


#main_skills {
  margin:35px;
}

/* stroke */
nav.stroke ul li a,
nav.fill ul li a {
  position: relative;
}
nav.stroke ul li a:after,
nav.fill ul li a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: '.';
  color: transparent;
  background: #aaa;
  height: 1px;
}
nav.stroke ul li a:hover:after {
  width: 100%;
}

nav.fill ul li a {
  transition: all 2s;
}

nav.fill ul li a:after {
  text-align: left;
  content: '.';
  margin: 0;
  opacity: 0;
}
nav.fill ul li a:hover {
  color: #fff;
  z-index: 1;
}
nav.fill ul li a:hover:after {
  z-index: -10;
  animation: fill 1s forwards;
  -webkit-animation: fill 1s forwards;
  -moz-animation: fill 1s forwards;
  opacity: 1;
}

body {
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
}

main #main_services {
  margin-left:35px;
  margin-right:35px;
  
}

small {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
}

h1 {
  text-align: center;
  padding: 50px 0;
  font-weight: 800;
  margin: 0;
  letter-spacing: -1px;
  color: inherit;
  font-size: 40px;
}

h2 {
  text-align: center;
  font-size: 30px;
  margin: 0;
  font-weight: 300;
  color: inherit;
  padding: 50px;
}

.center {
  text-align: center;
}

 

/* NAVIGATION */
nav {
  width: fit-content;
  margin: 0 auto;
  background: #fff;
  padding: 0;
  /* box-shadow: 0px 5px 0px #dedede; */
}
nav ul {
  list-style: none;
  text-align: center;
}
nav ul li {
  display: inline-block;
}

nav ul li a svg {
  padding-right:15px;
}

nav ul li a {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: var(--blure-color);
  font-weight: normal;
  text-transform: uppercase;
  margin: 0 10px;
}
nav ul li a,
nav ul li a:after,
nav ul li a:before {
  transition: all .5s;
}
nav ul li a:hover {
  color: var(--blure-color);
}



.accordion {
  margin: 1rem 0;
  padding: 0;
  list-style: none;
  border: 1px solid rgba(119, 119, 119, 0.1);
}
.accordion li {
  padding:5px;
}
.accordion li:nth-child(2n+0) {
box-shadow:0 0 4px 0 rgba(0, 0, 0, .2), 0 6px 70px 0 rgba(0, 0, 0, .1);
}

/* Thumb */
.accordion-thumb {
  margin: 0;
  padding: .8rem 0;
  cursor: pointer;
  font-weight: normal;
}
.accordion-thumb::before {
  content: '';
  display: inline-block;
  height: 7px;
  width: 7px;
  margin-right: 1rem;
  margin-left: .5rem;
  vertical-align: middle;
  border-right: 1px solid;
  border-bottom: 1px solid;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  transition: -webkit-transform .2s ease-out;
  transition: transform .2s ease-out;
  transition: transform .2s ease-out, -webkit-transform .2s ease-out;
}

/* Panel */
.accordion-panel {
  margin: 0;
  padding-bottom: .8rem;
  display: none;
}

/* Active */
.accordion-item.is-active .accordion-thumb::before {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}