import * as S from "./styles";
import { useState } from "react";
// let tableItens = [
//     { id: 1, name: "Red Apple", price: "1.99" },
//     { id: 2, name: "Green Salad", price: "4.66" },
//     { id: 3, name: "Water jar", price: "3.66" },
//     { id: 4, name: "Natural supplement 1", price: "7.86" },
//     { id: 5, name: "Natural supplement 2", price: "5.00" },
//     { id: 6, name: "Banana`s Juice", price: "4.77" },
//     { id: 7, name: "Natural Orange Juice", price: "3.21" },
// ];
export default function Table() {
    const [tableItens, setTableItens] = useState([
        { id: 1, name: "Red Apple", price: "1.99" },
        { id: 2, name: "Green Salad", price: "4.66" },
        { id: 3, name: "Water jar", price: "3.66" },
        { id: 4, name: "Natural supplement 1", price: "7.86" },
        { id: 5, name: "Natural supplement 2", price: "5.00" },
        { id: 6, name: "Banana`s Juice", price: "4.77" },
        { id: 7, name: "Natural Orange Juice", price: "3.21" },
    ]);

    const deleteItem = (id) => {
        const newData = tableItens.filter(item => item.id !== id);
        setTableItens(newData);
    };
    return (
        <>
            <S.NameContainer>
                {tableItens.map((item) => {
                    return (
                        <S.NameDescription>{item.name}</S.NameDescription>
                    )
                })}
            </S.NameContainer>
            <S.AttributesContainer>
                {tableItens.map((item) => {
                    return (
                        <S.AttributesDescription>$ {item.price}</S.AttributesDescription>
                    )
                })}
            </S.AttributesContainer>
            <S.AttributesContainer>
                {tableItens.map((item) => {
                    return (
                        <S.AttributesDescription><S.EditButton onClick={() => console.log(item.id)}>Edit</S.EditButton><S.DeleteButton onClick={() => deleteItem(item.id)}>X</S.DeleteButton></S.AttributesDescription>


                    )
                })}
            </S.AttributesContainer>
        </>
    );
}
