import styled from "styled-components";
import backgroudMenu from "../../assets/backgroud-menu.png";
import Backburger from "../../assets/burger.avif"
import { Link } from "react-router-dom";

export const Container= styled.div`
width:100%;
min-height:100vh;
background-color:#f0f0f0;
background:url("${Backburger}");
    
`;

export const Banner= styled.div`
     display:flex;
     justify-content: center;
     align-items: center;
     height:480px;
     position:relative;


background:url("${backgroudMenu}")no-repeat;
background-color:#1f1f1f;
background-position:center;
background-size:cover;


h1{
font-family: "Road Rage", sans-serif;
font-size:80px;
line-height:65px;
color:#fff;
position: absolute;


right:20%;
top:30%;
   
span{
       display: block;
       color:#cf3057 ;
       font-size:20px;
}
button{

   
       
       
       font-size:16px;
       
       background-color:#cf3057;
       border-radius:16px;
       border:none;
}


}


`;



export const CategoryMenu= styled.div`
display: flex;
justify-content:center;
gap:50px;
margin-top:30px;


`;

export const CategoryButton= styled(Link)`
text-decoration:none;
text-align:center;
background-color:#9758a6;
width:50%;
height:50px;
border:0;
border-radius:20px;
font-size:30px;
font-weight:500;

color:#ffffff;


&:hover{
background-color:${(props) => props.$isActiveCategory && "#cf3057"};

}




`;

export const ProductsContainer= styled.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  padding:40px;
  gap:60px;
  justify-content:center;
  max-width:1280px;
  margin:50px auto 0;
 


`;