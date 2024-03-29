import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationHeaderLeft from "../../../src/components/commons/navigationHeader/headerLeft";
import PenaltyPayment from "../../../src/components/units/penaltyPayment/PenaltyPayment";
import RentHistoryPage from "../../../src/components/units/rentHistory/RentHistory.container";

const Stack = createNativeStackNavigator();

export default function RentHistoryStack({ navigation }: any) {
   return (
      <>
         <Stack.Navigator
            screenOptions={{
               headerTintColor: "#5D8BFF",
               headerTitle: "",
               headerStyle: { backgroundColor: "#ffffff" },
            }}
         >
            <Stack.Screen
               name="rentHistory"
               component={RentHistoryPage}
               options={() => ({
                  headerShown: true,
                  headerShadowVisible: false,
                  headerLeft: () =>
                     NavigationHeaderLeft(
                        { navigation },
                        "main",
                        "",
                        "#000000"
                     ),
               })}
            />
            <Stack.Screen
               name="penaltyPayment"
               component={PenaltyPayment}
               options={() => ({
                  headerShown: false,
                  headerShadowVisible: false,
               })}
            />
         </Stack.Navigator>
      </>
   );
}
