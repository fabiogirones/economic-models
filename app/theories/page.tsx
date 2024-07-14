import React from "react";
import { Col, Row } from "antd";
import TheoriesList from "../components/ModelsByBranch";
import Link from "next/link";

export default function Models() {

  return (
    <div style={{marginLeft:"5%", marginRight:"5%", marginTop: "30px", minHeight:"800px"}}>
      <h1>Economic theories</h1>
      <Link href={"/theory/supplyanddemand"}>Supply and demand</Link>
    </div>
);
}
