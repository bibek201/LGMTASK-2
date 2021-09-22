import React,{ useContext} from 'react';
import './style.css'
import { UserDetails } from '../help/context'



function Navbar() {
	const{loading,setloading,setshowData,showData}= useContext(UserDetails);
    
    function load(){
        setloading(true);
        setTimeout(() => {
            setloading(false)
			setshowData(true);
        },2000);
        
    }
      
    function inst(){
        

load();
	}
    return (
        <div className="nav-3">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top nav-1">
		<div className="container navigation">
			
			<button className="navbar-toggler hamburger" type="button" data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon "></span>
				</button>
				<ul className="navbar-nav">
					<li><a className="lists">LGM TASK-2</a></li>
					</ul>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav navbar-end d-flex ml-auto">
					<li className="nav-item active">
						<a className="nav-link lists " id="links" >About</a>
					</li>
					<li class="nav-item">
						<a className="nav-link lists" id="links">Contact</a>
					</li>
					<li className="nav-item">
						<a className="nav-link lists" id="links">Help</a>
					</li>
					<li className="nav-item">
						<a className="nav-link lists" className="navigation navi" id="links"><button className="lists" onClick={inst}>Get Users</button></a>
					</li>
					
				</ul>
			</div>
		</div>
	</nav>
	
        </div>
    )
}

export default Navbar
