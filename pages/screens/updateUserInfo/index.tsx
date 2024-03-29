import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationHeaderLeft from "../../../src/components/commons/navigationHeader/headerLeft";
import PasswordInputPage from "../../../src/components/units/updateUserInfo/passwordInput/PasswordInput.container";
import UpdateMyInfoPage from "../../../src/components/units/updateUserInfo/updateMyInfo/UpdateMyInfo.container";

const Stack = createNativeStackNavigator();

export default function UpdateUserInfoStack({ navigation }: any) {
   return (
      <>
         <Stack.Navigator
            screenOptions={{
               headerTitle: "",
               headerShadowVisible: false,
               headerStyle: { backgroundColor: "#f7f8f9" },
            }}
         >
            <Stack.Screen
               name="passwordInputPages"
               component={PasswordInputPage}
               options={() => ({
                  headerShown: true,
                  headerLeft: () =>
                     NavigationHeaderLeft({ navigation }, "", "", "#000000"),
               })}
            />
            <Stack.Screen
               name="updateMyInfoPage"
               component={UpdateMyInfoPage}
               options={() => ({
                  headerShown: false,
               })}
            />
         </Stack.Navigator>
      </>
   );
}
