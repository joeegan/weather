import React from "react";
import { NavLink } from "react-router-dom";

const AppRouter = () => (
    <nav>
        <ul>
          <li>
            <NavLink exact to="/">Now</NavLink>
          </li>
          <li>
            <NavLink to="/today">Today</NavLink>
          </li>
          <li>
            <NavLink to="/yesterday">Yesterday</NavLink>
          </li>
          <li>
            <NavLink to="/year">Year</NavLink>
          </li>
          <li>
            <NavLink to="/all-time">All time</NavLink>
          </li>
        </ul>
    </nav>
);

export default AppRouter;