import styled from "styled-components"

export const Body = styled.div`
background-color:#ffff;
min-height:100vh ;
`

export const Header = styled.header`
height:50px ;
display:flex ;
align-items:center ;
border-bottom: solid 2px #000000;
justify-content:center ;
`

export const HeaderTitle = styled.h1`
font-family:Arial;`

export const PageContainer = styled.main`
display:flex ;
min-width:100vw;
`

export const Menu = styled.nav`
display:flex ;
flex-direction:column ;
align-items: start ;
border-right:solid 2px #000000;
border-top:none ;
width:200px;
min-height:calc(100vh - 50px) ;
padding-left:10px ;
`

export const MenuTitle = styled.h3`
font-weight:normal ;
margin:15px 10px ;
`

export const MenuButon = styled.button`
font-family:Arial;
font-size:14px;
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

export const AdvertasimentContainer = styled.section`
width:100% ;
margin:0 30px ;
`

export const MainAdvertisement = styled.article`
display:flex ;
height:240px ;
justify-content:space-between ;
border-bottom:1px solid #000000 ;
align-items:center ;
gap:30px ;
`

export const MainAdvertisementImage = styled.img`
height:140px ;
width:400px ;
`

export const MainAdvertisementDescriptionContainer = styled.div`
display:flex ;
flex-direction:column ;
height:140px ;
width:100% ;
justify-content:space-between ;
`

export const MainAdvertisementDescriptionPriceText = styled.p`
font-weight:bold ;
font-size:30px ;
`

export const MainAdvertisementDescription = styled.p`
font-size:16px ;
`

export const MainAdvertisementButton = styled.button`
background-color:#fff ;
border:solid 1px #000000 ;
width:100px ;
height:50px ;
cursor: pointer;
font-size:20px ;
font-weight:bold ;
`

export const SubAdvertisement = styled.article`
display:flex ;
height:240px ;
width:100% ;
justify-content:space-between ;
align-items:center;
`

export const SubAdvertisementImage = styled.img`
height:140px ;
width:140px ;
`

export const SubAdvertisementDescriptionContainer = styled.div`
display:flex ;
flex-direction:column ;
height:100px ;
width:100% ;
justify-content:space-between ;
`

export const SubAdvertisementDescriptionTitle = styled.p`
font-weight:bold ;
font-size:20px ;
width:100% ;
`

export const SubAdvertisementSmallDescription = styled.p`
font-size:14px ;
`

export const SubAdvertisementItalicDescription = styled.p`
font-size:14px ;
font-style:italic ;
font-weight:bold ;
`
export const SubAdvertisementButton = styled.button`
width:50% ;
align-self:center ;
background-color:#ffff ;
border:1px solid #000000 ;
height:50px ;
font-size:20px ;
font-weight:bold ;
font-style:italic ;
cursor: pointer;
`

export const VerticalDivider = styled.div`
height:100% ;
border:1px solid #000000 ;
margin: 80px 70px 0 0;
`
export const FooterMessage = styled.p`
position:absolute ;
bottom: 2% ;
left: 50%;
transform: translateX(-50%);
`

export const SubAdvertisementContainer = styled.div`
display:flex ;
flex-direction:column ;
width:100% ;
`

export const SubAdvertisementItem = styled.div`
display:flex ;
width:100% ;
`


export const SubAdvertisementMediumDescription = styled.p`
font-size:18px ;
`

export const ClickAbleText = styled.a`
font-size:14px ;
`

export const BorderedText = styled.p`
color:red ;
border:1px solid #000000 ;
width:110px ;
height:40x ;
font-size:20px ;
padding:5px ;
`

export const ProductsCarousel = styled.section`
display:flex ;
border:1px solid #000000 ;
height:100px ;
margin-top:20px ;
justify-content:space-between ;
`

export const CarouselButton = styled.button`
background-color:#fff ;
border:none ;
cursor: pointer;
align-self:center ;
`

export const carouselProductContainer = styled.div`
display:flex ;
flex-direction:column ;
justify-content:center ;
`

export const carouselProductPrice = styled.p`
font-weight:bold ;
align-self:center ;
`