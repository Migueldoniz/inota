import { createDrawerNavigator } from "@react-navigation/drawer"
import React from "react"
import Draw from "./Draw"

const Drawer = createDrawerNavigator()

export default function DrawTab() {
    return (
      <Drawer.Navigator initialRouteName="DrawTab">
      <Drawer.Screen
      name="Draw"
      component={Draw}
      />
      </Drawer.Navigator>
    )
}