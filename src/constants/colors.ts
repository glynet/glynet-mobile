export default function getTheme() {
    const theme = "dark";

    if (theme !== "dark") {
        const borderColor = "#252833";
        return {
            APP_BACKGROUND: "rgba(0,0,0,0)",
            BODY_BACKGROUND: "rgba(0,0,0,0)",
            HEADER_ITEM_COLOR: "#e2e4e7",
            BORDER_COLOR: borderColor,
            BORDER_WIDTH: 1,
            INPUT_BACKGROUND: "#0b0d0f",
            BOX_BACKGROUND: "#000000",
            BOX_BORDER_COLOR: borderColor,

            PRIMARY_COLOR: "#c9c7c7",
            SECONDARY_COLOR: "#9b9999",
            TERTIARY_COLOR: "#747272",

            POST_BUTTON_BACKGROUND: "#131515",
            POST_BUTTON_COLOR: "#7c7c80",

            BUTTON_BACKGROUND: "#0b0d0f",
            BUTTON_COLOR: "#adadb4",

            THEME_COLOR: "#2D00C6",
            ILLUSTRATION_COLOR: "#66B6F7"
        }
    } else {
        const borderColor = "#e6e6e6";
        return {
            APP_BACKGROUND: "rgba(46,57,138,0)",
            BODY_BACKGROUND: "rgba(67,79,178,0)",
            HEADER_ITEM_COLOR: "#1E2129",
            BORDER_COLOR: borderColor,
            BORDER_WIDTH: 1,
            INPUT_BACKGROUND: "#F0F1F4",
            BOX_BACKGROUND: "#FFFFFF",
            BOX_BORDER_COLOR: borderColor,

            PRIMARY_COLOR: "#1b2733",
            SECONDARY_COLOR: "#4e535a",
            TERTIARY_COLOR: "#747272",

            POST_BUTTON_BACKGROUND: "rgba(233,233,235,0.62)",
            POST_BUTTON_COLOR: "#656b6f",

            BUTTON_BACKGROUND: "#F0F1F4",
            BUTTON_COLOR: "#414055",

            THEME_COLOR: "#2D00C6",
            ILLUSTRATION_COLOR: "#66B6F7"
        }
    }
}
