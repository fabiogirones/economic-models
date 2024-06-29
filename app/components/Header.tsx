import * as React from 'react';
import { Col, Row } from 'antd';
import Link from 'next/link';

export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {
   
    const headerStyle = {
        width: "100%",
        height: "65px",
        backgroundColor: "#FAFAFA",
        paddingTop: "20px",
        paddingLeft: "15px",
    }

  return (
    <div style={headerStyle}>
      <Row>
        <Col span={12}><Link href={"/"} style={{fontWeight:600}}>Interactive economic models and theories</Link></Col> {/* Close the paragraph tag */}
        <Col span={4}><Link href={"/models"}>Models</Link></Col>
        <Col span={4}><Link href={"/theories"}>Theories</Link></Col>
        <Col span={4}><Link href={"/contributors"}>Contributors</Link></Col>
      </Row>
    </div>
  );
}
