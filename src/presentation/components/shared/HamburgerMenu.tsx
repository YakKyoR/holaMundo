import { DrawerActions, useNavigation } from "@react-navigation/native"
import { globalStyles } from "../../theme/theme"
import { Pressable, Text } from "react-native";
import { useEffect } from "react";
import { assertEasingIsWorklet } from "react-native-reanimated/lib/typescript/reanimated2/animation/util";

interface Props{
    label: string;
}

export const HamburgerMenu = ({label}: Props) => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer)}>
                    <Text>{label}</Text>
                </Pressable>
            )
        })
    }, [])

  return (<></>)
}
