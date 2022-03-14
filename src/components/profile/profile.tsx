import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {AppRoute, AuthStatus} from '../../consts';
import {requireLogOut} from '../../store/api-action';
import {getAuthStatus, getUserInfo} from '../../store/user-reducer/selectors';

const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

const StyledMessage = styled.p`
    font-size: 40px;
    line-height: 48px;
    
    color: #000000;
    
    margin-bottom: 50px;
`;

const BoldMessage = styled.span`
    font-size: 40px;
    line-height: 48px;
    font-weight: 700;
    
    color: #000000;
`;

const StyledButton = styled.button`
    background: #F5F5F5;
    border-radius: 8px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    
    color: #000000;
    
    width: 200px;
    height: 60px;
`;

const Profile = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authStatus = useSelector(getAuthStatus);
    const userInfo = useSelector(getUserInfo);

    const handleExitClick = () => {
        dispatch(requireLogOut());
    }

    useEffect(() => {
        if (authStatus && authStatus !== AuthStatus.Auth) {
            navigate(AppRoute.SignIn);
        }
    }, [authStatus, navigate])

    return (
        <FlexCenter>
            <StyledMessage>Здравствуйте, <BoldMessage>{userInfo.email}</BoldMessage></StyledMessage>
            <StyledButton onClick={handleExitClick}>Выйти</StyledButton>
        </FlexCenter>
    );
};

export default Profile;