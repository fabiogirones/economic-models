import React from "react";
import { Col, Row } from "antd";
import TheoriesList from "./components/TheoriesList";
import EconomicAnimation from "./components/EconomicAnimation";

export default function Home() {

  return (
    <div>
        <Row style={{marginLeft:"5%", marginRight:"5%"}}>
          <Col style={{marginTop:"60px"}} span={12}>
            <h1>Interactive economic models and theories</h1>
            <h2>Learn by doing. Literally.</h2>
            <p>An open-source project with the main objective to lower the threshold of learning economic models by providing interactivity.</p>
          </Col>
          <Col span={12}>
            <EconomicAnimation />
          </Col>
        </Row>
        <div style={{marginLeft:"5%", marginRight:"5%", marginTop:"30px"}}>
          <TheoriesList />
        </div>
    </div>
);
}
