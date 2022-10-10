import styled from 'styled-components';

function ShoppingCart({ Cart, removeFromShoppingCart }) {
    return (
        <StyledShoppingCart>
            <Headline>Einkaufsliste</Headline>
            {
                Cart.map((active) => { return <StyledBtn key={active._id} onClick={() => removeFromShoppingCart(active)}>{active.name.de}</StyledBtn> })
            }
        </StyledShoppingCart>
    )
}

const StyledShoppingCart = styled.div`
padding: 20px;
`
const Headline = styled.h1`
color: var(--textColor);
margin-top: 2rem;
margin-bottom: 2rem;
`
const StyledBtn = styled.button`
padding: 10px;
margin: 7px;
background-color: var(--backgroundColor);
color: var(--textColor);
font-size: 1rem;
border: 0;
box-shadow: 0 0 10px black;
:hover {
    font-size: 1.1rem;
    transition: all .3s;
}
`

export default ShoppingCart