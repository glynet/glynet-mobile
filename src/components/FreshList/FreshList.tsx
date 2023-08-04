import React, { useState, forwardRef } from "react"
import { IOScrollView, InView } from 'react-native-intersection-observer'

const Component = ({ item, index, renderComponent }: any) => {
    const [componentHeight, setCompHeight] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    const onLayout = (event: any) => {
        setCompHeight(event.nativeEvent.layout.height)
    }

    return (
        <InView
            key={index}
            onLayout={onLayout}
            onChange={(inView: boolean) => setIsVisible(inView)}
        >
            {renderComponent({ item, index, isVisible })}
        </InView>
    )
}

// eslint-disable-next-line react/display-name
const FreshList = forwardRef(({ data, renderComponent, HeaderComponent, FooterComponent }: any, ref: any) => {
    return (
        <IOScrollView ref={ref}>
            {HeaderComponent && HeaderComponent}

            {data.map((item: any, index: number) => {
                return <Component
                    item={item}
                    key={index}
                    index={index}
                    renderComponent={renderComponent}
                />
            })}

            {FooterComponent && FooterComponent}
        </IOScrollView>
    )
})

const FreshList3 = ({ data, renderComponent, HeaderComponent }: any) => {
    return (
        <IOScrollView>
            {HeaderComponent && HeaderComponent}

            {data.map((item: any, index: number) => {
                return <Component
                    item={item}
                    key={index}
                    index={index}
                    renderComponent={renderComponent}
                />
            })}
        </IOScrollView>
    )
}

export default FreshList
