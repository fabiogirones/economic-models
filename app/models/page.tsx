import React from "react";
import { Col, Row } from "antd";
import TheoriesList from "../components/ModelsByBranch";
import Link from "next/link";

export default function Models() {

  return (
    <div style={{marginLeft:"5%", marginRight:"5%", marginTop: "30px", minHeight:"800px"}}>
      <h1>Economic models</h1>
      <Link href={"/models/supply"}>Supply</Link><br/>
      <Link href={"/models/demand"}>Demand</Link><br/>
      <Link href={"/models/supplyanddemand"}>Supply and demand</Link>
    </div>
);
}
