import colors from "../../../commons/lib/colors";
import globalStyle from "../../../commons/styles/globalStyle";
import * as R from "react-native";
import * as S from "./RentHistory.styles";
import RentHistoryNoneImg from "../../../../assets/rentHistory/rent-history-none.svg";
import TitleText from "../../commons/text/TitleText";
import RentHistoryItem from "../../commons/rentHistoryItem/RentHistoryItem";

const renderItem = ({ item }) => {
   return <RentHistoryItem data={item} />;
};

export default function RentHistoryUI(props) {
   return (
      <S.Wrapper>
         <S.TitleWrapper style={globalStyle.GlobalStyles}>
            <TitleText fontSize="28" color={colors.theme}>
               이용내역
            </TitleText>
         </S.TitleWrapper>
         {props.isNone && (
            <R.View style={{ backgroundColor: "#fff", height: "100%" }}>
               <R.View style={globalStyle.GlobalStyles}>
                  <S.ContentWrapper>
                     <TitleText fontSize="18" color={colors.dark_gray}>
                        이용내역이 없습니다.
                     </TitleText>
                  </S.ContentWrapper>
                  <S.ImageWrapper>
                     <RentHistoryNoneImg />
                  </S.ImageWrapper>
               </R.View>
            </R.View>
         )}
         <R.FlatList
            data={props.data?.fetchUserReservations}
            refreshing={props.networkStatus === 4}
            onRefresh={props.refetch}
            onEndReached={props.loadFunc}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
         />
      </S.Wrapper>
   );
}