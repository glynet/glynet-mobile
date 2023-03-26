import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function screenHeightWithoutInsets(decrease = 0): number {
    const insets = useSafeAreaInsets()
    
    return Dimensions.get("window").height - insets.bottom - insets.top - decrease;
}