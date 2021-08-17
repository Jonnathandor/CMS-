import './NavBar.css';

export const NavBar = () => {
    return (
        <div className="nav">
            <div className="nav__logo"><img src="https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_960_720.png" alt="web-logo" /></div>
            <div className="nav__menuItems">
                <ul>
                    <li className="nav__menuItems-item"><a id="menu__item-primary" href="#">Hello</a></li>
                    <li className="nav__menuItems-item"><a href="#">Projects</a></li>
                    <li className="nav__menuItems-item"><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="nav__curriculum">
                <a href="https://github.com/Jonnathandor" className="nav__repoCurriculum"target="_blank">Curriculum</a>
            </div>
        </div>
    )
}
