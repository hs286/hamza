import jwt_decode from "jwt-decode";

export const JwtId = () => {
  const token = (localStorage?.getItem("loginToken"));
  let tokenDecoded;
  if(token==='undefined'||!token||token===null){
    return tokenDecoded = {};
  }
  tokenDecoded = jwt_decode(token);
  return tokenDecoded;
};
