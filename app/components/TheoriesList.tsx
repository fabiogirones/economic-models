import React from "react";
import { economicTheories } from "../mockdatabase/economicTheories";
import { Col, Divider, Row } from "antd";

export default function TheoriesList() {
  const groupedTheories = economicTheories.reduce((acc, theory) => {
      const firstLetter = theory.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
          acc[firstLetter] = [];
      }
      acc[firstLetter].push(theory);
      return acc;
  }, {} as Record<string, string[]>);

  return (
    <div>
        {Object.keys(groupedTheories).sort().map(letter => (
            <React.Fragment key={letter}>
                <h2 style={{ fontWeight: 600 }}>{letter}</h2>
                <Row>
                    {groupedTheories[letter].map((theory, index) => (
                        <Col span={8} key={index}>
                            <ul>
                                <li>{theory}</li>
                            </ul>
                        </Col>
                    ))}
                </Row>
                <Divider />
                <br />
            </React.Fragment>
        ))}
    </div>
    );
}
