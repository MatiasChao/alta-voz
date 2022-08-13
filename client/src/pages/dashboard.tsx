import React from 'react';
import { withProtected } from "../hooks/route";
import Layout from '../components/Layout';

const Dashboard = ({auth}: {auth: any}) => {

    return (
       <Layout auth={auth} />
    )
}

export default withProtected(Dashboard);