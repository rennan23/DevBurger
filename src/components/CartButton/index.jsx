import Cest from "../../assets/cestinha.png"
import { ContainerButton } from "./styles"

export function CartButton({...props}){
   return(
     <ContainerButton {...props}>
        <img  src={Cest} alt="cestinha-de-compras"/>
     </ContainerButton>


   )


}