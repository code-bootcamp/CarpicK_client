import * as S from "./PasswordReset3.styles";
import * as R from "react-native";
import globalStyle from "../../../../commons/styles/globalStyle";
import TitleText from "../../../commons/text/TitleText";
import Contents1Text from "../../../commons/text/Contents1Text";
import Input2 from "../../../commons/input/Input2";
import Contents2Text from "../../../commons/text/Contents2Text";
import Button01Blue from "../../../commons/button/button_01_blue";
import { IPasswordResetPage3UIProps } from "./PasswordReset3.types";

export default function PasswordResetPage3UI(
   props: IPasswordResetPage3UIProps
) {
   return (
      <S.Wrapper style={globalStyle.GlobalStyles40}>
         <R.ScrollView showsVerticalScrollIndicator={false}>
            <S.TitleWrapper>
               <TitleText color="#5D8BFF">비밀번호 재설정 </TitleText>
               <S.ProcessWrapper>
                  <S.ProcessIconGray />
                  <S.ProcessIconGray />
                  <S.ProcessIcon />
               </S.ProcessWrapper>
            </S.TitleWrapper>
            <S.Body>
               <S.InputWrapper>
                  <Contents1Text fontSize="12">새로운 비밀번호</Contents1Text>
                  <Input2
                     maxLength={16}
                     onChangeText={props.onChangePassword}
                     secureTextEntry={true}
                     placeholder="영문+숫자 조합 8~16 자리를 입력해주세요."
                  />
               </S.InputWrapper>
               {!props.isValidPassword && (
                  <Contents2Text color="#ff6347">
                     영문+숫자 조합 8~16자리를 입력해주세요.
                  </Contents2Text>
               )}
               {props.isValidPassword && (
                  <Contents2Text color="#00C73C">
                     알맞은 비밀번호입니다 : )
                  </Contents2Text>
               )}
               <S.InputWrapperMarginBtm>
                  <Contents1Text fontSize="12">비밀번호 재확인</Contents1Text>
                  <Input2
                     maxLength={16}
                     onChangeText={(text) => props.setPasswordAgain(text)}
                     secureTextEntry={true}
                     placeholder="영문+숫자 조합 8~16 자리를 입력해주세요."
                  />
               </S.InputWrapperMarginBtm>
               <S.ButtonWrapper>
                  <Button01Blue
                     func={props.onPressResetPassword}
                     title="비밀번호 재설정"
                     disabled={!props.isValidPassword || !props.passwordAgain}
                  />
               </S.ButtonWrapper>
            </S.Body>
         </R.ScrollView>
      </S.Wrapper>
   );
}
