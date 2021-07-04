import React from 'react';
import { Route, Switch, Redirect, Link, NavBar } from 'react-router-dom';
import { Instructions } from './Instructions'
import { Form } from './Form'

export const Header = () => {

    const headerStyle = {
        width: '100%',
        padding: '2%',
        backgroundColor: "yellowgreen",
        color: 'black',
        textAlign: 'center'
    }

    return (
        <div >
            <h1 style={headerStyle}>Chana Avramovich Project!</h1>
            <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
                <Link to="/Form" class="navbar-brand">Form Details</Link>
                <Link to="/Instructions" class="navbar-brand">Instructions</Link>
            </nav>
        </div>
    )
}