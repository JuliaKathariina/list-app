import styled from 'styled-components';


function Items({ filter, toShoppingCart }) {

    return (
        <Wrapper>
            {
                filter.map((itemName) => { return <StyledBtn key={itemName._id} onClick={() => toShoppingCart(itemName)}>{itemName.name.de}</StyledBtn> })
            }
        </Wrapper >
    )
}

const Wrapper = styled.div`
margin-top: 2rem;
padding: 20px;
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

export default Items