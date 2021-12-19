import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SwipeableDrawer } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { List } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const DrawerHandler = () => {
  const [state, setstate] = useState(false);

  const classes = useStyles();
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    setstate(open);
  };

  const list = () => {
    return (
      <div onClick={toggleDrawer(false)}>
        <List className={classes.list}>
          <ListItem button onClick={() => navigate("/")}>
            <ListItemText primary={"About"} />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => navigate("/Skills")}>
            <ListItemText primary={"Skills"} />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => navigate("/Education")}>
            <ListItemText primary={"Education"} />
          </ListItem>
          <Divider />
        </List>
      </div>
    );
  };
  return (
    <div>
      <Button>
        <MenuIcon onClick={toggleDrawer(true)} />
      </Button>
      <SwipeableDrawer
        anchor={"left"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default DrawerHandler;
