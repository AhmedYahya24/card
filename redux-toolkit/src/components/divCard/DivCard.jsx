import { Col } from 'antd'
import React from 'react'

const DivCard = ({info}) => {
    return (
        <Col className="gutter-row" span={4}>
            <div>
                <h3>{info.title}</h3>
                <p>{info.description}</p>
            </div>
        </Col>
    )
}

export default DivCard