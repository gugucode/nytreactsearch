
import React from "react";

// Navigation 
class Nav extends React.Component{
    render() {
        return (
            <div className="jumbotron" style={{background: '#3498db',color: 'white'}}>
                <h2 className="text-center">
                    <i className="fas fa-newspaper"></i>
                    New York Times Search
                </h2>
                <hr className="my-4" />
                <blockquote className="blockquote-reverse small">
                    <p>Reading gives us someplace to go when we have to stay where we are.</p>
                    <footer>Mason Cooley</footer>
                </blockquote>
                {/* Button that links to saved Articles page */}
                <a className="btn btn-primary btn-sm mr-2" href="/savedArticles" role="button" style={{margin:"1em"}}>Saved Articles</a>
                {/* Button that links to search page */}
                <a className="btn btn-primary btn-sm" href="/" role="button">Search New Articles</a>                 
            </div>
        );
    }
}

export default Nav;