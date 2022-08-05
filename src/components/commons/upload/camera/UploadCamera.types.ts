import { ReactNativeFile } from "apollo-upload-client";
import { Dispatch, SetStateAction } from "react";

export interface IUploadCameraProps {
   imageFiles: ReactNativeFile[];
   setImageFiles: Dispatch<SetStateAction<ReactNativeFile[]>>;
   imageUris: string[];
   setImageUris: Dispatch<SetStateAction<string[]>>;
   index: number;
}
