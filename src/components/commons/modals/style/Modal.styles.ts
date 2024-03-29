import styled from "@emotion/native";
import { Dimensions } from "react-native";

export const ModalCenteredView = styled.View`
   width: ${Dimensions.get("window").width}px;
   height: ${Dimensions.get("window").height}px;
   flex: 1;
   justify-content: center;
   align-items: center;
   background-color: rgba(0, 0, 0, 0.65);
   padding-left: 30px;
   padding-right: 30px;
`;

export const ModalView = styled.View`
   width: 100%;
   background-color: white;
   border-radius: 21px 21px 0 0;
   margin-bottom: 50px;
`;

export const ContentsView = styled.View`
   padding: 35px;
`;

export const TimeContentsView = styled.View`
   width: 100%;
   padding: 20px 50px;
   flex-direction: row;
`;

export const TitleText = styled.Text`
   font-size: 18px;
   font-weight: 600;
`;

export const TitleView = styled.View`
   width: 50%;
   flex-direction: row;
   justify-content: center;
`;

export const ContentsText = styled.Text`
   font-size: 16px;
   font-weight: normal;
   text-align: center;
   margin-top: 10px;
`;

export const ButtonsView = styled.View`
   flex: 1;
   flex-direction: row;
`;

export const ButtonText = styled.Text`
   color: white;
`;

export const buttonDefault = styled.TouchableOpacity`
   height: 50px;
   align-items: center;
   justify-content: center;
`;

export const NegativeButton = styled(buttonDefault)`
   width: 50%;
   background-color: #a5a5a5;
   border-bottom-left-radius: 21px;
`;

export const PositiveHalfButton = styled(buttonDefault)`
   width: 50%;
   background-color: #5d8bff;
   color: white;
   border-bottom-right-radius: 21px;
`;

export const PositiveFullButton = styled(buttonDefault)`
   width: 100%;
   background-color: #5d8bff;
   color: white;
   border-bottom-left-radius: 21px;
   border-bottom-right-radius: 21px;
`;

export const TimePickerView = styled.View`
   width: 50px;
   justify-content: center;
   align-items: center;
`;

export const TimePickerMiddleView = styled.View`
   width: 30px;
   justify-content: center;
   align-items: center;
`;
