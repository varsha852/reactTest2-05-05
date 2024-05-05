import React, { useState } from 'react'
import { Form } from './Form'
import { Display } from './Display'
import { Button } from "@mui/material";


export const Parent = () => {
    const [y, setY] = useState(null);
    const [open, setOpen] = useState(false);

    const handleOpen = (data) => {
        setOpen(true);
        console.log(data);
        setY(data);
    };

    const handleClose = () => {
        setY(null);
        setOpen(false);
    };
    const handleAdd = () => {
        setOpen(true);
    }

    return (
        <div>
            <Button
                variant="contained"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={handleAdd}
            >
                Add New Data to Field
            </Button>
            <Form
                handleClose={handleClose} open={open} y={y}
            />
            <Display handleOpen={handleOpen} open={open}
            />
        </div>
    );
};
