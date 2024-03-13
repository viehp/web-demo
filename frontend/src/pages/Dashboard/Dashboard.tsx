import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Dashboard.styled'

export default function Dashboard (): JSX.Element{
    return (
        <S.Navigation>
       <Link to="/">Home</Link> | {''}
       mé

      </S.Navigation>
    );
};

