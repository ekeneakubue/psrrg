import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg myNavbar">
            <Link class="navbar-brand mynav-brand"><img src='images/unn-logo.gif' alt='logo' className='mylogo' />PSRRG</Link>
            <button class="navbar-toggler navbar-light text-primary" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to = "/" className="nav-link #top myNavItems" data-toggle="collapse" data-target=".navbar-collapse.show"> Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to = "/about" className="nav-link #top myNavItems" data-toggle="collapse" data-target=".navbar-collapse.show"> About</Link>
                    </li>
                    <li class="nav-item">
                        <Link to = "/scholarship" className="nav-link #top myNavItems" data-toggle="collapse" data-target=".navbar-collapse.show"> Scholarships</Link>
                    </li>
                    <li class="nav-item">
                        <Link to = "/activity" className="nav-link #top myNavItems" data-toggle="collapse" data-target=".navbar-collapse.show"> Activities</Link>
                    </li>
                    <li class="nav-item">
                        <Link to = "/contacts" className="nav-link #top myNavItems" data-toggle="collapse" data-target=".navbar-collapse.show"> Contacts</Link>
                    </li>      
                    <li class="nav-item">
                        <Link to = "/login" className="nav-link #top myNavItems" data-toggle="collapse" data-target=".navbar-collapse.show"> Login</Link>
                    </li>                           
                </ul>
            </div>
        </nav>
        <div id="top"></div>
    </div>
  )
}
