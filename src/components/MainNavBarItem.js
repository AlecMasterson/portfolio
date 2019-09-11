import React from 'react';

function MainNavBarItem(props) {
    return (
        <li className={"nav-item " + ((props.name === props.currentPage) ? "active" : "")} onClick={() => props.changePage(props.index)}>
            <a className="nav-link">{props.name}</a>
        </li>
    );
}

export default MainNavBarItem;