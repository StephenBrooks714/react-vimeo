import {Component} from 'react';

class ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {count:0}
    }
    render() {

        return (
            <>
                <div className={"container my-5 py-5"}>
                    <div className={"row justify-content-center"}>
                        <div className={"col-lg-10"}>
                            <h1 className={"fw-light"}>{this.props.title}</h1>
                            <div>
                                <h2 className={"mb-2"}>{this.state.count}</h2>
                                <button className="btn m-2 btn-warning"
                                        onClick={() => this.setState({count: this.state.count - 1})}>decrease
                                </button>
                                <button className="btn m-2 btn-primary"
                                        onClick={() => this.setState({count: this.state.count + 1})}>increase
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ClassComp