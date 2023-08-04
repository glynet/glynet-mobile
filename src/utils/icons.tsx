import React from "react"
import Svg, { LinearGradient, Stop, Circle, G, Path, Defs } from "react-native-svg"

function PaperPlaneIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M21 4a1.31 1.31 0 00-.06-.27v-.09a1 1 0 00-.2-.3 1 1 0 00-.29-.19h-.09a.86.86 0 00-.31-.15H20a1 1 0 00-.3 0l-18 6a1 1 0 000 1.9l8.53 2.84 2.84 8.53a1 1 0 001.9 0l6-18A1 1 0 0021 4zm-4.7 2.29l-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z"
                    data-name="paper-plane"
                />
            </G>
        </Svg>
    )
}

function CameraFilledIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="camera">
                    <Circle cx={12} cy={14} r={1.5} />
                    <Path d="M19 7h-3V5.5A2.5 2.5 0 0013.5 3h-3A2.5 2.5 0 008 5.5V7H5a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3v-8a3 3 0 00-3-3zm-9-1.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V7h-4zm2 12a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z" />
                </G>
            </G>
        </Svg>
    )
}

function MentionIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M13 2a10 10 0 00-5 19.1 10.15 10.15 0 004 .9 10 10 0 006.08-2.06 1 1 0 00.19-1.4 1 1 0 00-1.41-.19A8 8 0 1112.77 4 8.17 8.17 0 0120 12.22v.68a1.71 1.71 0 01-1.78 1.7 1.82 1.82 0 01-1.62-1.88V8.4a1 1 0 00-1-1 1 1 0 00-1 .87 5 5 0 00-3.44-1.36A5.09 5.09 0 1015.31 15a3.6 3.6 0 005.55.61A3.67 3.67 0 0022 12.9v-.68A10.2 10.2 0 0013 2zm-1.82 13.09A3.09 3.09 0 1114.27 12a3.1 3.1 0 01-3.09 3.09z"
                    data-name="at"
                />
            </G>
        </Svg>
    )
}

function CameraIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="camera">
                    <Path d="M19 7h-3V5.5A2.5 2.5 0 0013.5 3h-3A2.5 2.5 0 008 5.5V7H5a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3v-8a3 3 0 00-3-3zm-9-1.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V7h-4zM20 18a1 1 0 01-1 1H5a1 1 0 01-1-1v-8a1 1 0 011-1h14a1 1 0 011 1z" />
                    <Path d="M12 10.5a3.5 3.5 0 103.5 3.5 3.5 3.5 0 00-3.5-3.5zm0 5a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5z" />
                </G>
            </G>
        </Svg>
    )
}

function VideoCameraFilledIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M21 7.15a1.7 1.7 0 00-1.85.3l-2.15 2V8a3 3 0 00-3-3H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.45l2.16 2a1.74 1.74 0 001.16.45 1.68 1.68 0 00.69-.15 1.6 1.6 0 001-1.48V8.63A1.6 1.6 0 0021 7.15z"
                    data-name="video"
                />
            </G>
        </Svg>
    )
}

function UserOutlineIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="person">
                    <Path d="M12 11a4 4 0 10-4-4 4 4 0 004 4zm0-6a2 2 0 11-2 2 2 2 0 012-2zM12 13a7 7 0 00-7 7 1 1 0 002 0 5 5 0 0110 0 1 1 0 002 0 7 7 0 00-7-7z" />
                </G>
            </G>
        </Svg>
    )
}

function UserFilledIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="person">
                    <Path d="M12 11a4 4 0 10-4-4 4 4 0 004 4zM18 21a1 1 0 001-1 7 7 0 00-14 0 1 1 0 001 1z" />
                </G>
            </G>
        </Svg>
    )
}

function CompassOutlineIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="compass">
                    <Path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
                    <Path d="M15.68 8.32a1 1 0 00-1.1-.25l-4.21 1.7a1 1 0 00-.55.55l-1.75 4.26a1 1 0 00.18 1h.05A1 1 0 009 16a1 1 0 00.38-.07l4.21-1.7a1 1 0 00.55-.55l1.75-4.26a1 1 0 00-.21-1.1zm-4.88 4.89l.71-1.74 1.69-.68-.71 1.74z" />
                </G>
            </G>
        </Svg>
    )
}

function HomeOutlineIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M20.42 10.18L12.71 2.3a1 1 0 00-1.42 0l-7.71 7.89A2 2 0 003 11.62V20a2 2 0 001.89 2h14.22A2 2 0 0021 20v-8.38a2.07 2.07 0 00-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 00-1-1H9a1 1 0 00-1 1v7H5v-8.42l7-7.15 7 7.19z"
                    data-name="home"
                />
            </G>
        </Svg>
    )
}

function HomeFilledIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="home">
                    <Path d="M10 14H14V21H10z" />
                    <Path d="M20.42 10.18L12.71 2.3a1 1 0 00-1.42 0l-7.71 7.89A2 2 0 003 11.62V20a2 2 0 001.89 2H8v-9a1 1 0 011-1h6a1 1 0 011 1v9h3.11A2 2 0 0021 20v-8.38a2.07 2.07 0 00-.58-1.44z" />
                </G>
            </G>
        </Svg>
    )
}

function SearchOutlineIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0019 11a8 8 0 10-8 8 7.92 7.92 0 004.9-1.69l3.39 3.4a1 1 0 001.42 0 1 1 0 000-1.42zM5 11a6 6 0 116 6 6 6 0 01-6-6z" data-name="search" />
            </G>
        </Svg>
    )
}

function HeartOutlineIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M12 21a1 1 0 01-.71-.29l-7.77-7.78a5.26 5.26 0 010-7.4 5.24 5.24 0 017.4 0L12 6.61l1.08-1.08a5.24 5.24 0 017.4 0 5.26 5.26 0 010 7.4l-7.77 7.78A1 1 0 0112 21zM7.22 6a3.2 3.2 0 00-2.28.94 3.24 3.24 0 000 4.57L12 18.58l7.06-7.07a3.24 3.24 0 000-4.57 3.32 3.32 0 00-4.56 0l-1.79 1.8a1 1 0 01-1.42 0L9.5 6.94A3.2 3.2 0 007.22 6z"
                    data-name="heart"
                />
            </G>
        </Svg>
    )
}

function HeartFilledIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M12 21a1 1 0 01-.71-.29l-7.77-7.78a5.26 5.26 0 010-7.4 5.24 5.24 0 017.4 0L12 6.61l1.08-1.08a5.24 5.24 0 017.4 0 5.26 5.26 0 010 7.4l-7.77 7.78A1 1 0 0112 21z"
                    data-name="heart"
                />
            </G>
        </Svg>
    )
}

function CommentIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="message-circle">
                    <Circle cx={12} cy={12} r={1} />
                    <Circle cx={16} cy={12} r={1} />
                    <Circle cx={8} cy={12} r={1} />
                    <Path d="M19.07 4.93a10 10 0 00-16.28 11 1.06 1.06 0 01.09.64L2 20.8a1 1 0 00.27.91A1 1 0 003 22h.2l4.28-.86a1.26 1.26 0 01.64.09 10 10 0 0011-16.28zm.83 8.36a8 8 0 01-11 6.08 3.26 3.26 0 00-1.25-.26 3.43 3.43 0 00-.56.05l-2.82.57.57-2.82a3.09 3.09 0 00-.21-1.81 8 8 0 016.08-11 8 8 0 019.19 9.19z" />
                </G>
            </G>
        </Svg>
    )
}

function BookmarkOutlineIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M6.09 21.06a1 1 0 01-1-1L4.94 5.4a2.26 2.26 0 012.18-2.35L16.71 3a2.27 2.27 0 012.23 2.31l.14 14.66a1 1 0 01-.49.87 1 1 0 01-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 01-.51.15zm5.76-5.55a1.11 1.11 0 01.5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 01.51-.14z"
                    data-name="bookmark"
                />
            </G>
        </Svg>
    )
}

function BookmarkFilledIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M6 21a1 1 0 01-.49-.13A1 1 0 015 20V5.33A2.28 2.28 0 017.2 3h9.6A2.28 2.28 0 0119 5.33V20a1 1 0 01-.5.86 1 1 0 01-1 0l-5.67-3.21-5.33 3.2A1 1 0 016 21z"
                    data-name="bookmark"
                />
            </G>
        </Svg>
    )
}

function ShareIconFilled(props: any) {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <G data-name="Layer 2">
          <Path
            d="M18 15a3 3 0 00-2.1.86L8 12.34v-.67l7.9-3.53A3 3 0 1015 6v.34L7.1 9.86a3 3 0 100 4.28l7.9 3.53V18a3 3 0 103-3z"
            data-name="share"
          />
        </G>
      </Svg>
    )
  }

function VerticalIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="more-vertical">
                    <Circle cx={12} cy={12} r={2} />
                    <Circle cx={12} cy={5} r={2} />
                    <Circle cx={12} cy={19} r={2} />
                </G>
            </G>
        </Svg>
    )
}

function PlusOutlineIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="plus-circle">
                    <Path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
                    <Path d="M15 11h-2V9a1 1 0 00-2 0v2H9a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2z" />
                </G>
            </G>
        </Svg>
    )
}

function BellOutlineIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 00-5.82-6.88 6.74 6.74 0 00-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 004.64 18H8v.34A3.84 3.84 0 0012 22a3.84 3.84 0 004-3.66V18h3.36a1.64 1.64 0 001.16-2.79zM14 18.34A1.88 1.88 0 0112 20a1.88 1.88 0 01-2-1.66V18h4zM5.51 16l1.18-1.18a2 2 0 00.59-1.42V8.73A4.73 4.73 0 018.9 5.17 4.67 4.67 0 0112.64 4a4.86 4.86 0 014.08 4.9v4.5a2 2 0 00.58 1.42L18.49 16z"
                    data-name="bell"
                />
            </G>
        </Svg>
    )
}

function LocationPinIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="pin">
                    <Path d="M12 2a8 8 0 00-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 001.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0012 2zm0 17.65c-1.67-1.59-6-6-6-9.73a6 6 0 0112 0c0 3.7-4.33 8.14-6 9.73z" />
                    <Path d="M12 6a3.5 3.5 0 103.5 3.5A3.5 3.5 0 0012 6zm0 5a1.5 1.5 0 111.5-1.5A1.5 1.5 0 0112 11z" />
                </G>
            </G>
        </Svg>
    )
}

function WebIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M22 12A10 10 0 0012 2a10 10 0 000 20 10 10 0 0010-10zm-2.07-1H17a12.91 12.91 0 00-2.33-6.54A8 8 0 0119.93 11zM9.08 13H15a11.44 11.44 0 01-3 6.61A11 11 0 019.08 13zm0-2A11.4 11.4 0 0112 4.4a11.19 11.19 0 013 6.6zm.36-6.57A13.18 13.18 0 007.07 11h-3a8 8 0 015.37-6.57zM4.07 13h3a12.86 12.86 0 002.35 6.56A8 8 0 014.07 13zm10.55 6.55A13.14 13.14 0 0017 13h2.95a8 8 0 01-5.33 6.55z"
                    data-name="globe"
                />
            </G>
        </Svg>
    )
}

function CheckmarkIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1 1 0 111.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33z" data-name="checkmark" />
            </G>
        </Svg>
    )
}

function ArrowLeftIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M19 11H7.14l3.63-4.36a1 1 0 10-1.54-1.28l-5 6a1.19 1.19 0 00-.09.15c0 .05 0 .08-.07.13A1 1 0 004 12a1 1 0 00.07.36c0 .05 0 .08.07.13a1.19 1.19 0 00.09.15l5 6A1 1 0 0010 19a1 1 0 00.64-.23 1 1 0 00.13-1.41L7.14 13H19a1 1 0 000-2z"
                    data-name="arrow-back"
                />
            </G>
        </Svg>
    )
}

function UserAddIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="person-add">
                    <Path d="M21 6h-1V5a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 002 0V8h1a1 1 0 000-2zM10 11a4 4 0 10-4-4 4 4 0 004 4zm0-6a2 2 0 11-2 2 2 2 0 012-2zM10 13a7 7 0 00-7 7 1 1 0 002 0 5 5 0 0110 0 1 1 0 002 0 7 7 0 00-7-7z" />
                </G>
            </G>
        </Svg>
    )
}

function UserDoneIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="person-done">
                    <Path d="M21.66 4.25a1 1 0 00-1.41.09l-1.87 2.15-.63-.71a1 1 0 00-1.5 1.33l1.39 1.56a1 1 0 00.75.33 1 1 0 00.74-.34l2.61-3a1 1 0 00-.08-1.41zM10 11a4 4 0 10-4-4 4 4 0 004 4zM16 21a1 1 0 001-1 7 7 0 00-14 0 1 1 0 001 1" />
                </G>
            </G>
        </Svg>
    )
}

function UserRemoveIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="person-remove">
                    <Path d="M21 6h-4a1 1 0 000 2h4a1 1 0 000-2zM10 11a4 4 0 10-4-4 4 4 0 004 4zm0-6a2 2 0 11-2 2 2 2 0 012-2zM10 13a7 7 0 00-7 7 1 1 0 002 0 5 5 0 0110 0 1 1 0 002 0 7 7 0 00-7-7z" />
                </G>
            </G>
        </Svg>
    )
}

function GridOutlineIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="grid">
                    <Path d="M9 3H5a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2zM5 9V5h4v4zM19 3h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2zm-4 6V5h4v4zM9 13H5a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2zm-4 6v-4h4v4zM19 13h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2zm-4 6v-4h4v4z" />
                </G>
            </G>
        </Svg>
    )
}

function GridFilledIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="grid">
                    <Path d="M9 3H5a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2zM19 3h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2zM9 13H5a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2zM19 13h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2z" />
                </G>
            </G>
        </Svg>
    )
}

function LogoutIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="log-out">
                    <Path d="M7 6a1 1 0 000-2H5a1 1 0 00-1 1v14a1 1 0 001 1h2a1 1 0 000-2H6V6zM20.82 11.42l-2.82-4a1 1 0 00-1.39-.24 1 1 0 00-.24 1.4L18.09 11H10a1 1 0 000 2h8l-1.8 2.4a1 1 0 00.2 1.4 1 1 0 00.6.2 1 1 0 00.8-.4l3-4a1 1 0 00.02-1.18z" />
                </G>
            </G>
        </Svg>
    )
}

function AlbumIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zM8 7a1.5 1.5 0 11-1.5 1.5A1.5 1.5 0 018 7zm11 10.83A1.09 1.09 0 0118 19H6l7.57-6.82a.69.69 0 01.93 0l4.5 4.48z"
                    data-name="image-2"
                />
            </G>
        </Svg>
    )
}

function PencilIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M19.4 7.34L16.66 4.6A2 2 0 0014 4.53l-9 9a2 2 0 00-.57 1.21L4 18.91a1 1 0 00.29.8A1 1 0 005 20h.09l4.17-.38a2 2 0 001.21-.57l9-9a1.92 1.92 0 00-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z"
                    data-name="edit"
                />
            </G>
        </Svg>
    )
}

function TextIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path d="M20 4H4a1 1 0 00-1 1v3a1 1 0 002 0V6h6v13H9a1 1 0 000 2h6a1 1 0 000-2h-2V6h6v2a1 1 0 002 0V5a1 1 0 00-1-1z" data-name="text" />
            </G>
        </Svg>
    )
}

function AlbumOutlineIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="image">
                    <Path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zM6 5h12a1 1 0 011 1v8.36l-3.2-2.73a2.77 2.77 0 00-3.52 0L5 17.7V6a1 1 0 011-1zm12 14H6.56l7-5.84a.78.78 0 01.93 0L19 17v1a1 1 0 01-1 1z" />
                    <Circle cx={8} cy={8.5} r={1.5} />
                </G>
            </G>
        </Svg>
    )
}

function SecurityOutlineIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M12 21.85a2 2 0 01-1-.25l-.3-.17A15.17 15.17 0 013 8.23v-.14a2 2 0 011-1.75l7-3.94a2 2 0 012 0l7 3.94a2 2 0 011 1.75v.14a15.17 15.17 0 01-7.72 13.2l-.3.17a2 2 0 01-.98.25zm0-17.7L5 8.09v.14a13.15 13.15 0 006.7 11.45l.3.17.3-.17A13.15 13.15 0 0019 8.23v-.14z"
                    data-name="shield"
                />
            </G>
        </Svg>
    )
}

function MailIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 01-1-1V7.25l7.4 5.55a1 1 0 00.6.2 1 1 0 00.6-.2L20 7.25V17a1 1 0 01-1 1z"
                    data-name="email"
                />
            </G>
        </Svg>
    )
}

function TrashIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="trash-2">
                    <Path d="M21 6h-5V4.33A2.42 2.42 0 0013.5 2h-3A2.42 2.42 0 008 4.33V6H3a1 1 0 000 2h1v11a3 3 0 003 3h10a3 3 0 003-3V8h1a1 1 0 000-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 01-1 1H7a1 1 0 01-1-1V8h12z" />
                    <Path d="M9 17a1 1 0 001-1v-4a1 1 0 00-2 0v4a1 1 0 001 1zM15 17a1 1 0 001-1v-4a1 1 0 00-2 0v4a1 1 0 001 1z" />
                </G>
            </G>
        </Svg>
    )
}

function MoonIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M12.3 22h-.1a10.31 10.31 0 01-7.34-3.15 10.46 10.46 0 01-.26-14 10.13 10.13 0 014-2.74 1 1 0 011.06.22 1 1 0 01.24 1 8.4 8.4 0 001.94 8.81 8.47 8.47 0 008.83 1.94 1 1 0 011.27 1.29A10.16 10.16 0 0119.6 19a10.28 10.28 0 01-7.3 3zM7.46 4.92a7.93 7.93 0 00-1.37 1.22 8.44 8.44 0 00.2 11.32A8.29 8.29 0 0012.22 20h.08a8.34 8.34 0 006.78-3.49A10.37 10.37 0 017.46 4.92z"
                    data-name="moon"
                />
            </G>
        </Svg>
    )
}

function SunIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="sun">
                    <Path d="M12 6a1 1 0 001-1V3a1 1 0 00-2 0v2a1 1 0 001 1zM21 11h-2a1 1 0 000 2h2a1 1 0 000-2zM6 12a1 1 0 00-1-1H3a1 1 0 000 2h2a1 1 0 001-1zM6.22 5a1 1 0 00-1.39 1.47l1.44 1.39a1 1 0 00.73.28 1 1 0 00.72-.31 1 1 0 000-1.41zM17 8.14a1 1 0 00.69-.28l1.44-1.39A1 1 0 0017.78 5l-1.44 1.42a1 1 0 000 1.41 1 1 0 00.66.31zM12 18a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zM17.73 16.14a1 1 0 00-1.39 1.44L17.78 19a1 1 0 00.69.28 1 1 0 00.72-.3 1 1 0 000-1.42zM6.27 16.14l-1.44 1.39a1 1 0 000 1.42 1 1 0 00.72.3 1 1 0 00.67-.25l1.44-1.39a1 1 0 00-1.39-1.44zM12 8a4 4 0 104 4 4 4 0 00-4-4zm0 6a2 2 0 112-2 2 2 0 01-2 2z" />
                </G>
            </G>
        </Svg>
    )
}

function FlagIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M19.27 4.68a1.79 1.79 0 00-1.6-.25 7.53 7.53 0 01-2.17.28 8.54 8.54 0 01-3.13-.78A10.15 10.15 0 008.5 3c-2.89 0-4 1-4.2 1.14a1 1 0 00-.3.72V20a1 1 0 002 0v-4.3a6.28 6.28 0 012.5-.41 8.54 8.54 0 013.13.78 10.15 10.15 0 003.87.93 7.66 7.66 0 003.5-.7 1.74 1.74 0 001-1.55V6.11a1.77 1.77 0 00-.73-1.43zM18 14.59a6.32 6.32 0 01-2.5.41 8.36 8.36 0 01-3.13-.79 10.34 10.34 0 00-3.87-.92 9.51 9.51 0 00-2.5.29V5.42A6.13 6.13 0 018.5 5a8.36 8.36 0 013.13.79 10.34 10.34 0 003.87.92 9.41 9.41 0 002.5-.3z"
                    data-name="flag"
                />
            </G>
        </Svg>
    )
}

function MuteIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="volume-off">
                    <Path d="M4.71 3.29a1 1 0 00-1.42 1.42l16 16a1 1 0 001.42 0 1 1 0 000-1.42zM16.91 14.08l1.44 1.44a6 6 0 00-.07-7.15 1 1 0 10-1.56 1.26 4 4 0 01.19 4.45z" />
                    <Path d="M21 12a6.51 6.51 0 01-1.78 4.39l1.42 1.42A8.53 8.53 0 0023 12a8.75 8.75 0 00-3.36-6.77 1 1 0 10-1.28 1.54A6.8 6.8 0 0121 12zM13.5 18.1l-5.1-3.5a1 1 0 00-.57-.17H3.5V9.57h3.24l-2-2H2.5a1 1 0 00-1 1v6.86a1 1 0 001 1h5l6.41 4.4a1.06 1.06 0 00.57.17 1 1 0 001-1v-1.67l-2-2zM13.5 5.9v4.77l2 2V4a1 1 0 00-1.57-.83L9.23 6.4l1.44 1.44z" />
                </G>
            </G>
        </Svg>
    )
}

function InfoIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="info">
                    <Path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
                    <Circle cx={12} cy={8} r={1} />
                    <Path d="M12 10a1 1 0 00-1 1v5a1 1 0 002 0v-5a1 1 0 00-1-1z" />
                </G>
            </G>
        </Svg>
    )
}

function BellOffIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="bell-off">
                    <Path d="M8.9 5.17A4.67 4.67 0 0112.64 4a4.86 4.86 0 014.08 4.9v4.5a1.92 1.92 0 00.1.59l3.6 3.6a1.58 1.58 0 00.45-.6 1.62 1.62 0 00-.35-1.78l-1.8-1.81V8.94a6.86 6.86 0 00-5.82-6.88 6.71 6.71 0 00-5.32 1.61 6.88 6.88 0 00-.58.54l1.47 1.43a4.79 4.79 0 01.43-.47zM14 16.86l-.83-.86H5.51l1.18-1.18a2 2 0 00.59-1.42v-3.29l-2-2a5.68 5.68 0 000 .59v4.7l-1.8 1.81A1.63 1.63 0 004.64 18H8v.34A3.84 3.84 0 0012 22a3.88 3.88 0 004-3.22l-.83-.78zM12 20a1.88 1.88 0 01-2-1.66V18h4v.34A1.88 1.88 0 0112 20zM20.71 19.29L19.41 18l-2-2-9.52-9.53L6.42 5 4.71 3.29a1 1 0 00-1.42 1.42L5.53 7l1.75 1.7 7.31 7.3.07.07L16 17.41l.59.59 2.7 2.71a1 1 0 001.42 0 1 1 0 000-1.42z" />
                </G>
            </G>
        </Svg>
    )
}

function CrossIconRounded(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="close-circle">
                    <Path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
                    <Path d="M14.71 9.29a1 1 0 00-1.42 0L12 10.59l-1.29-1.3a1 1 0 00-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 000 1.42 1 1 0 001.42 0l1.29-1.3 1.29 1.3a1 1 0 001.42 0 1 1 0 000-1.42L13.41 12l1.3-1.29a1 1 0 000-1.42z" />
                </G>
            </G>
        </Svg>
    )
}

function FlashOutlineIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M11.11 23a1 1 0 01-.34-.06 1 1 0 01-.65-1.05l.77-7.09H5a1 1 0 01-.83-1.56l7.89-11.8a1 1 0 011.17-.38 1 1 0 01.65 1l-.77 7.14H19a1 1 0 01.83 1.56l-7.89 11.8a1 1 0 01-.83.44zM6.87 12.8H12a1 1 0 01.74.33 1 1 0 01.25.78l-.45 4.15 4.59-6.86H12a1 1 0 01-1-1.11l.45-4.15z"
                    data-name="flash"
                />
            </G>
        </Svg>
    )
}

function FlashFilledIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M11.11 23a1 1 0 01-.34-.06 1 1 0 01-.65-1.05l.77-7.09H5a1 1 0 01-.83-1.56l7.89-11.8a1 1 0 011.17-.38 1 1 0 01.65 1l-.77 7.14H19a1 1 0 01.83 1.56l-7.89 11.8a1 1 0 01-.83.44z"
                    data-name="flash"
                />
            </G>
        </Svg>
    )
}

function ArrowRightIosIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path d="M10 19a1 1 0 01-.64-.23 1 1 0 01-.13-1.41L13.71 12 9.39 6.63a1 1 0 01.15-1.41 1 1 0 011.46.15l4.83 6a1 1 0 010 1.27l-5 6A1 1 0 0110 19z" data-name="arrow-ios-forward" />
            </G>
        </Svg>
    )
}

function EyeOutlineIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="eye">
                    <Path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 000 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 000-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z" />
                    <Path d="M12 8.5a3.5 3.5 0 103.5 3.5A3.5 3.5 0 0012 8.5zm0 5a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5z" />
                </G>
            </G>
        </Svg>
    )
}

function CheckmarkOutlineIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1 1 0 111.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33z" data-name="checkmark" />
            </G>
        </Svg>
    )
}

function CommentsFilledIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M19.07 4.93a10 10 0 00-16.28 11 1.06 1.06 0 01.09.64L2 20.8a1 1 0 00.27.91A1 1 0 003 22h.2l4.28-.86a1.26 1.26 0 01.64.09 10 10 0 0011-16.28zM8 13a1 1 0 111-1 1 1 0 01-1 1zm4 0a1 1 0 111-1 1 1 0 01-1 1zm4 0a1 1 0 111-1 1 1 0 01-1 1z"
                    data-name="message-circle"
                />
            </G>
        </Svg>
    )
}

function CrossIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z"
                    data-name="close"
                />
            </G>
        </Svg>
    )
}

function StaffIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="code">
                    <Path d="M8.64 5.23a1 1 0 00-1.41.13l-5 6a1 1 0 000 1.27l4.83 6a1 1 0 00.78.37 1 1 0 00.78-1.63L4.29 12l4.48-5.36a1 1 0 00-.13-1.41zM21.78 11.37l-4.78-6a1 1 0 00-1.41-.15 1 1 0 00-.15 1.41L19.71 12l-4.48 5.37a1 1 0 00.13 1.41A1 1 0 0016 19a1 1 0 00.77-.36l5-6a1 1 0 00.01-1.27z" />
                </G>
            </G>
        </Svg>
    )
}

function SettingsIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="settings-2">
                    <Path
                        d="M12.94 22h-1.89a1.68 1.68 0 01-1.68-1.68v-1.09a.34.34 0 00-.22-.29.38.38 0 00-.41 0l-.74.8a1.67 1.67 0 01-2.37 0L4.26 18.4a1.66 1.66 0 01-.5-1.19 1.72 1.72 0 01.5-1.21l.74-.74a.34.34 0 000-.37c-.06-.15-.16-.26-.3-.26H3.68A1.69 1.69 0 012 12.94v-1.89a1.68 1.68 0 011.68-1.68h1.09a.34.34 0 00.29-.22.38.38 0 000-.41L4.26 8a1.67 1.67 0 010-2.37L5.6 4.26a1.65 1.65 0 011.18-.5 1.72 1.72 0 011.22.5l.74.74a.34.34 0 00.37 0c.15-.06.26-.16.26-.3V3.68A1.69 1.69 0 0111.06 2H13a1.68 1.68 0 011.68 1.68v1.09a.34.34 0 00.22.29.38.38 0 00.41 0l.69-.8a1.67 1.67 0 012.37 0l1.37 1.34a1.67 1.67 0 01.5 1.19 1.63 1.63 0 01-.5 1.21l-.74.74a.34.34 0 000 .37c.06.15.16.26.3.26h1.09A1.69 1.69 0 0122 11.06V13a1.68 1.68 0 01-1.68 1.68h-1.09a.34.34 0 00-.29.22.34.34 0 000 .37l.77.77a1.67 1.67 0 010 2.37l-1.31 1.33a1.65 1.65 0 01-1.18.5 1.72 1.72 0 01-1.19-.5l-.77-.74a.34.34 0 00-.37 0c-.15.06-.26.16-.26.3v1.09A1.69 1.69 0 0112.94 22zm-1.57-2h1.26v-.77a2.33 2.33 0 011.46-2.14 2.36 2.36 0 012.59.47l.54.54.88-.88-.54-.55a2.34 2.34 0 01-.48-2.56 2.33 2.33 0 012.14-1.45H20v-1.29h-.77a2.33 2.33 0 01-2.14-1.46 2.36 2.36 0 01.47-2.59l.54-.54-.88-.88-.55.54a2.39 2.39 0 01-4-1.67V4h-1.3v.77a2.33 2.33 0 01-1.46 2.14 2.36 2.36 0 01-2.59-.47l-.54-.54-.88.88.54.55a2.39 2.39 0 01-1.67 4H4v1.26h.77a2.33 2.33 0 012.14 1.46 2.36 2.36 0 01-.47 2.59l-.54.54.88.88.55-.54a2.39 2.39 0 014 1.67z"
                        data-name="&lt;Group&gt;"
                    />
                    <Path d="M12 15.5a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5zm0-5a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5z" />
                </G>
            </G>
        </Svg>
    )
}

function ArrowCornerDownRight(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M19.78 12.38l-4-5a1 1 0 00-1.56 1.24l2.7 3.38H8a1 1 0 01-1-1V6a1 1 0 00-2 0v5a3 3 0 003 3h8.92l-2.7 3.38a1 1 0 00.16 1.4A1 1 0 0015 19a1 1 0 00.78-.38l4-5a1 1 0 000-1.24z"
                    data-name="corner-down-right"
                />
            </G>
        </Svg>
    )
}

function PremiumIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <LinearGradient
                id="a"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
                // @ts-ignore
                spreadMethod="pad"
            >
                <Stop offset="0%" stopColor="#4dbbff" />
                <Stop offset="100%" stopColor="#dd63ff" />
            </LinearGradient>
            <Path
                d="M11.11 23a1 1 0 01-.34-.06 1 1 0 01-.65-1.05l.77-7.09H5a1 1 0 01-.83-1.56l7.89-11.8a1 1 0 011.17-.38 1 1 0 01.65 1l-.77 7.14H19a1 1 0 01.83 1.56l-7.89 11.8a1 1 0 01-.83.44z"
                fill="url(#a)"
            />
        </Svg>
    )
}

function VerifiedIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm4.3 7.61l-4.57 6a1 1 0 01-.79.39 1 1 0 01-.79-.38l-2.44-3.11a1 1 0 011.58-1.23l1.63 2.08 3.78-5a1 1 0 111.6 1.22z"
                    data-name="checkmark-circle-2"
                />
            </G>
        </Svg>
    )
}

function AttachmentIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M9.29 21a6.23 6.23 0 01-4.43-1.88 6 6 0 01-.22-8.49L12 3.2A4.11 4.11 0 0115 2a4.48 4.48 0 013.19 1.35 4.36 4.36 0 01.15 6.13l-7.4 7.43a2.54 2.54 0 01-1.81.75 2.72 2.72 0 01-1.95-.82 2.68 2.68 0 01-.08-3.77l6.83-6.86a1 1 0 011.37 1.41l-6.83 6.86a.68.68 0 00.08.95.78.78 0 00.53.23.56.56 0 00.4-.16l7.39-7.43a2.36 2.36 0 00-.15-3.31 2.38 2.38 0 00-3.27-.15L6.06 12a4 4 0 00.22 5.67 4.22 4.22 0 003 1.29 3.67 3.67 0 002.61-1.06l7.39-7.43a1 1 0 111.42 1.41l-7.39 7.43A5.65 5.65 0 019.29 21z"
                    data-name="attach"
                />
            </G>
        </Svg>
    )
}

function BellFilledIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 00-5.82-6.88 6.74 6.74 0 00-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 004.64 18H8v.34A3.84 3.84 0 0012 22a3.84 3.84 0 004-3.66V18h3.36a1.64 1.64 0 001.16-2.79zM14 18.34A1.88 1.88 0 0112 20a1.88 1.88 0 01-2-1.66V18h4z"
                    data-name="bell"
                />
            </G>
        </Svg>
    )
}

function FlashIconOutline(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M11.11 23a1 1 0 01-.34-.06 1 1 0 01-.65-1.05l.77-7.09H5a1 1 0 01-.83-1.56l7.89-11.8a1 1 0 011.17-.38 1 1 0 01.65 1l-.77 7.14H19a1 1 0 01.83 1.56l-7.89 11.8a1 1 0 01-.83.44zM6.87 12.8H12a1 1 0 01.74.33 1 1 0 01.25.78l-.45 4.15 4.59-6.86H12a1 1 0 01-1-1.11l.45-4.15z"
                    data-name="flash"
                />
            </G>
        </Svg>
    )
}

function CompassFilledIcon(props: any) {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <G data-name="Layer 2">
          <G data-name="compass">
            <Path d="M10.8 13.21L12.49 12.53 13.2 10.79 11.51 11.47 10.8 13.21z" />
            <Path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3.93 7.42l-1.75 4.26a1 1 0 01-.55.55l-4.21 1.7A1 1 0 019 16a1 1 0 01-.71-.31h-.05a1 1 0 01-.18-1l1.75-4.26a1 1 0 01.55-.55l4.21-1.7a1 1 0 011.1.25 1 1 0 01.26.99z" />
          </G>
        </G>
      </Svg>
    )
}

function FlashIconFilled(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M11.11 23a1 1 0 01-.34-.06 1 1 0 01-.65-1.05l.77-7.09H5a1 1 0 01-.83-1.56l7.89-11.8a1 1 0 011.17-.38 1 1 0 01.65 1l-.77 7.14H19a1 1 0 01.83 1.56l-7.89 11.8a1 1 0 01-.83.44z"
                    data-name="flash"
                />
            </G>
        </Svg>
    )
}

function PlayIconOutline(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M10.46 18a2.23 2.23 0 01-.91-.2 1.76 1.76 0 01-1.05-1.59V7.79A1.76 1.76 0 019.55 6.2a2.1 2.1 0 012.21.26l5.1 4.21a1.7 1.7 0 010 2.66l-5.1 4.21a2.06 2.06 0 01-1.3.46zm0-10v7.9l4.86-3.9z"
                    data-name="arrow-right"
                />
            </G>
        </Svg>
    )
}

function PlayIconFilled(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M10.46 18a2.23 2.23 0 01-.91-.2 1.76 1.76 0 01-1.05-1.59V7.79A1.76 1.76 0 019.55 6.2a2.1 2.1 0 012.21.26l5.1 4.21a1.7 1.7 0 010 2.66l-5.1 4.21a2.06 2.06 0 01-1.3.46z"
                    data-name="arrow-right"
                />
            </G>
        </Svg>
    )
}

function MusicIconFilled(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <Path
                    d="M19 15V4a1 1 0 00-.38-.78 1 1 0 00-.84-.2l-9 2A1 1 0 008 6v8.34a3.49 3.49 0 102 3.18 4.36 4.36 0 000-.52V6.8l7-1.55v7.09a3.49 3.49 0 102 3.17 4.57 4.57 0 000-.51z"
                    data-name="music"
                />
            </G>
        </Svg>
    )
}

function SoundOffFilledIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="volume-off">
                    <Path d="M16.91 14.08l1.44 1.44a6 6 0 00-.07-7.15 1 1 0 10-1.56 1.26 4 4 0 01.19 4.45z" />
                    <Path d="M21 12a6.51 6.51 0 01-1.78 4.39l1.42 1.42A8.53 8.53 0 0023 12a8.75 8.75 0 00-3.36-6.77 1 1 0 10-1.28 1.54A6.8 6.8 0 0121 12zM15 12.17V4a1 1 0 00-1.57-.83L9 6.2zM4.74 7.57H2a1 1 0 00-1 1v6.86a1 1 0 001 1h5l6.41 4.4A1.06 1.06 0 0014 21a1 1 0 001-1v-2.17zM4.71 3.29a1 1 0 00-1.42 1.42l16 16a1 1 0 001.42 0 1 1 0 000-1.42z" />
                </G>
            </G>
        </Svg>
    )
}

