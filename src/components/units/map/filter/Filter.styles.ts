import styled from "@emotion/native";

export const Wrapper = styled.View`
   flex: 1;
   background-color: white;
`;

export const Header = styled.View`
   height: 50px;
   align-items: center;
   justify-content: center;
`;

export const ArrowBox = styled.TouchableOpacity`
   position: absolute;
   left: 20px;
`;

export const ResetBox = styled.TouchableOpacity`
   position: absolute;
   right: 20px;
`;

export const Container = styled.ScrollView`
   background-color: white;
`;

export const EmptyDataContainer = styled.View`
   align-items: center;
   margin-top: 175px;
`;
