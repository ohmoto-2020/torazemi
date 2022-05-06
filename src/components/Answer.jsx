import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
});

const Answer = (props) => {
    return (
        <Button variant="contained" color="primary">
            {props.content}
        </Button>
    )
}

export default Answer;
