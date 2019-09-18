import React from 'react';
import NavBar from './NavBar';
import WorkExperience from './WorkExperience';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.pages = [
            { "name": "WORK EXPERIENCE", "element": <WorkExperience /> },
            { "name": "EDUCATION", "element": null },
            { "name": "PORTFOLIO", "element": null },
            { "name": "CONTACT ME", "element": null }
        ];

        this.state = { "currentPageIndex": 0 };
    }

    render() {
        const title = this.props.title;
        let currentPageIndex = this.state.currentPageIndex;
        const pages = this.pages;
        let currentPage = pages[currentPageIndex]["element"];

        return (
            <div className="body">
                <NavBar title={title} currentPageIndex={currentPageIndex} pages={pages} changePage={(pageIndex) => this.setState({ "currentPageIndex": pageIndex })} />

                <div className="d-flex justify-content-center">
                    <div className="container-fluid col-8 my-4">
                        {currentPage}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;