import React from "react";


function Footer() {

    const copyright = new Date(); 
    return (
        <footer>
            <p>Copyright ⓒ{copyright.getFullYear()}</p>  
        </footer>
    )
}

export default Footer;