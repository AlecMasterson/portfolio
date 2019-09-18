import React from 'react';

function MainNavBarItem(props) {
    const index = props.index;
    let currentPageIndex = props.currentPageIndex;
    const pages = props.pages;
    const changePage = props.changePage;

    let classes = "nav-item";
    if (index === currentPageIndex) classes += " active";

    let currentPageName = pages[index]["name"];

    return (
        <li className={classes} onClick={() => changePage(index)}>
            <span className="nav-link">{currentPageName}</span>
        </li>
    );
}

export default MainNavBarItem;