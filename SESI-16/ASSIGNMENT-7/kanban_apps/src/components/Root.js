import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "../routes/routes";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;