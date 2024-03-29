import * as S from "./FindId.styles";
import globalStyles from "../../../commons/styles/globalStyle";
import TitleText from "../../commons/text/TitleText";
import Contents1Text from "../../commons/text/Contents1Text";
import Input2 from "../../commons/input/Input2";
import Button01Blue from "../../commons/button/button_01_blue";
import Timer from "../../commons/timer/timer.container";
import RedoButton from "../../commons/redoButton/redoButton.container";
import { phoneNumHypen } from "../../../commons/utilities/phonNumHypen";
import { IFindIdPageUIProps } from "./FindId.types";

export default function FindIdPageUI(props: IFindIdPageUIProps) {
   return (
      <S.Wrapper style={globalStyles.GlobalStyles40}>
         <S.TitleWrapper>
            <TitleText color="#5D8BFF">아이디 찾기</TitleText>
            <S.ProcessWrapper>
               <S.ProcessIcon />
               <S.ProcessIconGray />
            </S.ProcessWrapper>
         </S.TitleWrapper>
         <S.InputWrapperMarginBtm>
            <Contents1Text fontSize="12">전화번호</Contents1Text>
            <S.InputRow>
               <S.InputLeft>
                  <Input2
                     maxLength={13}
                     keyboardType="numeric"
                     onChangeText={(text) => props.setPhone(text)}
                     placeholder="휴대전화번호 입력."
                     value={phoneNumHypen(props.phone)}
                  />
               </S.InputLeft>
               {!props.openTimer && !props.openRedo && (
                  <S.SubTouch activeOpacity={0.7} onPress={props.onPressSMS}>
                     <Contents1Text color="#ffffff" fontSize="14">
                        인증요청
                     </Contents1Text>
                  </S.SubTouch>
               )}
               {props.openTimer && (
                  <Timer
                     setOpenTimer={props.setOpenTimer}
                     setOpenRedo={props.setOpenRedo}
                     setToken={props.setToken}
                  />
               )}
               {props.openRedo && (
                  <RedoButton setOpenRedo={props.setOpenRedo} />
               )}
            </S.InputRow>
         </S.InputWrapperMarginBtm>
         <S.InputWrapperMarginBtm>
            <Contents1Text fontSize="12">인증번호</Contents1Text>
            <S.InputRow>
               <S.InputLeft>
                  <Input2
                     maxLength={6}
                     keyboardType="numeric"
                     onChangeText={(text) => props.setToken(text)}
                     placeholder="인증번호를 입력해 주세요."
                  />
               </S.InputLeft>
               <S.SubTouch
                  activeOpacity={0.7}
                  onPress={props.onPressCheckPhoneTruthNum}
               >
                  <Contents1Text color="#ffffff" fontSize="14">
                     인증확인
                  </Contents1Text>
               </S.SubTouch>
            </S.InputRow>
         </S.InputWrapperMarginBtm>
         <S.ButtonWrapper>
            <Button01Blue
               func={props.onPressToIdResult}
               title={"아이디 찾기"}
               disabled={!props.isValidPhone}
            />
         </S.ButtonWrapper>
      </S.Wrapper>
   );
}
