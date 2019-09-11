import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainNavBarItem from './components/MainNavBarItem';
import WorkExperience from './components/WorkExperience';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.title = "Alec Masterson";

        this.pages = [
            { "name": "WORK EXPERIENCE", "element": <WorkExperience /> },
            { "name": "EDUCATION", "element": null },
            { "name": "PORTFOLIO", "element": null },
            { "name": "CONTACT ME", "element": null }
        ];

        this.state = { "currentPage": 0 };
    }

    render() {
        const currentPage = this.state.currentPage;

        let navItems = []
        for (const [index, navItem] of this.pages.entries()) {
            navItems.push(
                <MainNavBarItem key={index} index={index} name={navItem["name"]} currentPage={this.pages[currentPage]["name"]} changePage={(newPage) => this.setState({ "currentPage": newPage })} />
            );
        }

        return (
            <div className="body">
                <nav className="navbar navbar-dark navbar-expand-lg py-3">
                    <a className="navbar-brand" href="#">{"Alec Masterson"}</a>
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

                {this.pages[currentPage]["element"]}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));