import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react"
import { api } from "../../../services/api";
import { Container,EditeButton,ProductImage  } from './styles';
import { CheckCircle, Pencil, XCircle } from '@phosphor-icons/react';
import  {formatPrice}from'../../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';

export function Products(){
  const [products, setProducts] = useState([]);
   const navigate = useNavigate();
   useEffect(()=>{
     async function loadProducts() {
      const {data} = await api.get("/products");
       setProducts(data)
   
  }

  loadProducts();

},[])

function isOffer (offer){
 if (offer) {
   return <CheckCircle  color='#228B22' size='28'/>
 }else{
  return <XCircle color='#e21515' size='28'/>
 }


}
function EditProduct (product) {
   navigate("/admin/editar-produtos", {state:{product}});
}

return (
    <Container>

       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="center">Preço</TableCell>
            <TableCell align="center">Produto em Oferta</TableCell>
            <TableCell align="center">Imagen do Produto</TableCell>
            <TableCell align="center">Editar Produto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="ceter">{ formatPrice( product.price)}</TableCell>
              <TableCell align="center">{ isOffer(product.offer)}</TableCell>
              <TableCell align="center"><ProductImage src={product.url} alt='Imagem dos produtos' /></TableCell>
              <TableCell align="center">
                   <EditeButton onClick={() => EditProduct (product)}>
                 <Pencil />
                   </EditeButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    </Container>
)

}