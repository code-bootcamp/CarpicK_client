import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import RentHistoryUI from "./RentHistory.presenter";
import { FETCH_USER_RESERVATIONS } from "./RentHistory.queries";

export default function RentHistoryPage({ navigation }) {
   const { data, refetch, networkStatus, fetchMore } = useQuery(
      FETCH_USER_RESERVATIONS,
      {
         fetchPolicy: "network-only",
      }
   );
   const [isLoad, setIsLoad] = useState(false);

   useEffect(() => {
      navigation.addListener("focus", () => setIsLoad(true));
      navigation.addListener("blur", () => setIsLoad(false));
   }, []);
   console.log("this is data", data?.fetchUserReservations.length);
   const loadFunc = () => {
      if (!data) return;

      fetchMore({
         variables: {
            page: Math.ceil(data.fetchUserReservations.length / 10) + 1,
         },
         updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult.fetchUserReservations)
               return {
                  fetchUserReservations: [...prev.fetchUserReservations],
               };
            console.log("fetchmoreresutl", fetchMoreResult);
            return {
               fetchUserReservations: [
                  ...prev.fetchUserReservations,
                  ...fetchMoreResult.fetchUserReservations,
               ],
            };
         },
      });
   };

   console.log(data);
   return (
      <>
         {isLoad && (
            <RentHistoryUI
               isNone={data?.fetchUserReservations.length === 0 ? true : false}
               data={data}
               refetch={refetch}
               loadFunc={loadFunc}
               networkStatus={networkStatus}
            />
         )}
      </>
   );
}