import { BottomSheetBackdropProps, BottomSheetModal } from "@gorhom/bottom-sheet"
import React, { useMemo, useRef } from "react"
import { Animated } from "react-native"

const CustomBackdrop = ({ style }: BottomSheetBackdropProps) => {
    const opacityAnimation = useRef(new Animated.Value(0)).current
    const opacityStyle = { opacity: opacityAnimation }

    Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
    }).start()

    const containerStyle = useMemo(
        () => [
            style,
            {
                backgroundColor: "#0000005F",
            },
            opacityStyle,
        ],
        [style, opacityStyle],
    )

    return <Animated.View style={containerStyle} />
}

export default function BottomModal(props: any) {
    return (
        <BottomSheetModal
            backdropComponent={CustomBackdrop}
            enablePanDownToClose={true}
            ref={props.modalRef}
            index={1}
            snapPoints={props.snapPoints}
            style={
                {
                    /* shadowColor: "rgba(0,0,0,0.62)",
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 0.50,
                shadowRadius: 10.27,
                elevation: 10, */
                }
            }
        >
            {props.children}
        </BottomSheetModal>
    )
}
