import Feed from "../views/Feed/Feed"
import Search from "../views/Search/Search"
import Profile from "../views/Profile/Profile"
import AppStyles from "../App.style"
import { TouchableOpacity, View } from "react-native"
import { PlusOutlineIcon, GridFilledIcon, GridOutlineIcon, HomeFilledIcon, HomeOutlineIcon, SearchOutlineIcon, UserFilledIcon, UserOutlineIcon, FlashIconOutline, FlashFilledIcon } from "./icons"
import React, { useCallback, useMemo, useRef } from "react"
import { useRoute } from "@react-navigation/native"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import BottomModal from "./modal"
import Menu from "../components/Menu/Menu"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function Tabs({ navigation }: any) {
    const insets = useSafeAreaInsets()
    const route = useRoute()

    const bottomSheetModalRef = useRef<BottomSheetModal>(null)
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present()
    }, [])

    return (
        <View style={[AppStyles.bottomBar, { bottom: insets.bottom }]}>
            <BottomModal modalRef={bottomSheetModalRef} snapPoints={useMemo(() => ["62%", "62%"], [])}>
                <Menu navigation={navigation} modalRef={bottomSheetModalRef} />
            </BottomModal>

            <TouchableOpacity accessibilityRole="button" activeOpacity={0.8} style={AppStyles.buttonContainer} onPress={() => navigation.navigate("Feed")}>
                {route.name !== "Feed" && <HomeOutlineIcon style={AppStyles.buttonContainer.icon} />}
                {route.name === "Feed" && <HomeFilledIcon style={AppStyles.buttonContainer.icon_selected} />}
            </TouchableOpacity>
            <TouchableOpacity accessibilityRole="button" activeOpacity={0.8} style={AppStyles.buttonContainer} onPress={() => navigation.navigate("Search")}>
                <SearchOutlineIcon style={AppStyles.buttonContainer.icon} />
            </TouchableOpacity>
            <TouchableOpacity accessibilityRole="button" activeOpacity={0.8} style={AppStyles.buttonContainer} onPress={() => navigation.navigate("Loops", { collect: "explore" })}>
                {route.name !== "Loops" && <FlashIconOutline style={AppStyles.buttonContainer.icon} />}
                {route.name === "Loops" && <FlashFilledIcon style={AppStyles.buttonContainer.icon_selected} />}
            </TouchableOpacity>
            <TouchableOpacity accessibilityRole="button" activeOpacity={0.8} style={AppStyles.buttonContainer} onPress={() => navigation.navigate("Profile", { name: "yugiohsena" })}>
                {route.name !== "Profile" && <UserOutlineIcon style={AppStyles.buttonContainer.icon} />}
                {route.name === "Profile" && <UserFilledIcon style={AppStyles.buttonContainer.icon_selected} />}
            </TouchableOpacity>
            <TouchableOpacity accessibilityRole="button" activeOpacity={0.8} style={AppStyles.buttonContainer} onPress={handlePresentModalPress}>
                {route.name !== "Menu" && <GridOutlineIcon style={AppStyles.buttonContainer.icon} />}
                {route.name === "Menu" && <GridFilledIcon style={AppStyles.buttonContainer.icon_selected} />}
            </TouchableOpacity>
        </View>
    )
}
