import styled from "styled-components";
import fundo from "../../assets/fundo.png"
import fundo2 from "../../assets/fundo2.png"
import { Link as ReactLink } from "react-router-dom";


export const Container = styled.div `
display: flex;
height:100vh;
width:100vw;

`;

export const LeftContainer= styled.div `
background:url("${fundo}");
background-size: cover;
background-position:center;

height:100%;
width:100%;
max-width:50%;

display: flex;
align-items: center;
justify-content: center;

img{
   width:73%;
}

`;

export const RightContainer = styled.div `
display: flex;
justify-content:center;
align-items:center;
flex-direction: column;

height:100%;
width:100%;
max-width:50%;

background:url("${fundo2}");
background-color:#1E1E1E;

p{
   color: #fff;
   font-size:18px;
   font-weight:800;
  a {

   text-decoration: underline;
  }

}

`;

export const Title= styled.h2 `
font-family: "Road Rage", sans-serif;
font-size:40px;
color: #cf3057;


`;

export const Form = styled.form ` 
display: flex;
flex-direction:column;
gap: 20px;
padding:20px ;
width:100%;
max-width:400px;


`;

export const InputContainer = styled.div ` 
display: flex;
flex-direction: column;
gap: 5px;
width:100%;

input{

   width:100%;
   border:none;
   height:52px;
   border-radius:6px;
   padding:0 16px;
}

label {

   font-size: 18px;
   font-weight:600;
   color:#fff;
}
P {
font-size:14PX;
line-height:80%;
color: #cf3057;
font-weight:600;
height:10px;


}

`;
export const Link = styled(ReactLink)`
  text-decoration:none;
 color: #cf3057;

`






