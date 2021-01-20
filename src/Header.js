import React, {Component} from 'react';

const Header = function() {
    const headerStyle = {textAlign : 'center',padding:20,backgroundColor: '#000',color: '#fff', textTransform:'uppercase'}
    return (
        <div style={headerStyle}>
        Phone Directory
    </div>
    );
}


// class Header extends Component {
//     render() {
//         return (
//             <div className="abc">
//                     Phone Directory
//                  </div>
//         );
//     }
// }

export default Header;