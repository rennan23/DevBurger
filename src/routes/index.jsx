import {  Route, Routes } from "react-router-dom";


import { Menu,
  Cart,
  Register,
  Login,
  Home,
  Orders, 
  NewProducts, 
  EditProducts, 
  Products
} from "../containers";

import { UserLayout } from "../layouts/UserLayout";
import { AdiminLayout } from "../Layouts/AdiminLayout";

export function Router (){

return (
       <Routes>
        <Route path="/" element={<UserLayout/>}>
        <Route path="/"element={<Home/>}/>
           <Route path="/cardapio"element={<Menu/>}/>
            <Route path="/carrinho"element={<Cart/>}/>
        </Route>
         <Route path="/admin" element={<AdiminLayout/>}>
            <Route path="/admin/pedidos" element={<Orders/>}/>
            <Route path="/admin/novo-produtos" element={<NewProducts/>}/>
            <Route path="/admin/editar-produtos" element={<EditProducts/>}/>
            <Route path="/admin/produtos" element={<Products/>}/>
         </Route>

           <Route path="/login"element={<Login/>}/>
             <Route path="/cadastro"element={<Register/>}/>
       </Routes>

      
  );

}
