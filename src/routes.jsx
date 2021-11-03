import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Loading from "./components/Loading";

// pages
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const ContactPage = lazy(() => import("./pages/Contact.jsx"));
const DetailsPage = lazy(() => import("./pages/Details.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

const Routes = () => (
  <Router>
    <Suspense fallback={<Loading/>}>
      <Route
        render={(props) => (
          <App {...props}>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/contactspage" component={ContactPage} />
              <Route path="/detailspage" component={DetailsPage} />
              <Route path="/notfoundpage" component={NotFound} />
            </Switch>
          </App>
        )}
      />
    </Suspense>
  </Router>
);

export default Routes;
