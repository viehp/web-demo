import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './Home.styled'

export default function Home (): JSX.Element{
    return (
        <S.Navigation>
     <Link to="/">Home</Link> | {''}
     hello   
      </S.Navigation>
    );
};

