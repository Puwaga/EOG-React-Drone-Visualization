import React from "react";
import {AppBar ,Toolbar, Typography, withStyles} from "@material-ui/core";

import Weather from "./Weather";

const styles = {
  grow: {
    flexGrow: 1
  },
  background : {
    background : '#2964c4'
  }
};

const Header = props => {
  const { classes } = props;
  const name = "Edison Nkemande's";
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {name} EOG React Visualization Assessment
        </Typography>
        <Weather />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
