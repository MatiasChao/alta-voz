import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuth from './auth';
import Loading from '../commons/Loading';

export function withPublic(Component) {
    return function WithPublic(props) {

        const auth = useAuth();
        const router = useRouter();

        const checkUser = () => {
            if(auth.user) {
                router.push('/dashboard');
                return <Loading />
            }
        }

        useEffect(() => {
            checkUser()
        }, [])

        return <Component auth={auth} {...props} />
    }
}

export function withProtected(Component) {
    return function WithProtected(props) {

        const auth = useAuth();
        const router = useRouter();

        const checkUser = () => {
            if(!auth.user) {
                router.push('/');
                return <Loading />
            }
        }

        useEffect(() => {
            checkUser()
        }, [])

        return <Component auth={auth} {...props} />
    }
}