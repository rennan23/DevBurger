import {useNavigate } from "react-router-dom";
import {formatPrice} from "../../utils/formatPrice";
import {api} from "../../services/api";
import {useCart} from "../../hooks/CartContext";
import { useEffect,useState } from "react";
import { toast } from "react-toastify";
import {Container} from "./styles";
import {Button} from "../Button";
export function CartResume(){
   const [finalPrice, setFinalPrice] = useState(0);
   const [deliveryTax] = useState(500);
   const Navigate  = useNavigate();
      
       const {cartProducts,clearCart} = useCart();

       useEffect(()=>{
         const sumAllItems = cartProducts.reduce((acc,current) =>{
            return current.price * current.quantity + acc;
         },0)
         setFinalPrice(sumAllItems);
       },[cartProducts]);

       const submitOrder = async () => {
         const products = cartProducts.map((product) =>{
            return{ id: product.id, quantity:product.quantity}

         })
          try {
      const { status } = await api.post("/orders",{products}, {
        validateStatus: () => true,
         });
      if (status === 200 || status === 201) {
        clearCart();
        setTimeout(() => {
          Navigate("/")
        }, 2000);
        toast.success("Pedido Realizado com sucesso!");
      } else if (status === 400) {
        toast.error("Falha ao realizar o seu pedido")
      } else {
        throw new Error();
      }

    } catch (error) {
      toast.error("😭Falha no Sistema Tente novamente 😭")
    }

  }

    return(
        <div>
      <Container>
        <div className="container-top">
         <h3 className="title">Resumo do Pedido</h3>
         <p className="items">Items</p>
         <p className="items-price">{formatPrice(finalPrice)}</p>
         <p className="delivery-tax">Taxa de Entregas</p>
         <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
            <p>Total</p>
            <p>{formatPrice(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button onClick={submitOrder}>Finalizar Pedido</Button>
      </div>

    );
  }