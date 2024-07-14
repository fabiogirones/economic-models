"use client"
import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Checkbox, Col, Divider, Row, Slider, Table } from "antd";
import type { CheckboxProps } from 'antd';
import { HomeOutlined, ProjectOutlined, UserOutlined } from '@ant-design/icons';
import MathJax from 'react-mathjax2';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface DataPoint {
  quantity: number;
  price: number;
}

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
    height:"600px",
    padding: "10px 10px"
  }

  const [elasticity, setElasticity] = useState<number>(-1);
  let [a, setA] = useState<number>(1);
  const [data, setData] = useState<DataPoint[]>([]);
  const prices = [5, 4, 3, 2, 1, 0];

  useEffect(() => {
    const newData = prices.map((price, index) => ({
      quantity: a + (-elasticity) * price,
      price,
    }));
    setData(newData);
  }, [elasticity, a]);

  const handleChange = (value: number) => {
    setElasticity(value);
  };

  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const increaseDemand = () => {
    setA(prevA => prevA + 1);
  };

  const decreaseDemand = () => {
    setA(prevA => prevA - 1);
  };
  
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

  const formula = 'Q = a - bP';
  const formula_elasticity = 'ε = ((dQ)/(dP))*(P/Q)';

  return (
    <div style={container}>
      <Breadcrumb
      style={{marginBottom:20}}
        items={[
          {
            href: '/',
            title: <HomeOutlined />,
          },
          {
            href: '/models',
            title: (
              <>
                <ProjectOutlined />
                <span>Models</span>
              </>
            ),
          },
          {
            title: 'Demand',
          },
        ]}
      />
        <Row gutter={[16,16]}>
          <Col span={4}>
            <div style={containerFilter}>
              <p>Theory: Supply and demand</p>
              <p>Model: Demand</p>
              <Divider />
              <h2>Elasticity</h2>
              <Slider value={elasticity} onChange={handleChange} min={-10} max={0} />
              <Divider />
              <Button onClick={increaseDemand} style={{color:"green", width:"100%", marginBottom:10}}>Increase demand</Button>
              <Button onClick={decreaseDemand} danger style={{width:"100%"}}>Decrease demand</Button>
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
              <h2>Elasticity: {elasticity}</h2>
              <LineChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis label="Quantity demanded" ticks={[0,10,20,30,40,50]} />
                <YAxis dataKey="quantity" label={{ value: "Price (dollars)", angle: -90, position: 'insideLeft' }} ticks={[0,1,2,3,4,5]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
              </LineChart>
              <h2>Additional info</h2>
              <p>If demand changes without a change in prices, the whole demand curve shifts</p>
              <ul>
                <li>Prices of related goods</li>
                <li>Income</li>
                <li>Preferences</li>
                <li>Size of the population (market)</li>
                <li>Expectations about the future (prices)</li>
              </ul>
              <h2>Empirically  proven? <b>No</b></h2>
              <h2>Recommended research</h2>
              <h2>Recommended books</h2>
              </Col>
              <Col span={12}>
                <Table pagination={false} dataSource={data} columns={columns} />
                <MathJax.Context input='ascii'>
                  <div style={{marginTop:20, marginBottom:20}}>
                      <h2>Demand function</h2>
                      <MathJax.Node>{formula}</MathJax.Node>
                      <p>Q = linear demand curve</p>
                      <p>a = factors influencing demand besides price</p>
                      <p>b = slope</p>
                      <p>P = price</p>
                  </div>
                </MathJax.Context>
                <MathJax.Context input='ascii'>
                  <div>
                    <h2>Elasticity function</h2>
                    <MathJax.Node>{formula_elasticity}</MathJax.Node>
                  </div>
                </MathJax.Context>
              </Col>
            </Row>
          </Col>
        </Row>
    </div>
);
}
