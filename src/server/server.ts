import {UserInfo} from '../types/user-info';
import {AUTH_DATA} from './auth-data';

export interface PromiseResult {
    status: number,
    data: UserInfo,
}

export const server = {
    post: ({login, password}: { login: string, password: string }): Promise<PromiseResult> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const userInfo = AUTH_DATA.find((user) => user.login === login);
                const isUserPasswordValid = userInfo?.password === password;

                if (!userInfo) {
                    reject({
                        status: 400,
                        data: {
                            error: `Неверный пароль (есть test@test.ru, test1)`,
                        },
                    });
                }

                if (!isUserPasswordValid) {
                    reject({
                        status: 400,
                        data: {
                            error: `Пользователя ${login} не существует (есть test@test.ru, test1)`,
                        },
                    });
                }

                if (isUserPasswordValid) {
                    resolve({
                        status: 200,
                        data: userInfo,
                    });
                }
            }, 2000);
        })
    },

    get: (token: string | null) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const userInfo = AUTH_DATA.find((user) => user.token === token);

                if (userInfo) {
                    resolve({
                        status: 200,
                        data: userInfo,
                    });
                } else {
                    reject({
                        status: 401,
                        data: {
                            error: `Нет указанного токена`,
                        },
                    });
                }
            }, 100);
        })
    }
};