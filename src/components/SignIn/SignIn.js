import React from 'react';
import { useParams } from 'react-router-dom';
import HomePage from './HomePage';
import Services from './Services';

export default function SignIn() {
    const { type } = useParams();

    return (
        <>
            <h2>SignIn</h2>
            {type === 'homepage' && <HomePage />}
            {type === 'Services' && <Services />}
        </>
    );
}