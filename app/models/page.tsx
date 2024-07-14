import React from "react";
import { Col, Row } from "antd";
import TheoriesList from "../components/ModelsByBranch";
import Link from "next/link";
import ModelsByBranch from "../components/ModelsByBranch";

export default function Models() {

  return (
    <div style={{marginTop: "30px", minHeight:"800px"}}>
      <ModelsByBranch />
    </div>
);
}
