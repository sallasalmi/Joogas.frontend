import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Joogalist() {
    const [joogas, setJoogas] = useState([]);
    const [review, setReview] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://joogas.herokuapp.com/api/joogas')
        .then(response => response.json())
        .then(data => setJoogas(data))
        /* .then(data => setReview(data.review[0].name)) */
        .catch(err => console.err(err))
    }

     const columns = [
        { field: 'name', sortable: true, filter: true},
        { field: 'description', sortable: true, filter: true},
        { field: 'time', sortable: true, filter: true},
        { field: 'review.name', sortable: true, filter: true},
        { field: 'asanas', children: [ {field: 'name'}, {field:'description'}], sortable: true, filter: true},
    ] 

    return (
        <div className="ag-theme-material" style={{ height: 600, width: '90%', margin: 'auto' }}>
        <AgGridReact
        rowData={joogas}
        columnDefs={columns}
        />
       {/*    <div>
        <table>
            <tbody>
                {
                    joogas.map((jooga) =>
                    <tr key={jooga.id}>
                    <td>{jooga.name}</td>
                    <td>{jooga.description}</td>
                    <td>{jooga.time}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>  */}
        </div>
    );
}
export default Joogalist;
