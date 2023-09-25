import React from 'react';
import { REST_API_KEY, REDIRECT_URI} from './KakaoLoginData';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const gologin = () =>{
    navigate("/https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code");
  }
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <button onclock={gologin}>카카오로그인</button>
  );
};
  export default Login;
