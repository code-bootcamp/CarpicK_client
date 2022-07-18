import * as S from "./PasswordReset1.styles";
import * as R from "react-native";
import globalStyle from "../../../../commons/styles/globalStyle";
import TitleText from "../../../commons/text/TitleText";
import Contents1Text from "../../../commons/text/Contents1Text";
import Contents2Text from "../../../commons/text/Contents2Text";
import Input2 from "../../../commons/input/Input2";
import { phoneNumHypen } from "../../../../commons/utilities/phonNumHypen";
import Button01Blue from "../../../commons/button/button_01_blue";

export default function PasswordReset1UI(props) {
   return (
      <S.Wrapper style={globalStyle.GlobalStyles}>
         <R.ScrollView showsVerticalScrollIndicator={false}>
            <S.TitleWrapper>
               <TitleText color="#5D8BFF">비밀번호 재설정 </TitleText>
            </S.TitleWrapper>
            <S.Body>
               <S.InputWrapperMarginBtm>
                  <Contents1Text fontSize="14">이메일</Contents1Text>
                  <S.InputRow>
                     <Input2
                        maxLength={13}
                        onChangeText={(text) => props.setEmail(text)}
                        placeholder="이메일을 입력해주세요."
                     />
                  </S.InputRow>
               </S.InputWrapperMarginBtm>
               <Button01Blue
                  func={props.onPressNext}
                  title="다음"
                  disabled={!props.email}
               />
            </S.Body>
         </R.ScrollView>
      </S.Wrapper>
   );
}