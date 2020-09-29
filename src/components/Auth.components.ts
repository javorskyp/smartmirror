import styled from 'styled-components'

export const AuthForm = styled.form`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 100px;
`;

export const UpperLeftCorner = styled.div `
width: 350px;
height: 100px;
margin: 30px 0 0 48px;
`
export const ULCTitle = styled.div `
margin: 40px 0 0 41px;
text-align: left;
font: normal normal 300 40px/48px Lato;
letter-spacing: 0.16px;
color: #FFFFFF;
opacity: 1;
`

export const TitleLineUp = styled.div `
margin-left: 45px;
width: 300px;
height: 0px;
border: 1px solid #707070;
opacity: 1;
`
export const TitleLineDown = styled.div `
margin-top: 5px;
margin-left: 15px;
width: 300px;
height: 0px;
border: 1px solid #707070;
opacity: 1;

`
export const Button = styled.button `
width: 245px;
height: 38px;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 1px;
background: black;
color: var(--LightThemeSpi);
border: 1px solid #32dfff;
:hover {
cursor: pointer;
}
`

export const Input = styled.input `
font-size: 15px;
margin: 1em;
height: 38px;
width: 245px;
padding: 10px;
background: #000000 0% 0% no-repeat padding-box;
border: 1px solid #32dfff;
opacity: 1;
color: white;
:hover {
cursor: pointer;
}
:focus {
background: black;
}
`