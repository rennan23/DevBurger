import { List, ListPlus, Receipt } from "@phosphor-icons/react";

export const navLinks =[
{
    id:1,
    label:"Pedidos",
    Path:"/admin/pedidos",
    icon:<Receipt/>
},
{
    id:2,
    label:"Produtos",
    Path:"/admin/produtos",
    icon:<List/>
},
{
    id:3,
    label:"Adicionar Produto",
    Path:"/admin/novo-produtos",
    icon:<ListPlus/>,
},

]