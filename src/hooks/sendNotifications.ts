import * as Notifications from "expo-notifications"

async function allowsNotificationsAsync() {
    const settings = await Notifications.requestPermissionsAsync({
        ios: {
            allowAlert: true,
            allowBadge: true,
            allowSound: true,
            allowAnnouncements: true,
        },
    })

    return settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
}

type SendNotification = {
    send: boolean
}

export async function sendNotification(content: any): Promise<SendNotification> {
    const hasPushNotificationPermissionGranted = await allowsNotificationsAsync()

    if (hasPushNotificationPermissionGranted) {
        await Notifications.scheduleNotificationAsync({
            content: content,
            trigger: { seconds: 2 },
        })
        return { send: true }
    } else {
        return { send: false }
    }
}
