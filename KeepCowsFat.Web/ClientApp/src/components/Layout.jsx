import './Layout.css';

const Layout = ({ children }) => {
    return (
        <>
            <header className='header'>
                <img src="/Images/header.png" className='logo' />
                <div className='navLinks'>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/backstory">Backstory</a>
                    <a href="/services">Services</a>
                    <a href="/sources">Sources</a>
                    <a href="/contact">Contact</a>
                </div>
            </header>
            <section className='childrenWrapper'>
                {children}
            </section>
            <footer>
                <div />
            </footer>
        </>
    )
}

export default Layout;
