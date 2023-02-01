import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React, {useCallback} from "react";
import {Platform} from "react-native";

export default function BottomModal(props: any) {
    const handleSheetChanges = useCallback((index: number) => {
        console.log("MODAL > Bottom Sheet Updated: " + index);
    }, []);

    return (
        <BottomSheetModal
            enablePanDownToClose={true}
            ref={props.modalRef}
            index={1}
            snapPoints={props.snapPoints}
            style={{
                borderColor: "red",
                shadowColor: "rgba(0,0,0,0.62)",
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 0.50,
                shadowRadius: 10.27,
                elevation: 10,
                borderTopWidth: Platform.OS === "android" ? 1 : 0,
                borderTopColor: "rgba(130,130,130,0.27)",
                borderRadius: 12,
            }}
            onChange={handleSheetChanges}
        >
            {props.children}
        </BottomSheetModal>
    )
}
