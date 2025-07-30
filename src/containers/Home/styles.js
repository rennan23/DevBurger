import styled from "styled-components";
import MenuHome from "../../assets/Menu-home.png"
import Fundo2 from "../../assets/fundo2.png"


export  const Banner = styled.div`

background:url("${MenuHome}");
background-size: cover;
background-position:center;
height:450px;

h1{
    font-family:"Road Rage", sans-serif;
    font-size:80px;
    color:#f4f4f4;
    position:absolute;
    right:20%;
    top:10%;
}

`

export  const Container1= styled.section`
background: linear-gradient(
rgba(255,255,255,0.5),
rgba(255,255,255,0.5)
    ),
    url(${Fundo2});

`

