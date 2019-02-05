import React from "react";

const styles = {
    card: {
      margin: "20px",
      background: "#e8eaf6",
      width: "50%"
    }

  };
function Search() {
  return (
<div>
 <div className="row no-gutters" style={styles.card}>
        <div className="col">
            <input className="form-control border-secondary border-right-0 rounded-0" type="search" value="Find your book" id="example-search-input4"/>
        </div>
        <div className="col-auto">
            <button className="btn btn-outline-secondary border-left-0 rounded-0 rounded-right" type="button">
                Search
            </button>
        </div>
    </div>
</div>
  );
}

export default Search;




