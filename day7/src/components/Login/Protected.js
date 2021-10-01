import React from 'react'
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

const Protected = ({
  component: Component,
  //Here we are passing component as a prop
  ...rest
  //Rest of the properties that are passed in will be destructured into rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
    )
}

export default Protected
