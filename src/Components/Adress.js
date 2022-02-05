import React from "react";
// export const Adress = (props) => {
//     return (
//     <div>
//         <p>{props.adress.country}</p>
//     </div>
//     )
//    } 
   export function Adress(props) {
    return <div>
        <p> Адреса:</p>
        <p> {props.address.street}</p>
        <p>{props.address.city}</p>
        <p>{props.address.postIndex}</p>
        <p>{props.address.country}</p>
    </div>

}