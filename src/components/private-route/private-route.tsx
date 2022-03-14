import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../consts';
import {getAuthStatus, getIsLoading} from '../../store/user-reducer/selectors';

const PrivateRoute = ({children}: {children: JSX.Element}) => {
    const authStatus = useSelector(getAuthStatus);
    const isLoading = useSelector(getIsLoading);

    if (!isLoading) {
        if (authStatus !== AuthStatus.Auth) {
            return <Navigate to={AppRoute.SignIn} />
        }
    }

    return children;
};

export default PrivateRoute;