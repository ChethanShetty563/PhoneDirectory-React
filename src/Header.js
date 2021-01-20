import React from 'react';
import './Header.css';

const Header = function(props) {
    return (
        <div className="header">
        {props.heading}
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