import Logo from "../../assets/Logo-1.png"
import { CartItems,CartResume} from "../../components"
import { Banner, Container, Content, Title } from "./styles"
export function Cart() {

     return(
              <Container>
                    <Banner>
                      <img src={Logo} alt ="logo devburger"/>
                    </Banner>
                        <Title>Chekaut - Pedido </Title>
                   <Content>
                            <CartItems/>
                            <CartResume/>
                   </Content>
              </Container>
        

     )

}