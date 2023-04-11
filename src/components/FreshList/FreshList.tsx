import React, { useState } from "react"
import { View, Text } from "react-native"
import { IOScrollView, InView } from 'react-native-intersection-observer'

const Component = ({ item, index, renderComponent, skeletonComponent }: any) => {
    const [componentHeight, setCompHeight] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    const onLayout = (event: any) => {
        setCompHeight(event.nativeEvent.layout.height)
    }

    return (
        <InView
            key={index} 
            onLayout={onLayout} 
            style={{
                backgroundColor: isVisible ? "green" : "yellow"
            }}
            onChange={(inView: boolean) => setIsVisible(inView)}
        >
            <Text>{componentHeight}</Text>
            {isVisible && renderComponent({ item, index })}
            {!isVisible && skeletonComponent({ index })}
        </InView>
    )
}

const FreshList = ({ data, renderComponent, skeletonComponent, HeaderComponent }: any) => {
    return (
        <IOScrollView>
            {HeaderComponent && HeaderComponent}
            
            {data.map((item: any, index: number) => {
                return <Component
                    item={item} 
                    key={index} 
                    index={index} 
                    renderComponent={renderComponent}
                    skeletonComponent={skeletonComponent}
                />
            })}
        </IOScrollView>
    )
}

export default FreshList