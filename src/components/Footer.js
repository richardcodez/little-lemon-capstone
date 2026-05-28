function Footer() {
    return (
        <footer className="footer">
            <p>&copy; Little Lemon. ALl rights reserved.</p>
            <nav className="footer-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order-online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
            <address className="footer-address">
                548 Miami Street, Chicago <br/>
                Phone: 067 453 3434
            </address>
            <div className="socials-footer">
                <p>Follow us on:</p>
                <ul>
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                    <li><a href="https://linkedin.com">LinkedIn</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;