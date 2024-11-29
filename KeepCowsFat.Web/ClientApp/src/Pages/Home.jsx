import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {

    const [count, setCount] = useState(0);

    const onButtonClick = () => {
        setCount(count + 1);
    }
    
    return (
        <div className="image2 app-container">
            <div className="d-flex flex-column justify-content-center align-items-center">
         
                <h1>Welcome to React</h1>
                <button onClick={onButtonClick} className="btn btn-primary mb-3">Click me</button>
                <h2>{count}</h2>
            </div>
        </div>
    );
};

export default Home;

/*   <iframe
        src="https://torahanytime.com/embed/?v=322945"
        width="640"
        height="360"
        frameBorder="0"
        scrolling="no"
        title='Lachshov I Elul Series | EP 8: Become a Recipient of His Good'
    ></iframe>
*/