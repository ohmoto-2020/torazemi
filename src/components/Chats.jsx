import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import { Chat } from "./index"

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: '36ch',
    }
});

const Chats = (props) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {props.chats.map((chat, index) => {
                return <Chat text={chat.text} type={chat.type} key={index} />
            })}
        </List>
    )
}

export default Chats;
