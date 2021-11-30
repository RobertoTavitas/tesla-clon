import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


function Header() {

    const [burgerState, setBurgerState] = useState(false);


    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <a href="#model-s">Model S</a>
                <a href="#model-3">Model 3</a>
                <a href="#model-x">Model X</a>
                <a href="#model-y">Model Y</a>
                <a href="#solar-roof">Solar Roof</a>
                <a href="#solar-panels">Solar Panels</a>
                <a href="#accesories">Accesories</a>
              
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#"> Account</a>
                <CustomMenu onClick={ () => setBurgerState(true) } />
            </RightMenu>
            <BurgerNav show={ burgerState } >
                <CloseWraper>
                    <CustomClose onClick={ () => setBurgerState(false) } />
                </CloseWraper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Test-Drive</a></li>
                <li><a href="#">cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Investor Relations</a></li>
            </BurgerNav>
        </Container>
    )
 }

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a {
        font-weight: 550;
        font-size: 15px;
        padding: 0 14px;
        flex-wrap: no-wrap;
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    a {
        font-weight: 500;
        // text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li {
        padding: 20px 0 0 20px;
        // border-bottom: 1px solid rgba(0, 0, 0, .2);

        a{
            font-weight: 550;
            font-size: 15px;
        }
    a:hover{
        border-radius: 10px;
        background-color: rgba(0, 0, 0, .10);
        padding: 0 20% 0 10px;

    }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWraper = styled.div`
    display: flex;
    justify-content: flex-end;
`