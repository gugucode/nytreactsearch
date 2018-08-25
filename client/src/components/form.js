
import React from "react";

export const Form = (props) => {

    return (
        <div className="panel panel-info">
            <div className="panel-heading">
                <i className="fas fa-newspaper"></i>
                Search Parameters
            </div>
            <div className="panel-body">
                <form onSubmit={props.handleSubmit}>
                    {/* Search key word */}
                    <div className="form-group">
                        <label>Search Term:</label>
                        <input onChange={props.handleInputChange} type="text" className="form-control" name="searchKey" />
                        <div style={props.validkey}>
                            Please provide a valid search term!
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Number of Records to Retrieve:</label>
                        <select onChange={props.handleInputChange} className="form-control" name="retrieveNum">
                            <option value={0}>10</option>
                            <option value={1}>20</option>
                            <option value={2}>30</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Start Year (Optional):</label>
                        <input type="date" min="1985-09-18" className="form-control" name="startYear" onChange={props.handleStartYearChange}/>
                        <div style={props.validStartYear}>
                            Please provide a valid start year!
                        </div>
                    </div>
                    <div className="form-group">
                        <label>End Year (Optional):</label>
                        <input type="date" className="form-control" name="endYear" onChange={props.handleEndYearChange} />
                        <div style={props.validEndYear}>
                            Please provide a valid end year!
                        </div>
                    </div>
                    <button type="submit" className="btn btn-info btn-md mx-2" style={{margin:"1em"}}><i className="fas fa-search"></i>Submit</button>
                    <a  onClick={props.handlClear} className="btn btn-info btn-md mx-2"><i className="fas fa-trash-alt"></i>Clear Results</a>
                </form>
            </div>
        </div>
    );
    
}
