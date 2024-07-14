import React from "react";
import { Col, Row } from "antd";
import Image from "next/image";

export default function Contributors() {

  const logoStyle = {
    paddingTop: 15
  }

  return (
    <div style={{ marginLeft: "5%", marginRight: "5%", marginTop: 60, minHeight:700}}>
        <Row style={{ display: 'block' }}>
          <h1>Made by economists. For economists.</h1>
          <h2>A list of contributing individuals and organizations</h2>
        </Row>
        <Row>
          <div style={logoStyle}>
            <p style={{float:"left", marginTop:6, marginRight:5}}>The </p>
            <Image style={{float:"left"}} alt='logo-the-inner-team' src={"/logo_the_inner_team.png"} width={100} height={50} />
            <p style={{float:"left", marginTop:6, marginLeft:5}}> Team</p>
          </div>
        </Row>
    </div>
);
}
