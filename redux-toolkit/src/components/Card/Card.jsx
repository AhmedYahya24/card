import React, { Fragment, useEffect, useState } from 'react';
import { Divider, Row } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './Card.css';
import DivCard from '../divCard/DivCard';

const Card = () => {
    const [info, setInfo]= useState(null);
    const data = useSelector(state => state.user.userData);

    useEffect(() => {
        const getUsers = async (dispatch)=>{
        const {data} = await axios.get('http://localhost:5000/posts');
        setInfo(data)
    }
    getUsers()

    }, [data])
    console.log(info);
    return (
        <div className='card-container'>
        <Divider orientation="center">Cards</Divider>
                    {info ?  info.map(card =>{
                        return(
                            <Fragment>
                                <Row justify="space-around" align='Vertical alignment' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                    <DivCard key={card.id}  info={card}/>  
                                </Row>
                            </Fragment>
                        )
                    }) : <div> loading... </div>}           
        </div>
    )
}

export default Card