import AsyncStorage from "@react-native-async-storage/async-storage"

const storeData = async (key: string, value: any) => {
    try {
        let store_data = value

        if (typeof value === "object") {
            store_data = JSON.stringify(value)
        }

        await AsyncStorage.setItem(`@${key}`, store_data)
    } catch (e) {
        console.log("Saving error", e)
    }
}

const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(`@${key}`)

        if (value !== null) {
            if (typeof value === "object") {
                return JSON.parse(value)
            } else {
                return value
            }
        }

        return null
    } catch (e) {
        console.log("Get data error", e)
        return null
    }
}

export { storeData, getData }
