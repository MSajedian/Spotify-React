import './App.css';
import Home from './components/Home';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Artist from './components/Artist';
import Album from './components/Album';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/artist",
    main: () => <Artist />
  },
  {
    path: "/album",
    main: () => <Album />
  }
];

export default function App() {
  return (
    <>
      <Router>
        <div style={{ display: "flex" }}>
            <Sidebar />
          <div style={{ flex: 1, }}>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
      <Footer />
    </>
  );
}
