import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface IMapPageUIProps {
   location: {
      latitude: number;
      longitude: number;
      latitudeDelta: number;
      longitudeDelta: number;
   };
   panelRef: MutableRefObject<null>;
   setMapRef: Dispatch<SetStateAction<null>>;
   VIEW_HEIGHT: number;
   handleToggle: (id: any) => void;
   handleRegionChange: () => Promise<void>;
   onPressToRentProcess: (id: any) => void;
   isDrawerOpen: boolean;
   setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
   data?: any;
   carListData: any;
   setCarLocationId: any;
   onPressQuery: (id: any) => Promise<JSX.Element | undefined>;
   loading: boolean;
}
