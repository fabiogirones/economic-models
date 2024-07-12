"use client"
import React from "react";
import { Checkbox, Col, Divider, Row, Slider, Table } from "antd";
import type { CheckboxProps } from 'antd';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Demand() {
  const container = {
    marginLeft:"5%", 
    marginRight:"5%", 
    marginTop: "30px", 
    marginBottom: "30px",
    minHeight: "800px"
  }

  const containerFilter = {
    backgroundColor: "#FAFAFA", 
    width: "100%", 
    height:"500px",
    padding: "10px 10px"
  }

  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const dataSource = [
    {
      key: '1',
      price: 4,
      quantity: 10,
    },
    {
      key: '2',
      price: 3,
      quantity: 20,
    },
    {
      key: '3',
      price: 2,
      quantity: 30,
    },
    {
      key: '4',
      price: 1,
      quantity: 40,
    },
  ];
  
  const columns = [
    {
      title: 'Price (dollars)',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity demanded',
      dataIndex: 'quantity',
      key: 'quantity',
    },
  ];

  return (
    <div style={container}>
        <Row gutter={[16,16]}>
          <Col span={4}>
            <div style={containerFilter}>
              <p>Theory: Supply and demand</p>
              <p>Model: Demand</p>
              <Divider />
              <h2>Elasticity</h2>
              <Slider defaultValue={30} />
              <Divider />
              <h2>Assumptions</h2>
              <Checkbox defaultChecked={true} onChange={onChange}>Homogeneous good</Checkbox>
              <Checkbox defaultChecked={true} onChange={onChange}>No market power</Checkbox>
              <Checkbox defaultChecked={true} onChange={onChange}>No information asymmetry</Checkbox>
              <Checkbox defaultChecked={true} onChange={onChange}>Large number of buyers and sellers</Checkbox>
              <Checkbox defaultChecked={true} onChange={onChange}>Free entry and exit</Checkbox>
              <Checkbox defaultChecked={true} onChange={onChange}>Rational and optimizing behavior</Checkbox>
              <Checkbox defaultChecked={true} onChange={onChange}>Market function in isolation</Checkbox>
            </div>
          </Col>
          <Col span={20}>
            <h1>Demand-curve</h1>
            <Row>
              <Col span={12}>
              <LineChart
                xAxis={[{ data: [10, 20, 30, 40] }]}
                series={[
                  {
                    data: [4, 3, 2, 1],
                  },
                ]}
                width={500}
                height={300}
              />
              </Col>
              <Col span={12}>
                <Table dataSource={dataSource} columns={columns} />
              </Col>
            </Row>
            <h2>Empirically  proven? <b>No</b></h2>
            <h2>Recommended research</h2>
            <h2>Recommended books</h2>
          </Col>
        </Row>
    </div>
);
}
