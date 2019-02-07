import React from "react";
// import BookResult from "../components/BookResult";

function ResultsContainer(props) {
    if(props.path === "/") {
        return(
            <div id="resultsContainer">
                <h3>Results Found</h3>
              
            </div>
        );
    } else if(props.path === "/saved") {
        if(props.savedBooks.length > 0) {
            return(
                <div id="resultsContainer">
                    <h3>Saved Books</h3>
                  
                </div>
            );
        } else {
            return(
                 <div id="resultsContainer">
                    <h3>Saved Books</h3>
                    <p>No saved books.</p>
                </div>
            );
        }
    }
}

export default ResultsContainer;