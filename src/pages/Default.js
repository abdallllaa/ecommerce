import React from 'react';
import defaulBcg from '../images/defaultBcg.jpeg';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom'
export default function Default () { 
    return (
        <>

        <Hero img={defaulBcg} title="404" max="true">
            <h2 className="text-uppercase">page</h2>
            <Link to="/" className="main-link">Return Home</Link>
        </Hero>
        </>
    )
}