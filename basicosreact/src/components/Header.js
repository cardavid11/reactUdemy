import React from 'react';
const Header = (props) => {
    return (
        <header>
            <h1>
                {props.titulo}
            </h1>
        </header>
    );
}

// const Header = ({titulo}) => {
//     return (
//         <header>
//             <h1>
//                 {titulo}
//             </h1>
//         </header>
//     );
// }
export default Header;