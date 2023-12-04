const Navigation=()=>{
    return(
        <nav className="container">
                <div className="logo">
                    <img src="/images/loggo.png" alt="logo"></img>
                </div>

                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>

                <button>Login</button>
            </nav>
    )
}
export default Navigation;