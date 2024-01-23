
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function CreateProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  const url = "http://localhost:5050/api";
  const [data, setData] = useState({});

  useEffect(() => {
     if (isEditMode) {
       axios.get(`${url}/product/${id}`)
         .then(response => setData(response.data)) 
         .catch(error => console.error('Error fetching product:', error));
     }
   }, [id, isEditMode]);

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestMethod = isEditMode ? axios.put : axios.post;
    const requestUrl = isEditMode ? `${url}/product/${id}` : `${url}/product`;

    requestMethod(requestUrl, { ...data })
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{marginTop:"50px",width:"100%"}}>
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{borderRadius:"5px",bgcolor:"#dce6f5",boxShadow:"10px 10px 5px #d4d6d9"}}>
        <CssBaseline />
          <Box
component="form"
action="/"
noValidate
onSubmit={handleSubmit}
sx={{ mt: 3,width:"100%" }}
>
<Grid container spacing={2} sx={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center" }}>
  <Grid item xs={12}>
    <TextField
      autoComplete="name"
      value={data.name}
      onChange={handleChange}
      name="name"
      fullWidth
      label="Product Name"
      id="productName"
      autoFocus
    />
  </Grid>
  <Grid item xs={12}>
    <TextField
      fullWidth
      label="Description"
      id="description"
      name="description"
      value={data.description}
      onChange={handleChange}
    />
  </Grid>
  <Grid item xs={12}>
    <TextField
      fullWidth
      label="Quantity"
      id="quantity"
      name="quantity"
      value={data.quantity}
      onChange={handleChange}
    />
  </Grid>
  <Grid item xs={12}>
    <TextField
      fullWidth
      label="Category"
      name="category"
      value={data.category}
      onChange={handleChange}
      id="category"
    />
  </Grid>
  <Grid item xs={12} >
    <TextField
      fullWidth
      label="Price"
      name="price"
      value={data.price}
      onChange={handleChange}
      id="price"
    />
  </Grid>
  <Grid sx={{
                    width:"90%",
                    display: "flex",
                    justifyContent:"space-between",
                    alignItems: "center",
               }}>
  <Button
       type="submit"
       color="warning"
       variant="contained"
       sx={{ mt: 3, mb: 2 }}
       onClick={()=>{navigate("/")}}
     >  
        Cancel
     </Button>
     <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
     >
        Save
     </Button>
  </Grid>
</Grid>

</Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default CreateProduct;

