import { get, post } from '@/utils/request/http';

export const checkAccountIsExist = (account) => {
  return post('/v1/check_account', {
    account: account,
  });
};

export const authLogin = (data) => {
  return post('/v1/login', data);
};

export const authRegister = (data) => {
  return post('/v1/register', data);
};

export const getUserInfo = () => {
  return get('/v1/user_info');
};
