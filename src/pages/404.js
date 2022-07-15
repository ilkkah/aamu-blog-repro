import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Default404 = ({location}) => {
    return (
        <Layout location={location}>
            <div style={{ display: `flex`, flexDirection: `column`, height: `50vh`, padding: `1rem` }}>
                <div style={{flex: `1`}}>
                    <p style={{textAlign: `center`}}>Whoops! Page Not Found</p>
                </div>
            </div>
        </Layout>
    )
}

export default Default404;