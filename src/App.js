import logo from './logo.svg';
import './App.css';


//------------------------------- render
function Contact(){
    return(
        <div id="contact" class="content-section">
            <h2 class="section-heading">CONTACT</h2>
            <p class="section-subheading">Let's make friend!</p>


            <div class="row contact-content">
                <div class="column col-sm-3 contact-info">
                    <div style={{"display": "flex"}}> 
                        <i class="ti-location-pin"><a href='https://github.com/VanDinhLe'><i class="fab fa-github"></i></a></i>
                        <p>Github</p>
                    </div>
                    <div style={{"display": "flex"}}>
                        <i class="ti-mobile"><a href='mailto:vle16@usf.edu'><i class="fas fa-envelope"></i></a></i>
                        <p>vle16@usf.edu</p>
                    </div >
                    <div style={{"display": "flex"}}>
                        <i class="ti-email"><a href='#a'><i class="fas fa-map-marker-alt"></i></a></i>
                        <p>Tampa, FL</p>
                    </div>
                </div>


                <div class="column col-sm contact-form">
                    <form action="">
                        <div class="row">
                            <div class="column col-sm">
                                <input type="text" name="" placeholder="Name" required id="" class="form-control"/>
                            </div>


                            <div class="column col-sm">
                                <input type="email" name="" placeholder="Email" required id="" class="form-control"/>
                            </div>


                        </div>
                        <div class="row margin-top-8">
                            <div class="column column-full">
                                <input type="text" name="" placeholder="Message" required id="" class="form-control" style={{"margin-top":"8px"}}/>
                            </div>
                        </div>


                        <button class="btn" type="submit">SEND</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

// Background test
function WavingText()
{
    return(
        <div class="container">
            <div class="">
                <div class="text-center">
                    <h3 class="animate-charcter"> Whoever is happy will make others happy too. <br></br> -Anne Frank</h3>
                </div>
            </div>
        </div>
    )
}


// --------------- Modal image 
function ModalImage(){
    return(
        <section>
            {/* <!-- Trigger the Modal --> */}
            {/* <img id="myImg" src="./images/img_snow.jpg" alt="Snow" style={{"width":"100%", "max-width":"300px"}}/> */}

            {/* <!-- The Modal --> */}
            <div id="myModal" class="modal" style={{display:"none"}}>

                {/* <!-- The Close Button --> */}
                <span class="close">&times;</span>

                {/* <!-- Modal Content (The Image) --> */}
                <img class="modal-content" id="img01"/>

                {/* <!-- Modal Caption (Image Text) --> */}
                <div id="caption"></div>
            </div>
        </section>
    )
}

// phai viet hoa chu dau
// NAvbar
function Navbar() {
    return (
        <header>
            <a href="#" class="logo">
                <img src={require("./images/lotus.png")} alt="Logo" width="34" height="28" style={{ marginRight: 6 }} class="d-inline-block align-text-top" />
                Din Le
            </a>
            <div class="toggle" ></div>
            <ul class="menu">
                <li><a href="#home" >Home</a></li>
                <li><a href="#about" >About</a></li>
                <li class="dropdown">
                    <a class="dropdown-toggle" href="#projects" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Projects
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item $dropdown-link-hover-bg: $black" href="#kubot" style={{margin: 0}}>KUBOT</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#activites" style={{margin: 0}}>Activites</a></li>
                        {/* <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#" style={{margin: 0}}>Something else here</a></li> */}
                    </ul>
                </li>
                <li><a href="#contact" >Contact</a></li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn" type="submit">Search</button>
            </form>
        </header>
    )
}

function Intro() {
    return (
        //Creating Banner Layout in HTML
        <section class="banner" id="home">
            <div class="textBx">
                <h2>Welcome to my personal website<br /> <span>Van Dinh Le</span></h2>
                <h3></h3>
            </div>
        </section>

    )
}

function About() {
    return (
        // About Me
        <section class="about" id="about">
            <div id="cf">
                <img class="bottom" src={require("./images/hcm.jpg")} />
                <img class="top" src={require("./images/usf.jpg")} />
            </div>
            <div class="title">
                <h2 class="fw-bold">About Me</h2>
                <br/>
                <p>Who am I</p>
            </div>
            <div class="desc">
                <div>
                    <h4>My name is Van Dinh.</h4>
                    <p>I am from Viet Nam <i class="fa fa-star" aria-hidden="true"></i> and currently on my way getting my first BS degree in Computer SCience at University of Florida.</p><br />
                    <i class="fas fa-terminal fa-lg"></i> <i class="fab fa-python fa-lg"></i> <i class="fab fa-js-square fa-lg"></i> <i class="fab fa-css3-alt fa-lg"></i> <i class="fab fa-android fa-lg"></i>
                    <p>I love coding and I am most proficient in C++ and python. Currently I am studying HTML/JSS/CSS to build some cool projects such as this one.</p>

                    <p>My goal is to have an intership in tech field and get the chance to create helpful software for everyone.</p>
                    <br></br>
                    <p>Some technologies that I have been working with:</p>
                    <p>- Programming Languages: Python, C, C++, HTML, CSS, Javascript, RISC-V</p>
                    <p>- Tools: Linux, Unix, Github/Git, SSH, Flex, Bison, Jira</p>
                </div>
            </div>
        </section>
    )
}

function Project() {
    return (
        // Kubot section
        <div style={{background: 'white'}}>
            <div id="kubot" class="content-section">
                <h2 class="section-heading">KUBOT PROJECT</h2>
                <p class="section-subheading">I love Arduino</p>
                <p class="about-text">The purpose of the KU-BOT is to teach and interest children in stem, specifically in coding and
                    assembly. The goal is to make it low effort and easy for kids to assemble, while learning the basics of robot assembly
                    and technology. After the creation, the impact will help turn the world in a positive direction for the future and start
                    teaching kids early on the stem basics. It is relevant because of how up and rising the stem and AI industry is becoming,
                    these toys will help children advance in a pathway for the betterment of the world while making them grow through immersive hands-on learning.

                    <br />
                    <br />
                    Kubot team

                </p>


                <div class="row members-list">
                    <div class="column column-three text-center">
                        <p class="member-name">Design</p>
                        <img src={require("./images/structure.png")} alt="structure" class="member-image img-thumbnail place-image" onClick ={()=>{toggleImg("./images/structure.png","structure")}} />
                    </div>


                    <div class="column column-three text-center">
                        <p class="member-name">Hardware</p>
                        <img src={require("./images/components.png")} alt="components" class="member-image img-thumbnail place-image" onClick ={()=>{toggleImg("./images/components.png","components")}} />
                    </div>


                    <div class="column column-three text-center">
                        <p class="member-name">Product</p>
                        <img src={require("./images/kubot.png")} alt="kubot" class="member-image img-thumbnail place-image" onClick ={()=>{toggleImg("./images/kubot.png","kubot")}} />
                    </div>


                </div>
            </div>
        </div>


    )
}

function Project2()
{
    return(
        <div id="activites" class="activity-section" style={{"margin-top": "50px"}}>
            <div class="content-section">
                <h2 class="section-heading text-white">OTHER ACTIVITIES</h2>
                <p class="section-subheading text-white">Working hard!</p>
                
                {/* <!-- Ticket --> */}
                <ul class="inprogress-list">
                    <li>Compiler: Develop compiler for DJ language <span class="inprogress">In Progress</span></li>
                    <li>Coffe Shop Management App: Develop Python program to manage coffee shop franchises <span class="inprogress">In Progress</span></li>
                </ul>


                {/* <!-- Places --> */}
                <div class="row places-list">
                    <div class="column column-three">
                        <img src={require("./images/incollege.png")} alt="InCollege" class="place-image"/>
                        <div class="place-body">
                            <h3 class="place-heading">InCollege App</h3>
                            <p class="place-time">Fall 2022</p>
                            <div class="place-description">Create LinkedIn similar platform for students.</div>
                            <a href="https://github.com/chuongle1994/requirementepic" class="button">See more</a>
                        </div>
                    </div>


                    <div class="column column-three">
                        <img src={require("./images/scp.png")} alt="SCP" class="place-image" style={{height: "274px"}}/>
                        <div class="place-body">
                            <h3 class="place-heading">Hack Jam</h3>
                            <p class="place-time">Fall 2022</p>
                            <div class="place-description">Compete in HackJam Competitive coding event.</div>
                            <a href="https://www.usf.edu/engineering/cse/newsroom/hackjamfall22.aspx" class="button">See more</a>
                        </div>
                    </div>


                    <div class="column column-three">
                        <img src={require("./images/image-proccessing.png")} alt="ImagePro" class="place-image" style={{height: "274px"}}/>
                        <div class="place-body">
                            <h3 class="place-heading">Image Proccessing Tool</h3>
                            <p class="place-time">Spring 2022</p>
                            <div class="place-description">Develop tools to implement multiple image proccessing methods.</div>
                            <a href="https://github.com/VanDinhLe/kubot" class="button">See more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <div id="footer">
            <div class="socials-list">
                <a href="https://www.facebook.com"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>
                <a href="https://twitter.com"><i class="fab fa-twitter-square"></i></a>
                <a href="https://www.linkedin.com/feed/"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>

    )
}

// const App = () => {
//     return (
//         <div>
//             <Navbar />
//             <WavingText/>
//             <ModalImage/>
//             <Intro />
//             <About />
//             <Project />
//             <Project2/>
//             <Contact/>
//             <Footer />
//         </div>

//     );
// }

// ReactDOM.render(<App />,
//     document.getElementById("root"))

// functions


window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});



//=============== modal image
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
// console.log(modal);
// img.onclick = function(){
//     modal.style.zIndex = "3";
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// test
function toggleImg(src, alt){
    // console.log("haha");
    // modal.zIndex = 3;
    // modal.zIndex = "3";
    // module.
    // modal.
    // modal.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }

// When the user clicks on <span> (x), close the modal
function Close() { 
  modal.style.display = "none";
}

function App() {
  return (
    <div>
            <Navbar />
            <WavingText/>
            <ModalImage/>
            <Intro />
            <About />
            <Project />
            <Project2/>
            <Contact/>
            <Footer />
        </div>
  );
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
