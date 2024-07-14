import Image from 'next/image';
import * as React from 'react';

export interface IFooterProps {
}

export default function Footer (props: IFooterProps) {
   
    const footerStyle = {
        width: "100%",
        height: "80px",
        backgroundColor: "#DDDDDD"
    }

    const logoStyle = {
      marginLeft: "5%",
      paddingTop: 15
    }

  return (
    <div style={footerStyle}>
      <div style={logoStyle}>
        <p style={{float:"left", marginTop:6, marginRight:5}}>An </p>
        <Image style={{float:"left"}} alt='logo-the-inner-team' src={"/logo_the_inner_team.png"} width={100} height={50} />
        <p style={{float:"left", marginTop:6, marginLeft:5}}> Team Project.</p>
      </div>
    </div>
  );
}
