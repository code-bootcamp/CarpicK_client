import styled from "@emotion/native";

export const Wrapper = styled.View`
   flex: 1;
   background-color: white;
`;

export const Body = styled.View`
   padding: 50px 0 30px;
`;

export const InputBottomLine = styled.View`
   width: 100%;
   border: 0.5px solid #353535;
`;

export const InputWrapper = styled.View``;

export const InputWrapperMarginBtm = styled.View`
   width: 100%;
   margin-bottom: 12px;
`;

export const InputLeft = styled.View`
   width: 65%;
`;

export const InputRow = styled.View`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`;

export const Input = styled.TextInput`
   font-family: Regular;
   padding: 0px 14px;
   height: 45px;
`;

export const SubTouch = styled.TouchableOpacity`
   width: 30%;
   background-color: #5d8bff;
   align-items: center;
   justify-content: center;
   border-radius: 5px;
`;
