import styled from "styled-components";

export const Body = styled.div`
background-color:#ffff;
min-height:100vh ;
`
export const Header = styled.header`
height:50px ;
display:flex ;
align-items:center ;
border-bottom: solid 2px #000000;
padding-left:30px ;
`

export const HeaderTitle = styled.h1`
font-family:Arial;
`

export const Menu = styled.nav`
display:flex ;
flex-direction:column ;
align-items: start ;
border:solid 2px #000000;
border-top:none ;
width:200px;
height:200px;
padding-left:10px ;
`

export const MenuButon = styled.button`
font-family:Arial;
font-size:16px;
color:#000000;
border:none;
background-color:#ffff;
cursor: pointer;
margin:7px 0;
&:hover{
    color:blue;
    text-decoration:underline ;
}
&:active{
    color:red;
    text-decoration:underline ;
}
`
export const PageContainer = styled.main`
display:flex ;
min-width:100vw;
`

export const TableContainer = styled.section`
width:100% ;
max-width:700px;
margin:auto ;
padding-top:30px ;
`
export const TitleContainer = styled.div`
display:flex;
justify-content:space-between ;
max-width:300px ;
align-items:center ;
`
export const TableTitle = styled.h3`
text-decoration:underline;
font-family:Arial;
color:#000000;
margin-left:20px ;
font-weight:bold ;
`

export const NewButton = styled.button`
border:2px solid #000000;
width:70px ;
height:30px ;
background-color:#fff ;
font-weight:bold ;
cursor: pointer;
`

export const Table = styled.article`
display:flex ;
 margin-top:30px ;
 border:2px solid #000000;
 width:100% ;
 min-height:500px ;
`