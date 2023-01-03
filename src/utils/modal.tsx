import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React, {useCallback, useMemo} from "react";

export default function BottomModal(props: any) {
    const snapPoints = useMemo(() => ["50%", "50%"], []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log("handleSheetChanges", index);
    }, []);

    return (
        <BottomSheetModal
            enablePanDownToClose={true}
            ref={props.modalRef}
            index={1}
            snapPoints={snapPoints}
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
                borderTopWidth: 1,
                borderTopColor: "rgba(130,130,130,0.27)",
                borderRadius: 12,
            }}
            onChange={handleSheetChanges}
        >
            {props.children}
        </BottomSheetModal>
    )
}
