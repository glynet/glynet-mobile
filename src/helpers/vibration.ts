import { Vibration, Platform } from "react-native";

export function vibrate(duration = 150) {
  Vibration.vibrate(duration)
  setTimeout(() => {
    Vibration.cancel()
  }, duration)
}
