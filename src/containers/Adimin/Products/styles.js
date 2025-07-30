import styled from "styled-components";

export const Container = styled.div``;

export const EditeButton = styled.button`
    border:0;
     height:32px;
      width:32px;
       border-radius:9px;
        margin:0 auto;
         display:flex;
          align-items:center;
           justify-content:center;
            background-color:${(props)=> props.theme.darkWhite};
             svg{
                  height:18px;
                   width:18px;
               }
                    &:hover{
                     background-color:${(props)=> props.theme.purple};
                      svg {
                           fill:${(props)=>props.theme.white};
                          }
            }
     
`;

export const ProductImage = styled.img`
  height:80px;
   padding:12px;
    border-radius:16px;
     background-color:#f3f3f3;

`;
