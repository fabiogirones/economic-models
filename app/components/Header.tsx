import * as React from 'react';

export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {
   
    const headerStyle = {
        width: "100%",
        height: "80px",
        backgroundColor: "#DDDDDD"
    }

  return (
    <div style={headerStyle}>
      <p>Test</p>
    </div>
  );
}
