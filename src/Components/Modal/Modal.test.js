import React from "react";
import ReactDOM from "react-dom";
import Modal from "../Modal/Modal";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <Modal />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});