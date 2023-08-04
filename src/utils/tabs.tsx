import AppStyles from "../App.style"
import { View } from "react-native"
import { GridFilledIcon, GridOutlineIcon, HomeFilledIcon, HomeOutlineIcon, SearchOutlineIcon, UserFilledIcon, UserOutlineIcon, FlashIconOutline, FlashFilledIcon, CompassOutlineIcon, CompassFilledIcon } from "./icons"
import React, { memo, useCallback, useMemo, useRef } from "react"
import { useRoute } from "@react-navigation/native"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import BottomModal from "./modal"
import Menu from "../components/Menu/Menu"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import ScaleButton from "../components/ScaleButton/ScaleButton"
import Search from "../components/Search/Search"

function Tabs({ navigation }: any) {
    const insets = useSafeAreaInsets()
    const route = useRoute()

    const bottomSheetModalRef = useRef<BottomSheetModal>(null)
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present()
    }, [])

    const bottomSheetModalSearchRef = useRef<BottomSheetModal>(null)
    const handlePresentModalSearchPress = useCallback(() => {
        bottomSheetModalSearchRef.current?.present()
    }, [])

    return (
        <View style={[
            AppStyles.bottomBar,
            { bottom: insets.bottom },
            route.name === "Loops" && {
                borderTopColor: "rgb(0,0,0)",
                backgroundColor: "rgb(0,0,0)"
            }
        ]}>
            <BottomModal modalRef={bottomSheetModalRef} snapPoints={useMemo(() => ["62%", "62%"], [])}>
                <Menu navigation={navigation} modalRef={bottomSheetModalRef} />
            </BottomModal>

            <BottomModal modalRef={bottomSheetModalSearchRef} snapPoints={useMemo(() => ["45%", "70%"], [])}>
                <Search navigation={navigation} modalRef={bottomSheetModalSearchRef} />
            </BottomModal>

            <ScaleButton
                activeScale={0.6}
                contentContainerStyle={AppStyles.buttonContainer}
                onPress={() => navigation.navigate("Feed")}
            >
                {route.name !== "Feed" && <HomeOutlineIcon style={AppStyles.buttonContainer.icon} />}
                {route.name === "Feed" && <HomeFilledIcon style={AppStyles.buttonContainer.icon_selected} />}
            </ScaleButton>

            <ScaleButton
                activeScale={0.6}
                contentContainerStyle={AppStyles.buttonContainer}
                onPress={handlePresentModalSearchPress}
            >
                <SearchOutlineIcon style={AppStyles.buttonContainer.icon} />
            </ScaleButton>

            <ScaleButton
                activeScale={0.6}
                contentContainerStyle={AppStyles.buttonContainer}
                onPress={() => navigation.navigate("Loops", { collect: "explore" })}
            >
                {route.name !== "Loops" && <FlashIconOutline style={AppStyles.buttonContainer.icon} />}
                {route.name === "Loops" && <FlashFilledIcon style={[AppStyles.buttonContainer.icon_selected, { fill: "#DFDFDF" }]} />}
            </ScaleButton>

            <ScaleButton
                activeScale={0.6}
                contentContainerStyle={AppStyles.buttonContainer}
                onPress={() => navigation.navigate("Profile", { name: "halimberes" })}
            >
                {route.name !== "Profile" && <UserOutlineIcon style={AppStyles.buttonContainer.icon} />}
                {route.name === "Profile" && <UserFilledIcon style={AppStyles.buttonContainer.icon_selected} />}
            </ScaleButton>

            <ScaleButton
                activeScale={0.6}
                contentContainerStyle={AppStyles.buttonContainer}
                onPress={() => navigation.navigate("Communities")}
            >
                {route.name !== "Communities" && <CompassOutlineIcon style={AppStyles.buttonContainer.icon} />}
                {route.name === "Communities" && <CompassFilledIcon style={AppStyles.buttonContainer.icon_selected} />}
            </ScaleButton>
        </View>
    )
}

export default memo(Tabs)
