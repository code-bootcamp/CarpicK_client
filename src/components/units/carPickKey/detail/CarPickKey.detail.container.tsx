import { useMutation, useQuery } from "@apollo/client";
import moment from "moment";
import { useState } from "react";
import Modal1 from "../../../commons/modals/modal1/Modal1";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import Modal4 from "../../../commons/modals/modal4/Modal4";
import CarPickKeyDetailUI from "./CarPickKey.detail.presenter";
import {
   FETCH_LOGIN_USER,
   CANCEL_RESERVATION,
} from "./CarPickKey.detail.queries";

export default function CarPickKeyDetail({ navigation }: any) {
   const { data, loading } = useQuery(FETCH_LOGIN_USER, {
      fetchPolicy: "network-only",
   });
   const [cancel] = useMutation(CANCEL_RESERVATION);
   const [isChecked, setIsChecked] = useState(false);
   const [isTimeBefore, setIsTimeBefore] = useState(false);
   const [openModal1, setOpenModal1] = useState(false);
   const [openModal2, setOpenModal2] = useState(false);
   const [openModal3, setOpenModal3] = useState(false);
   const [msg, setMsg] = useState("");

   const onChangeTimeBefore = () => {
      setIsTimeBefore((prev) => !prev);
   };

   const calTime = (startTime: string) => {
      return Math.round(
         (new Date(startTime).getTime() - new Date().getTime()) / 1000 / 60
      );
   };

   const onPressNext = () => {
      if (calTime(data?.fetchLoginUser.reservation[0].startTime) > 10) {
         onChangeTimeBefore();
      } else {
         navigation.navigate("carPickKeyBefore", {
            carId: data?.fetchLoginUser.reservation[0].car.id,
            reservationId: data?.fetchLoginUser.reservation[0].id,
         });
      }
   };

   const onChangeCheck = (isChecked: boolean) => {
      setIsChecked(isChecked);
   };

   const onPressCancelModal = () => {
      setMsg(`예약 취소 하시겠습니까?`);
      setOpenModal1(true);
   };

   const onPressCancel = () => {
      if (
         moment
            .duration(
               moment(data?.fetchLoginUser.reservation[0].startTime).diff(
                  moment()
               )
            )
            .asHours() < 0.5
      ) {
         setMsg("시작 시간 30분 이내에는\n예약취소 불가능합니다.");
         setOpenModal2(true);
         setOpenModal1(false);
      } else {
         try {
            const result = cancel({
               variables: {
                  reservationId: data.fetchLoginUser.reservation[0].id,
                  paymentInput: {
                     impUid:
                        data.fetchLoginUser.reservation[0].payment[0].impUid,
                     amount:
                        data.fetchLoginUser.reservation[0].payment[0].amount,
                     paymentMethod:
                        data.fetchLoginUser.reservation[0].payment[0]
                           .paymentMethod,
                  },
               },
            });
            setOpenModal1(false);
            setMsg("예약취소가 완료되었습니다.");
            setOpenModal3(true);
         } catch (error: any) {
            return (
               <Modal4
                  title="예약 취소 실패"
                  contents={error.message}
                  positiveText="확인"
                  positive={() => {}}
               />
            );
         }
      }
   };

   const onPressToMain = () => {
      setOpenModal1(false);
      navigation.replace("mainStack");
   };

   return (
      <>
         {!loading && (
            <>
               {data?.fetchLoginUser.reservation.length ? (
                  <>
                     <CarPickKeyDetailUI
                        data={data}
                        onPressNext={onPressNext}
                        onChangeCheck={onChangeCheck}
                        isChecked={isChecked}
                        onPressCancelModal={onPressCancelModal}
                     />
                     {openModal1 && (
                        <Modal1
                           contents={msg}
                           positiveText="확인"
                           negativeText="취소"
                           positive={onPressCancel}
                           negative={() => setOpenModal1(false)}
                        />
                     )}
                     {openModal2 && (
                        <Modal3
                           contents={msg}
                           positiveText="확인"
                           positive={() => setOpenModal2(false)}
                        />
                     )}
                     {openModal3 && (
                        <Modal3
                           contents={msg}
                           positiveText="확인"
                           positive={onPressToMain}
                        />
                     )}
                  </>
               ) : (
                  <Modal3
                     contents="예약된 차량이 없습니다."
                     positiveText="확인"
                     positive={() => navigation.goBack()}
                  />
               )}
               {isTimeBefore && (
                  <Modal3
                     contents="예약시간 10분전부터 이용이 가능합니다."
                     positiveText="확인"
                     positive={onChangeTimeBefore}
                  />
               )}
            </>
         )}
      </>
   );
}
