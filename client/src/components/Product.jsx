
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import Actions from "./Action";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleDelete = (productId) => {
    axios.delete(`http://localhost:5050/api/product/${productId}`)
      .then(() => {
        setProducts(products.filter(p => p._id !== productId));
      })
      .catch(error => console.error('Error deleting product:', error));
  };

  const columnDefs = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Description', field: 'description' },
    { headerName: 'Quantity', field: 'quantity' },
    { headerName: 'Category', field: 'category' },
    { headerName: 'Price', field: 'price' },
    {
      headerName: 'Actions',
      field: '_id',
      cellRenderer: Actions,
      cellRendererParams: {
        onDelete: handleDelete,
      },
    },
  ];

  return ( 
      <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
        <AgGridReact
          rowData={products}
          columnDefs={columnDefs}
          pagination={true}
        />
      </div>
  );
};

export default Product;
