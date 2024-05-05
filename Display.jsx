import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

export const Display = (props) => {
    const { handleOpen, open } = props;
  const [data, setData] = useState([]);
  const [id, setID] = useState(0);

  const deleteEmployee = (id) => {
    fetch("https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee/" + id, {
      method: "DELETE",
    })
      .then((y) => {
        return y.json();
      })
      .then((y) => {
        setID(id);
        console.log(y);
      });
  };
  const columns = [
    { field: "firstname", headerName: "First Name", width: 150 },
    { field: "lastname", headerName: "Last Name", width: 150 },
    { field: "contactnumber", headerName: "contactnumber", width: 200 },
    { field: "email", headerName: "email", width: 200 },

    {
      field: "id",
      headerName: "",
      width: 300,
      renderCell: (params) => {
        return (
            <>
              <Button
                variant="contained"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={() => {
                  handleOpen(params.row);
                }}
              >
                EDIT
              </Button>
  
              <Button
                variant="contained"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={() => {
                  deleteEmployee(params.id);
                }}
              >
                DELETE
              </Button>
            </>
          );
        },
      },
    ];
    useEffect(() => {
      fetch("https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee")
        .then((y) => y.json())
        .then((y) => {
          setData(y);
        });
    }, [id, open]);
  
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={data} columns={columns} />
    </div>
  )
}
