import { Col, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { getData } from '../helpers/getData';

import CardPersonaje from './card';



const ApiFetch = () => {
    const url = "https://rickandmortyapi.com/api/character";
    const [state, setState] = useState({
        loading: true,
        data: []
    })

    const { loading, data } = state;

    const getDataApi = async () => {
        let response = await getData(url);

        setState({
            loading: false,
            data: response
        })
    }

    useEffect(() => {
        getDataApi();
    }, [])

    return (
        <>
            {
                loading &&
                <div style={{ display: "flex", height: '100vh', justifyContent: "center", alignItems: "center" }}>
                    <Spin size="large" />
                </div>
            }
            <div className="site-card-wrapper">
                <Row gutter={16}>

                    {
                        data?.map(item => {
                            const { id, name } = item;
                            return (
                                <Col span={8} key={id}>
                                    <CardPersonaje personaje={item} />
                                </Col>
                            )
                        })
                    }

                </Row>
            </div>



        </>
    )
}

export default ApiFetch; 