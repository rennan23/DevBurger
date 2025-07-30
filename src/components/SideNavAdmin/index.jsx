
import { SignOut } from '@phosphor-icons/react'
import { useResolvedPath } from 'react-router-dom'
import Logo from '../../assets/Logo-1.png'
import {useUser} from'../../hooks/UserContext'
import { navLinks } from "./navLinks"
import { Container, NavLinkContainer,NavLink, Footer, } from './styles'

export function SideNavAdmin(){
       const {logout} = useUser();
    const {pathname} = useResolvedPath();

    return(
           <Container>

            <img src={Logo} alt='Hambuger Logo DevBurger'/>
            <NavLinkContainer>
                {navLinks.map(Link =>(
                       <NavLink  
                       key={Link.id}
                       to={Link.Path} 
                       $isActive={pathname === Link.Path}
                       >

                        {Link.icon}

                        <span>{Link.label}</span>
                           
                       </NavLink>                       
                ))}
            </NavLinkContainer>
               <Footer>

                 <NavLink to="/login" onClick={logout}>
                    <SignOut/>
                    <span>Sair</span>
                 </NavLink>
               </Footer>
           </Container>

    )
}