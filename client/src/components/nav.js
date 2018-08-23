
import React from "react";

class Nav extends React.Component{
    render() {
        return (
            <div className="jumbotron" style={{background: '#3498db',color: 'white'}}>
                <h2 className="text-center">
                    <i className="fas fa-newspaper"></i>
                    New York Times Search
                </h2>                
            </div>
        );
    }
}

export default Nav;