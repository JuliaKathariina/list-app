import styled from 'styled-components'


function Input({ setInputFieldData, filterList }) {

    const inputValue = (e) => {
        setInputFieldData(e.target.value)
        filterList();
    }

    return (

        <Wrapper>
            <StyledInput name="text" type="text" placeholder='Search for Items...' onChange={inputValue} />
        </Wrapper>
    )
}


const Wrapper = styled.div`
margin-top: 3rem;
`
const StyledInput = styled.input`
background-color: var(--textColor);
padding: 7px;
width: 300px;
border-radius: 10px;
border: 0;
`

export default Input