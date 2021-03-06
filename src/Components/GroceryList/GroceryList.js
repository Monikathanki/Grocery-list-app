import React from "react";
import Context from "../../Context/Context";
import Modal from "../Modal/Modal";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import config from '../../Config/Config'

class GroceryList extends React.Component {
    static contextType = Context;

    state = {
        show: false,
    };

   

    showModal = () => {
        this.setState({
            show: true,
        });
    };
    hideModal = () => {
        this.setState({
            show: false,
        });
    };

    render() {
        return (
            <div className={`GroceryList ${this.props.checked}`}>
                <h2>{this.props.checked ? "Completed" : "Pending"} Lists</h2>
                <div className="create-list-mobile">
                    <Link to="/grocery-list-categories">
                        <button className="create-list-button">Create Grocery List</button>
                    </Link>
                </div>
                <div
                    className={this.props.checked ? "completed-lists" : "pending-lists"}
                >
                    <ul>
                        {this.context.lists && this.context.lists
                            .filter((list) => list.checked === this.props.checked)
                            .map((list, id) => (
                                <li key={list.id} className={list.category}>
                                    <div className="view-list-desktop">
                                        <Link to={`/grocery-lists/${list.id}`}>{list.name}</Link>
                                    </div>
                                    <div className="view-list-modal">
                                        <Modal
                                            {...this.props}
                                            show={this.state.show}
                                            handleClose={this.hideModal}
                                        />
                                        <button
                                            onClick={this.showModal}
                                            className="view-list-modal-button"
                                        >
                                            <Link to={`/grocery-lists/${list.id}`}> {list.name}</Link>
                                        </button>
                                    </div>
                                    {list.checked === true ? (
                                        <span className="checkmark-list">
                                            <FaCheckCircle className="completed-check-logo" />
                                        </span>
                                    ) : (
                                            ""
                                        )}
                                </li>
                            ))}
                    </ul>
                    <div className="create-list-desktop">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default GroceryList;