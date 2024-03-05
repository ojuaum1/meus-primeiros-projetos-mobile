import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../home/Home"
import { Profile } from "../profile/Profile"

import {font}

const BottomTab = createBottomTabNavigator()

export const Main = () => {
    return (

        <BottomTab.Navigator
            initialRouteName="Home"

            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: "#FFFFFF", height: 80, paddingTop: 10 },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShow: false,

                tabIcon : ({focused}) => {
                    if (route.name === "Home") {
                        return(
                            <>
                            </>
                        )
                    } else {
                        
                    }
                }
            })}
        >
            <BottomTab.Screen
                name="Home"
                component={Home} />

            <BottomTab.Screen
                name="Profile"
                component={Profile} />


        </BottomTab.Navigator>

    )
}