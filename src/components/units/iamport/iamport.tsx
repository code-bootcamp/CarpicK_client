import React from "react";
import IMP from "iamport-react-native";
import Loading from "./loading";
import * as R from "react-native";

/* 로딩 컴포넌트를 불러옵니다. */

export default function Payment({ navigation }) {
   /* [필수입력] 결제 종료 후, 라우터를 변경하고 결과를 전달합니다. */
   function callback(response) {
      navigation.replace("paymentResult", response);
   }

   /* [필수입력] 결제에 필요한 데이터를 입력합니다. */
   const data = {
      pg: "html5_inicis",
      pay_method: "card",
      name: "아임포트 결제데이터 분석",
      merchant_uid: `mid_${new Date().getTime()}`,
      amount: "100",
      buyer_name: "홍길동",
      buyer_tel: "01012345678",
      buyer_email: "example@naver.com",
      buyer_addr: "서울시 강남구 신사동 661-16",
      buyer_postcode: "06018",
      app_scheme: "example",
      escrow: true,
      // [Deprecated v1.0.3]: m_redirect_url
   };

   return (
      <R.View
         style={{
            flex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: "red",
         }}
      >
         <IMP.Payment
            userCode={"imp49910675"} // 가맹점 식별코드
            // tierCode={"AAA"} // 티어 코드: agency 기능 사용자에 한함
            data={data} // 결제 데이터
            loading={<Loading />}
            callback={callback} // 결제 종료 후 콜백
         />
      </R.View>
   );
}