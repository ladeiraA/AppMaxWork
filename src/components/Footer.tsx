import { NavigationContainer } from "@react-navigation/native";

import TabRoutes from "../navegation/tabRoutes";

export default function Footer() {
    return(
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
    )
}