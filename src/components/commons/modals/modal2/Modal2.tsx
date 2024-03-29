/* title, contents, negative/positive buttons */

import { useState } from "react";
import { Modal } from "react-native";
import * as S from "../style/Modal.styles";

interface IModal2Props {
   title: string;
   contents: string;
   positiveText: string;
   negativeText: string;
   positive: () => void;
   negative: () => void;
}

export default function Modal2(props: IModal2Props) {
   const [isVisible, setIsVisible] = useState(true);

   const onClickPositive = () => {
      props.positive();
      setIsVisible(false);
   };

   const onClickNegative = () => {
      props.negative();
      setIsVisible(false);
   };

   return (
      <Modal
         //animationType='fade'
         //animationType='slide'
         transparent={true}
         visible={isVisible}
      >
         <S.ModalCenteredView>
            <S.ModalView>
               <S.ContentsView>
                  <S.TitleText>{props.title}</S.TitleText>
                  <S.ContentsText>{props.contents}</S.ContentsText>
               </S.ContentsView>
               <S.ButtonsView>
                  <S.NegativeButton
                     activeOpacity={0.7}
                     onPress={onClickNegative}
                  >
                     <S.ButtonText>{props.negativeText}</S.ButtonText>
                  </S.NegativeButton>
                  <S.PositiveHalfButton
                     activeOpacity={0.7}
                     onPress={onClickPositive}
                  >
                     <S.ButtonText>{props.positiveText}</S.ButtonText>
                  </S.PositiveHalfButton>
               </S.ButtonsView>
            </S.ModalView>
         </S.ModalCenteredView>
      </Modal>
   );
}
