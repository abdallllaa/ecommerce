import React from 'react';
import {ProductConsumer} from "../context";
import Hero from "../components/Hero";
import {Link} from 'react-router-dom';
import Services from '../components/HomePage/Services';

import Featured from '../components/HomePage/Featured';
export default function HomePage () {
    return (
        <>
        <Hero title="awsome gadgets" max="true">
            <Link className="main-link" to="/products" style={{margin : "2rem"}}>Our Products</Link>
        </Hero>
        <Services/>
        <Featured/>
        </>
    )
}