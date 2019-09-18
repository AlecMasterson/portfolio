import React from 'react';
import MainNavBarItem from './MainNavBarItem';

function NavBar(props) {
    const title = props.title;
    let currentPageIndex = props.currentPageIndex;
    const pages = props.pages;
    const changePage = props.changePage;

    let navItems = pages.map((item, index) =>
        <MainNavBarItem key={index} index={index} currentPageIndex={currentPageIndex} pages={pages} changePage={changePage} />
    );

    return (
        <nav className="navbar navbar-dark navbar-expand-lg py-3">
            <span className="navbar-brand" href="#">{title}</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavBar" aria-controls="mainNavBar" aria-expanded="false" aria-label="Toggle Navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div id="mainNavBar" className="collapse navbar-collapse justify-content-between">
                <div></div>
                <ul className="navbar-nav">
                    {navItems}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;