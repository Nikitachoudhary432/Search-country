import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    const navigateToDetails = () => {
        navigate('/carddetails');
    };

    const [item, setitem] = useState([])
    console.log('tems===>', item);
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then(res => setitem(res.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <div className='About'>
                <svg>
                    <defs>
                        <symbol viewBox="0 0 1440 120" id="wave">
                            <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path>
                        </symbol>
                    </defs>
                </svg>

                <section className="hero hero--pricing gradient inverse">
                    <div className="container">
                        <header>
                            <h1>Search Country</h1>

                        </header>
                        <section className="card">
                            <header>
                                <div className='search'>
                                    <form id="form" className="form">
                                        <button type="submit" className="search-btn">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </button>
                                        <input type="text" id="search" placeholder="Search for any country..." autocomplete="off" autofocus />
                                        <button type="submit" className='submit-btn'>Go</button>
                                    </form>

                                </div>
                            </header>
                        </section>
                    </div>
                </section>

                <div className="wave">
                    <svg viewBox="0 0 1440 120">
                        <use href="#wave"></use>
                    </svg>
                </div>
            </div>

            <div>
            {this.state.todos.map(item => (
                <Link to={`posts/${item.slug}`} >
                <div key={item.slug}>
                <h1>{item.title}</h1>
                <span>{item.text}</span>
                </div>
                </Link>
            ))}
            </div>

        </div>
    )
}

export default Contact
