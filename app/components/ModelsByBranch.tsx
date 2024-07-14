import { Col, Divider, Row } from "antd";
import Link from "next/link";
import React from "react";

export default function ModelsByBranch() {
    const container = {
        marginLeft:"5%", 
        marginRight:"5%", 
        marginBottom: "30px",
        minHeight: "800px",
    }

  return (
    <div style={container}>
        <h1>Economics Models by Branch</h1>
        <Divider />

        <Row gutter={[16,16]}>
            <Col span={12}>
                <h2>Microeconomics</h2>
                <ul>
                    <li><Link href="/models/supply"><strong>Supply Model</strong></Link>: Analyzes the relation between price and quantity supplied.</li>
                    <li><Link href="/models/demand"><strong>Demand Model</strong></Link>: Analyzes the relation between price and quantity demanded.</li>
                    <li><strong>Supply and Demand Model</strong>: Analyzes how prices and quantities are determined in competitive markets.</li>
                    <li><strong>Consumer Choice Model</strong>: Examines how consumers maximize utility subject to budget constraints.</li>
                    <li><strong>Production Function</strong>: Describes the relationship between inputs and outputs in production.</li>
                    <li><strong>Game Theory Models</strong>: Studies strategic interactions among rational decision-makers.</li>
                </ul>
            </Col>
            <Col span={12}>
                <h2>Macroeconomics</h2>
                <ul>
                    <li><strong>IS-LM Model</strong>: Integrates the real and monetary sectors to analyze interest rates and output.</li>
                    <li><strong>AD-AS Model</strong>: Explains the interaction between aggregate demand and aggregate supply.</li>
                    <li><strong>Philips Curve</strong>: Shows the relationship between inflation and unemployment.</li>
                    <li><strong>Solow Growth Model</strong>: Analyzes long-term economic growth based on capital accumulation, labor, and technological progress.</li>
                </ul>
            </Col>
            <Divider />
        </Row>

        <Row gutter={[16,16]}>
            <Col span={12}>
                <h2>Behavioral Economics</h2>
                <ul>
                    <li><strong>Prospect Theory</strong>: Describes how people choose between probabilistic alternatives involving risk.</li>
                    <li><strong>Behavioral Game Theory</strong>: Integrates psychological insights into game theory.</li>
                </ul>
            </Col>
            <Col span={12}>
                <h2>Development Economics</h2>
                <ul>
                    <li><strong>Lewis Model</strong>: Describes the process of structural change from a traditional agricultural economy to a modern industrial one.</li>
                    <li><strong>Harrod-Domar Model</strong>: Analyzes the relationship between savings, investment, and economic growth in developing countries.</li>
                </ul>
            </Col>
            <Divider />
        </Row>

        <Row gutter={[16,16]}>
            <Col span={12}>
                <h2>Labor Economics</h2>
                <ul>
                    <li><strong>Human Capital Model</strong>: Examines investments in education and training and their impact on earnings.</li>
                    <li><strong>Search and Matching Model</strong>: Analyzes the process of job search and matching between workers and firms.</li>
                </ul>
            </Col>
            <Col span={12}>
                <h2>Environmental Economics</h2>
                <ul>
                    <li><strong>Coase Theorem</strong>: Explains how private negotiations can address externalities under certain conditions.</li>
                    <li><strong>Environmental Kuznets Curve</strong>: Hypothesizes an inverted U-shaped relationship between environmental degradation and income per capita.</li>
                </ul>
            </Col>
            <Divider />
        </Row>

        <Row gutter={[16,16]}>
            <Col span={12}>
                <h2>Health Economics</h2>
                <ul>
                    <li><strong>Grossman Model of Health Demand</strong>: Analyzes how individuals allocate resources to improve and maintain their health.</li>
                    <li><strong>RAND Health Insurance Experiment</strong>: Studies the impact of different levels of health insurance coverage on healthcare demand and outcomes.</li>
                </ul>
                <Divider />
            </Col>

            <Col span={12}>
                <h2>International Economics</h2>
                <ul>
                    <li><strong>Ricardian Trade Model</strong>: Analyzes comparative advantage and the benefits of trade.</li>
                    <li><strong>Heckscher-Ohlin Model</strong>: Explains trade patterns based on countries' factor endowments.</li>
                    <li><strong>Gravity Model of Trade</strong>: Describes bilateral trade flows based on economic size and distance between countries.</li>
                </ul>
                <Divider />
            </Col>
        </Row>

        <Row gutter={[16,16]}>
            <Col span={12}>
                <h2>Public Economics</h2>
                <ul>
                    <li><strong>Laffer Curve</strong>: Shows the relationship between tax rates and tax revenue.</li>
                    <li><strong>Tiebout Model</strong>: Explains how individuals "vote with their feet" by moving to jurisdictions that provide their preferred mix of public goods and taxation.</li>
                </ul>
            </Col>
            <Col span={12}>
                <h2>Urban Economics</h2>
                <ul>
                    <li><strong>Alonso Model</strong>: Describes land use in urban areas based on bid-rent curves.</li>
                    <li><strong>Central Place Theory</strong>: Analyzes the distribution of cities and towns based on their size and services.</li>
                </ul>
            </Col>
            <Divider />
        </Row>

        <Row gutter={[16,16]}>
            <Col span={12}>
                <h2>Agricultural Economics</h2>
                <ul>
                    <li><strong>Cobweb Model</strong>: Analyzes price fluctuations in agricultural markets due to supply and demand lags.</li>
                    <li><strong>Von Thünen Model</strong>: Describes agricultural land use based on distance from the market.</li>
                </ul>
            </Col>
            <Col span={12}>
                <h2>Industrial Organization</h2>
                <ul>
                    <li><strong>Structure-Conduct-Performance (SCP) Paradigm</strong>: Examines the relationship between market structure, firm conduct, and market performance.</li>
                    <li><strong>Cournot and Bertrand Models</strong>: Analyze competition among firms in an oligopoly setting.</li>
                </ul>
            </Col>
            <Divider />
        </Row>

        <Row gutter={[16,16]}>
            <Col span={12}>
                <h2>Institutional Economics</h2>
                <ul>
                    <li><strong>Transaction Cost Theory</strong>: Explains the existence and boundaries of firms based on transaction costs.</li>
                    <li><strong>Principal-Agent Model</strong>: Analyzes relationships where one party (the principal) delegates work to another (the agent).</li>
                </ul>
            </Col>

            <Col span={12}>
                <h2>Econometrics</h2>
                <ul>
                    <li><strong>Ordinary Least Squares (OLS) Regression</strong>: A method for estimating the relationships among variables.</li>
                    <li><strong>Vector Autoregression (VAR)</strong>: Analyzes the dynamic relationship between multiple time series variables.</li>
                </ul>
            </Col>
            <Divider />
        </Row>

        <Row gutter={[16,16]}>
            <Col span={12}>
                <h2>Financial Economics</h2>
                <ul>
                    <li><strong>CAPM (Capital Asset Pricing Model)</strong>: Describes the relationship between risk and expected return.</li>
                    <li><strong>Black-Scholes Model</strong>: Provides a framework for pricing options.</li>
                </ul>
            </Col>
            <Col span={12}>
            <h2>Experimental Economics</h2>
            <ul>
                <li><strong>Public Goods Game</strong>: Studies cooperation and free-riding in the provision of public goods.</li>
                <li><strong>Ultimatum Game</strong>: Analyzes fairness and negotiation behavior.</li>
            </ul>
            </Col>
            <Divider />
        </Row>

        <h2>Neuroeconomics</h2>
        <ul>
            <li><strong>Expected Utility Theory</strong>: Examines decision-making under risk and uncertainty.</li>
            <li><strong>Temporal Discounting Models</strong>: Study how people value rewards at different points in time.</li>
        </ul>
        <Divider />
    </div>
    );
}
