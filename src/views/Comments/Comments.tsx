import React, { useMemo, useCallback, useEffect, useRef, useState } from "react"
import moment from "moment"
import { View, TextInput, Dimensions, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform } from "react-native"
import AppContainer from "../../utils/screen"
import Comment from "./Comment/Comment"
import styles from "./Comments.style"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { createComment, getComments } from "./CommentsAPI"
import { useRoute } from "@react-navigation/native"
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ScaleButton from "../../components/ScaleButton/ScaleButton"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import BottomModal from "../../utils/modal"
import GifPicker from "../../components/GifPicker/GifPicker"
import { Comment as CommentType } from "../../../../glynet-api/source/models/comment.model"
import { vibrate } from "../../helpers/vibration"
import Avatar from "../../components/Avatar/Avatar"
import FreshList from "../../components/FreshList/FreshList"
import Loader from "../../components/Loader/Loader"

function DismissKeyboard({ children }: any) {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    )
}

function Comments({ navigation }: any) {
    const insets = useSafeAreaInsets()
    const pageHeight = Dimensions.get("window").height - insets.bottom - insets.top - 60

    const route = useRoute() as any
    const listRef = useRef() as any

    const [commentContent, setCommentContent] = useState<string>("")
    const [comments, setComments] = useState<CommentType[]>([])
    const [isFetched, setFetched] = useState<boolean>(false)
    const [onSending, setOnSending] = useState<boolean>(false)
    const [newComment, setNewComment] = useState<CommentType|undefined>(undefined)

    const bottomSheetModalRef = useRef<BottomSheetModal>(null)
    const handlePresentModalPress = useCallback(() => {
        vibrate()
        bottomSheetModalRef.current?.present()
    }, [])

    function renderItem({ item, index, isVisible }: any) {
        return <Comment
            item={item}
            navigation={navigation}
            isVisible={isVisible}
        />
    }

    function sendButton(isGif = false, gifUrl: string) {
        if (onSending) return

        vibrate()
        listRef.current?.scrollTo({
            y: 0,
            animated: true,
        })

        const cmt = {
            id: "0",
            user: {
                is_user_ready: true,
                data: {
                    id: "",
                    name: "kim ki bu",
                    username: "cemkaracadegil",
                    avatar: "attachments/raki/p3.png",
                    flags: 0
                }
            },

            content: isGif ? gifUrl : commentContent,
            react_count: 0,
            is_liked: false,
            post_id: route.params.post_id,
            replied_to: "",
            replies: [],
            reply_count: 0,
            flags: isGif ? 8 : 0,
            timestamp: moment().unix()
        }
        setNewComment(cmt)
        setCommentContent("")
        setOnSending(true)

        createComment({
            post_id: route.params.post_id,
            content: isGif ? gifUrl : commentContent,
            reply_id: null,
            is_gif: isGif,
        }, (response: any) => {
            const data = response.data

            if (data.status) {
                const newComments = comments
                newComments.unshift(data.append)
                setComments(newComments)
                setNewComment(undefined)
                setOnSending(false)
            }
        })
    }

    function gifPicker(data: any) {
        sendButton(true, data.downsized_url)
    }

    useEffect(() => {
        if (route.params?.post_id === undefined && route.params?.is_reply === undefined) {
            console.log("hayır bu", route.params)
            return navigation.goBack()
        }

        if (route.params.is_reply && route.params?.reply_id === undefined) {
            console.log("bu yüzden go back", route.params)
            navigation.goBack()
        }

        if (isFetched) return

        getComments(route.params.post_id, route.params?.reply_id === undefined ? "0" : route.params.reply_id, route.params.is_reply, 0, (response: any) => {
            const data = response.data

            if (data.available) {
                setFetched(true)
                setComments(data.comments)
            }
        })
    }, [])

    return (
        <>
            <BottomModal modalRef={bottomSheetModalRef} snapPoints={useMemo(() => ["45%", "70%"], [])}>
                <GifPicker callback={gifPicker} modalRef={bottomSheetModalRef} />
            </BottomModal>

            <AppContainer headerTitle={route.params.is_reply ? "Yanıtlar" : "Yorumlar"} hideTabs={true} navigation={navigation}>
                <View style={{ ...styles.container, height: pageHeight - 75 }}>
                    {!isFetched && (
                        <View style={styles.loader}>
                            <Loader clearStyles={true} />
                        </View>
                    )}

                    {isFetched && (
                        <FreshList
                            data={comments}
                            ref={listRef}
                            renderComponent={renderItem}
                            HeaderComponent={newComment !== undefined ? renderItem({ item: newComment, index: 0 }) : null}
                        />
                    )}
                </View>
            </AppContainer>

            {isFetched && (
                <DismissKeyboard>
                    <KeyboardAvoidingView
                        enabled={true}
                        behavior={Platform.OS === "ios" ? "padding" : undefined}
                        style={{ ...styles.new_comment, bottom: insets.bottom }}
                    >
                        <Avatar
                            src={"https://pbs.twimg.com/profile_images/1653841629248204800/Xvn6OeCV_400x400.jpg"}
                            size={45}
                            radius={100}
                        />
                        <View style={styles.new_comment_input_container}>
                            <TextInput
                                value={commentContent}
                                onChangeText={setCommentContent}
                                placeholder={"Bir yorum bırak..."}
                                placeholderTextColor={"#969696"}
                                style={styles.new_comment_input}
                                onSubmitEditing={() => sendButton(false, "")}
                                maxLength={256}
                                returnKeyType={"send"}
                            />
                            {(!onSending && commentContent.length === 0) && (
                                <ScaleButton activeScale={0.7} onPress={handlePresentModalPress} contentContainerStyle={onSending && styles.disabled_button}>
                                    <MaterialCommunityIcons name="sticker-emoji" size={24} color="rgb(100,100,100)" />
                                </ScaleButton>
                            )}
                            {(!onSending && commentContent.length !== 0) && (
                                <ScaleButton activeScale={0.7} onPress={sendButton} contentContainerStyle={onSending && styles.disabled_button}>
                                    <Ionicons name="send" size={24} color="rgb(100,100,100)" />
                                </ScaleButton>
                            )}
                            {onSending && <Loader clearStyles={true} size={"small"} />}
                        </View>
                    </KeyboardAvoidingView>
                </DismissKeyboard>
            )}
        </>
    )
}

export default Comments
