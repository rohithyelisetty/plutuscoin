import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Button } from '@mui/material';
import "./todo.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
var yes_count = 0;
var no_count = 0;
var coin_balance = 0;

const Todo = ({ arr }) => {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar />
                <ListItemText primary={"Poll Question"} secondary={arr.item.todo} />
            </ListItem>
            <Button variant="contained" color="primary" onClick = {addYes}>Yes</Button>
            <Button variant="contained" color="primary" onClick = {addNo} >No</Button>
        </List>
    )
};

const addNo = (e) => {
    no_count ++;
}
const addYes = (e) => {
    yes_count ++;
}


export default Todo;
export const balance = coin_balance;