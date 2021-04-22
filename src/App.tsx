import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyWork from "./MyWork/MyWork";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills />
            <MyWork />
        </div>
    );
}

export default App;
