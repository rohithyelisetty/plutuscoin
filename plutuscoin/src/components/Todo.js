import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { db } from '../fire';
import "./todo.css";
import { doc, deleteDoc } from "firebase/firestore";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = ({ arr }) => {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar />
                <ListItemText primary={"Poll Question"} secondary={arr.item.todo} />
                <p className='yes'>Yes: {Math.round(arr.item.yes / (arr.item.yes + arr.item.no) * 100)}%; No: {100 - Math.round(arr.item.yes / (arr.item.yes + arr.item.no) * 100)}%</p>
            </ListItem>
            <DeleteIcon fontSize="large" style={{ opacity: 0.7 }} onClick={() => { deleteDoc(doc(db, 'todos', arr.id)) }} />
            {console.log(arr.item.yes)}
        </List>
    )
};
export default Todo;