import * as React from 'react';

export interface IFooterProps {
}

export default function Footer (props: IFooterProps) {
   
    const footerStyle = {
        width: "100%",
        height: "80px",
        backgroundColor: "#DDDDDD"
    }

  return (
    <div style={footerStyle}>
      <p>Test</p>
    </div>
  );
}