function SoundOnFilledIcon(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <G data-name="Layer 2">
                <G data-name="volume-up">
                    <Path d="M18.28 8.37a1 1 0 10-1.56 1.26 4 4 0 010 4.74A1 1 0 0017.5 16a1 1 0 00.78-.37 6 6 0 000-7.26z" />
                    <Path d="M19.64 5.23a1 1 0 10-1.28 1.54A6.8 6.8 0 0121 12a6.8 6.8 0 01-2.64 5.23 1 1 0 00-.13 1.41A1 1 0 0019 19a1 1 0 00.64-.23A8.75 8.75 0 0023 12a8.75 8.75 0 00-3.36-6.77zM14.47 3.12a1 1 0 00-1 0L7 7.57H2a1 1 0 00-1 1v6.86a1 1 0 001 1h5l6.41 4.4A1.06 1.06 0 0014 21a1 1 0 001-1V4a1 1 0 00-.53-.88z" />
                </G>
            </G>
        </Svg>
    )
}

function GIFIcon(props: any) {
    return (
        <Svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                d="M17.61 21.71H6.39a4.11 4.11 0 01-4.11-4.11V6.38a4.11 4.11 0 014.11-4.11h11.22a4.11 4.11 0 014.11 4.11V17.6a4.11 4.11 0 01-4.11 4.11zM6.39 3.77a2.61 2.61 0 00-2.61 2.61V17.6a2.61 2.61 0 002.61 2.61h11.22a2.61 2.61 0 002.61-2.61V6.38a2.61 2.61 0 00-2.61-2.61H6.39z"
                fill="#000"
            />
            <Path
                d="M7.86 14.9a2.9 2.9 0 110-5.8.75.75 0 110 1.5 1.4 1.4 0 101.19 2.15h-.46a.75.75 0 110-1.5H10a.76.76 0 01.75.75 2.91 2.91 0 01-2.89 2.9zM12.65 14.89a.74.74 0 01-.75-.75v-4.3a.75.75 0 111.5 0v4.3a.75.75 0 01-.75.75zM15.33 14.9a.76.76 0 01-.75-.75v-4.3a.75.75 0 111.5 0v4.3a.75.75 0 01-.75.75z"
                fill="#000"
            />
            <Path d="M17.93 12.81h-2.6a.75.75 0 110-1.5h2.6a.75.75 0 110 1.5zM17.93 10.6h-2.6a.75.75 0 110-1.5h2.6a.75.75 0 110 1.5z" fill="#000" />
        </Svg>
    )
}

function SmilingFace(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <Defs></Defs>
            <G id="Layer_2" data-name="Layer 2">
                <G id="smiling-face">
                    <G id="smiling-face" data-name="smiling-face">
                        <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm5 9a5 5 0 01-10 0z" id="\uD83C\uDFA8-Icon-\u0421olor" />
                    </G>
                </G>
            </G>
        </Svg>
    )
}

export {
    PaperPlaneIcon,
    CameraIcon,
    UserOutlineIcon,
    UserFilledIcon,
    CompassOutlineIcon,
    HomeOutlineIcon,
    HomeFilledIcon,
    SearchOutlineIcon,
    CommentIcon,
    HeartOutlineIcon,
    HeartFilledIcon,
    BookmarkOutlineIcon,
    BookmarkFilledIcon,
    FlashOutlineIcon,
    FlashFilledIcon,
    PlusOutlineIcon,
    BellOutlineIcon,
    GridOutlineIcon,
    GridFilledIcon,
    VerticalIcon,
    LocationPinIcon,
    WebIcon,
    ArrowLeftIcon,
    UserAddIcon,
    UserDoneIcon,
    LogoutIcon,
    AlbumIcon,
    PencilIcon,
    AlbumOutlineIcon,
    SecurityOutlineIcon,
    MailIcon,
    TrashIcon,
    MoonIcon,
    SunIcon,
    ArrowRightIosIcon,
    EyeOutlineIcon,
    CheckmarkIcon,
    CrossIcon,
    VideoCameraFilledIcon,
    CameraFilledIcon,
    VerifiedIcon,
    AttachmentIcon,
    FlagIcon,
    MuteIcon,
    InfoIcon,
    CrossIconRounded,
    BellOffIcon,
    BellFilledIcon,
    TextIcon,
    MentionIcon,
    CheckmarkOutlineIcon,
    StaffIcon,
    PremiumIcon,
    ArrowCornerDownRight,
    SettingsIcon,
    FlashIconOutline,
    FlashIconFilled,
    CommentsFilledIcon,
    PlayIconOutline,
    PlayIconFilled,
    MusicIconFilled,
    SoundOffFilledIcon,
    SoundOnFilledIcon,
    GIFIcon,
    SmilingFace,
    CompassFilledIcon,
    UserRemoveIcon,
    ShareIconFilled
}
