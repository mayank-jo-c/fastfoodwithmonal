const Navbar = () => {

    return (
        <><nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" />
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#food">Beverages</a></li>
                <li><a href="#food-menu">Menu</a></li>
                <li><a href="#testimonials">Testimonial</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <h1 class="logo">Monal Fast Food</h1>
        </div>
    </nav>
        </>
    )
}

export default Navbar;