import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"
import { Image, ImageSourcePropType, View } from "react-native";

import ITreino from "../screens/ITreino";
import LTreino from "../screens/LTreino";
import Periodizacao from "../screens/Periodizacao";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: 'grey',
                tabBarInactiveBackgroundColor: 'black',
                tabBarActiveTintColor: 'white',
                tabBarIconStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 5,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconSource: ImageSourcePropType;

                    if (route.name === 'itreino') {
                        iconSource = focused ? require('../../assets/livros.png') : require('../../assets/livros.png')
                    } else if (route.name === 'ltreino') {
                        iconSource = focused ? require('../../assets/botao-play.png') : require('../../assets/botao-play.png')
                    } else if (route.name === 'periodizacao') { 
                        iconSource = focused ? require('../../assets/academia.png') : require('../../assets/academia.png') 
                    } else {
                        iconSource = focused ? require('../../assets/sinal.png') : require('../../assets/sinal.png') 
                    }

                    return ( 
                        <View style={{alignItems: "center"}}>
                            <Image 
                                source={iconSource}
                                style={{
                                    width: size,
                                    height: size,
                                    tintColor: color, 
                                }}
                                resizeMode="contain"
                            />
                        </View>
                    );
                },
            })}>

            <Tab.Screen
                name="itreino"
                component={ITreino}
            />

            <Tab.Screen
                name="ltreino"
                component={LTreino}
            />

            <Tab.Screen
                name="periodizacao"
                component={Periodizacao}
            />
        </Tab.Navigator>
    )
}