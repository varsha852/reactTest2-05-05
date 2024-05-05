import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";


export const Form = (props) => {
    const { open, handleClose, y } = props;

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        contactnumber: "",
        email: "",
    });

    useEffect(() => {
        if (y) {
            setData({ ...y, firstname: y.firstname, lastname: y.lastname, contactnumber: y.contactnumber, email: y.email });
        }
        console.log(y);
    }, [y]);
    const handleSave = () => {
        let method1 = y ? "PUT" : "POST";
        let url = y
            ? `https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee/${data.id}`
            : "https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee";
        fetch(url, {
            method: y ? "PUT" : "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "Application/json",
            },
        })
            .then((y) => y.json())
            .then((y) => {
                setData({ firstname: "", lastname: "", contactnumber: "", email: "" });
                handleClose();
            });


    };
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: "form",
                onSubmit: (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const email = formJson.email;
                    console.log(email);
                    handleClose();
                },
            }}
        >
            <DialogTitle>Employee</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    The number of employees in the company has trebled over the past decade.
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    type="text"
                    fullWidth
                    value={data?.firstname}
                    variant="standard"
                    onChange={handleChange}
                />

                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    type="text"
                    fullWidth
                    value={data?.lastname}
                    variant="standard"
                    onChange={handleChange}
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="contactnumber"
                    name="contactnumber"
                    label="contact number "
                    type="tel"
                    fullWidth
                    value={data?.contactnumber}
                    variant="standard"
                    onChange={handleChange}
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    value={data?.email}
                    variant="standard"
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="button" onClick={handleSave}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}
