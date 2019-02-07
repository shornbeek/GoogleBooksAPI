import React from "react";
import API from "../routes/Api";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedBooks: []
        }
    }

    componentWillMount() {
        API.getBooks().then(
            (response) => {
                this.setState({savedBooks: response.data});
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        console.log(this.state.savedBooks);
        return(
            <main>
            </main>
        );
    }
}

export default Saved;