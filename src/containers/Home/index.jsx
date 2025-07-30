
import { OffersCarousel,CategoriesCarousel } from "../../components";
import { Banner, Container1 } from "./styles";

export function Home (){
return(
 <main>
     <Banner>
    <h1>Bem-Vindo!</h1>
    </Banner>
    <Container1>

      <div>
        <CategoriesCarousel/>
        <OffersCarousel/>
       
      </div>

    </Container1>
 </main>


)


}