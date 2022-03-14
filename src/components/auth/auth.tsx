import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {AppRoute, AuthStatus} from '../../consts';
import {requireAuthorization} from '../../store/api-action';
import {getAuthErrorMessage, getAuthStatus, getIsLoading} from '../../store/user-reducer/selectors';

const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const Form = styled.form`
    position: relative;
    width: 640px;
`;

const ErrorMessage = styled.div`
    position: absolute;
    bottom: calc(100% + 27px);
    
    display: flex;
    align-items: center;
    
    width: 100%;
    padding: 20px;
    background: #F5E9E9;
    border: 1px solid #E26F6F;
    box-sizing: border-box;
    border-radius: 8px;
`;

const StyledPic = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 20px;
    height: 20px;
    border-radius: 50%;
    
    margin-right: 14px;
    
    font-size: 14px;
    line-height: 17px;
    color: #EE6565;
    background: #FFC8C8;
`;

const ErrorText = styled.span`
    font-size: 14px;
`;

const InputWrapper = styled.div`
    position: relative;
    
    margin-bottom: 45px;
`;

const Input = styled.input<{ isError: boolean }>`
    background: #F5F5F5;
    border-radius: 8px;
    border: ${(props) => props.isError ? '1px solid #E26F6F' : 'none'};
    padding: 20px;
    width: 100%
`;

const Label = styled.label`
    display: block;
    padding-bottom: 10px;
`;

const StyledCheckbox = styled.div<{}>`
    width: 20px;
    height: 20px;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 4px;
        
    margin-right: 14px;
    padding: 3px;
`;

const CheckboxChecked = styled.div<{ checked: boolean }>`
    background: ${(props) => props.checked ? '#4A67FF' : 'transparent'};
    width: 100%;
    height: 100%;
    border-radius: 2px;
`;

const FlexLabel = styled.label`
    display: flex;
    align-items: center;
`;

const StyledButton = styled.button<{ disabled: boolean }>`
    width: 100%;
    padding: 19px 0;
    margin-top: 40px;
    
    background: ${(props) => props.disabled ? '#99A9FF' : '#4A67FF'} ;
    border-radius: 8px;
    
    font-family: 'Helvetica Neue';
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    
    color: #FFFFFF;
`;

const StyledInputErrorMessage = styled.span`
    position: absolute;
    bottom: -20px;
    left: 0;
    
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    
    color: #E26F6F;
`;

const Auth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authStatus = useSelector(getAuthStatus);
    const isLoading = useSelector(getIsLoading);
    const authErrorMessage = useSelector(getAuthErrorMessage)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isErrorEmail, setIsErrorEmail] = useState(false);
    const [isErrorPassword, setIsErrorPassword] = useState(false);

    const handleEmailChange = (e: React.FocusEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e: React.FocusEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleCheckBoxClick = () => {
        setChecked((prev) => !prev);
    }

    const handleButtonClick = (e: React.FormEvent) => {
        e.preventDefault();
        const regExPassword = /(?=.*[a-zA-Z])(?=.*\d)/;
        const regExEmail = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
        let passwordCorrect = regExPassword.test(password);
        let emailCorrect = regExEmail.test(email);

        if (authErrorMessage !== '') {
            setErrorMessage(authErrorMessage);
        }

        if (!passwordCorrect) {
            setErrorMessage('Пароль должен состоять минимум из одной буквы и цифры');
            setIsErrorPassword(true);
        } else {
            setIsErrorPassword(false);
        }

        if (!emailCorrect) {
            setErrorMessage('Введите корректный email (например test@test.ru)');
            setIsErrorEmail(true);
        } else {
            setIsErrorEmail(false);
        }

        if (passwordCorrect && emailCorrect) {
            setErrorMessage('');
            dispatch(requireAuthorization(email, password));
        }

    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    useEffect(() => {
        if (authStatus === AuthStatus.Auth) {
            navigate(AppRoute.Profile);
        }
    }, [authStatus]);

    useEffect(() => {
        if (authErrorMessage !== '') {
            setErrorMessage(authErrorMessage);
        }
    }, [authErrorMessage])


    return (
        <FlexCenter>
            <Form
                onSubmit={handleSubmit}
                action="#"
            >
                {errorMessage &&
                <ErrorMessage>
                    <StyledPic>!</StyledPic><ErrorText>{errorMessage}</ErrorText>
                </ErrorMessage>}
                <div>
                    <InputWrapper>
                        <Label htmlFor="user-email">Логин</Label>
                        <Input
                            value={email}
                            onChange={handleEmailChange}
                            type="email"
                            name="user-email"
                            id="user-email"
                            isError={isErrorEmail}
                        />
                        {isErrorEmail && <StyledInputErrorMessage>Обязательное поле</StyledInputErrorMessage>}
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="user-password">Пароль</Label>
                        <Input
                            value={password}
                            onChange={handlePasswordChange}
                            type="password"
                            name="user-password"
                            id="user-password"
                            autoComplete="on"
                            isError={isErrorPassword}
                        />
                        {isErrorPassword && <StyledInputErrorMessage>Обязательное поле</StyledInputErrorMessage>}
                    </InputWrapper>
                    <FlexLabel>
                        <input
                            type="checkbox"
                            name="agree"
                            checked={checked}
                            style={{display: 'none'}}
                            onChange={handleCheckBoxClick}
                        />
                        <StyledCheckbox>
                            <CheckboxChecked checked={checked}/>
                        </StyledCheckbox>
                        <span>
                          Запомнить пароль
                        </span>
                    </FlexLabel>
                </div>
                <div>
                    <StyledButton
                        onClick={handleButtonClick}
                        type="submit"
                        disabled={isLoading}
                    >Войти
                    </StyledButton>
                </div>
            </Form>
        </FlexCenter>
    );
};

export default Auth;
