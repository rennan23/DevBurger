import Fundo from "../../assets/fundo.png";
import Fundo2 from "../../assets/fundo2.png"
import styled from "styled-components";

export const Container = styled.div`
width:100%;
background: linear-gradient(
rgba(255,255,255,0.5),
rgba(255,255,255,0.5)
    ),
    url(${Fundo2});
min-height:100vh;
`;

export const Banner = styled.div`
background:url("${Fundo}");
background-color:#1f1f1f;
background-size:cover;
background-position:center;
display:flex;
align-items:center;
justify-content:center;
position:relative;

height:180px;

img{
    height:135px;
}
`;

export const Title = styled.h1`
font-size:32px;
font-weight:800;
padding-bottom:12px;
color:#228B22;
text-align:center;
position:relative;


&::after{
 position:absolute;
 left:calc(50% + -28px);
 bottom:0;
 content:"";
 width:56px;
 height:4px;
 background-color:#228B22;
}

`;

export const Content = styled.div`
display:grid;
grid-template-columns:1fr 30%;
gap:40px;
width:100%;
max-width:1280px;
padding:40px;
margin:0 auto;
`;