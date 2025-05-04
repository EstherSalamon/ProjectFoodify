import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div>
            <header className='fixed-top'>
                <img src="/Images/header.png" />
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/backstory">Backstory</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/sources">Sources</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <div style={{marginTop: 225}}>
                {children}
            </div>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted" style={{marginTop: 50} }>
                <div style={{ backgroundColor: 'lightgreen', height: 300 }}>
                </div>
            </footer>
        </div>
    )
}

export default Layout;

/* 
-----this is the slanted top/bottom/pic one------------
<div className="blue-bg"></div>

<div className="white-bg shadow"></div>
<div className="content">
{children}
</div>*/