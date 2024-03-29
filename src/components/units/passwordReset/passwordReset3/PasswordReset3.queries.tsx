import { gql } from "apollo-boost";

export const SEND_SMS = gql`
   mutation sendTokenToSMS($phone: String!) {
      sendTokenToSMS(phone: $phone)
   }
`;

export const ISVALID_EMAIL = gql`
   mutation isValidEmail($email: String!) {
      isValidEmail(email: $email) {
         isValid
         phone
      }
   }
`;

export const FETCH_LOGIN_USER = gql`
   query fetchLoginUser {
      fetchLoginUser {
         id
         name
         email
         phone
         isAuth
      }
   }
`;

export const RESET_PWD = gql`
   mutation resetPwd($email: String!, $password: String!) {
      resetPwd(email: $email, password: $password)
   }
`;
