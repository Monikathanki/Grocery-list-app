import React from "react";
import ReactDOM from "react-dom";
import EditList from "../EditList/EditList";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <EditList />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});