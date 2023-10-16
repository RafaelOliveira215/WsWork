import styled from "styled-components";

export const NameContainer = styled.div`
border:2px solid #000000 ;
padding-top:20px ;
flex:3 ;
`
export const AttributesContainer = styled.div`
border:2px solid #000000 ;
padding-top:20px ;
flex:1 ;
display:flex ;
flex-direction:column ;
align-items:center ;
`

export const NameDescription = styled.p`
font-size:18px ;
margin-left:20px ;
margin-bottom:20px ;
`

export const AttributesDescription = styled.p`
font-weight:bold ;
font-size:18px ;
margin-bottom:20px ;
display:flex ;
justify-content:space-between ;
align-items:center ;
min-width: 85px ;
`

export const TableCollum = styled.div`
margin:10px 0 ;
`

export const ButtonContainers = styled.div`

`
export const EditButton = styled.button`
background-color:#fff ;
width:60px ;
height:20px ;
border:1px solid #000000 ;
font-weight:bold ;
font-size:16px ;
cursor: pointer;
`

export const DeleteButton = styled.button`
background-color:red ;
font-weight:bold ;
width:18px ;
height:18px ;
border:1px solid #000000 ;
color:#fff;
cursor: pointer;
`
