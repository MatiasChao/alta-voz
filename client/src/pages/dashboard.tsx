import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
import { withProtected } from "../hooks/route";

const Dashboard = ({auth}: {auth: any}) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Article userId={auth?.user?.user?.uid} />
        </div>
    )
}

export default withProtected(Dashboard);