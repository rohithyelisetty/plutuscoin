import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import Todo, {balance} from './UserToDo';
import { db } from '../fire';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { useUserContext } from "../userContext";
import './User.css';

var yes_counter = 0;
var no_counter = 0;

const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));
function User() {
    const { user, logoutUser } = useUserContext();
    const nametype = user.displayName;
    const [userName, ...brand_data] = nametype.split(';');
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    useEffect(() => {
        onSnapshot(q, (snapshot) => {
            setTodos(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [input]);
    const addTodo = (e) => {
        e.preventDefault();
        addDoc(collection(db, 'todos'), {
            todo: input,
            timestamp: serverTimestamp()
        })
        setInput('')
    };
    return (
        <div className="App">
            <h2> Hello { userName }</h2>
            <form>
            </form>
            <ul>
                {todos.map(item => <Todo key={item.id} arr={item} />)}
            </ul>
            <button onClick={logoutUser}>Log out</button>
        </div>
    );
}

export default User;
