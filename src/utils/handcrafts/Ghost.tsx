import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={40.96668}
      height={49.16565}
      viewBox="0 0 40.96668 49.16565"
      {...props}
    >
      <G fill="#01010c">
        <Path d="M17.482 19.167c3.217 0 3.223-5 0-5-3.217 0-3.223 5 0 5z" />
        <Path d="M23.911 19.167c3.217 0 3.223-5 0-5-3.217 0-3.223 5 0 5z" />
      </G>
      <Path
        d="M4.867 47.342a171.483 171.483 0 014.15-18.782c1.682-5.98 3.566-12.049 6.081-17.739.836-1.891 1.893-4.081 3.71-5.21 1.877-1.165 4.1-.541 5.746.751 2.03 1.593 3.131 4.137 3.976 6.5 1.073 3.003 1.992 6.067 2.86 9.133a179.631 179.631 0 014.713 21.789c.204 1.336 1.883 2.074 3.075 1.746 1.427-.392 1.95-1.736 1.746-3.075a179.888 179.888 0 00-4.518-21.096c-.956-3.431-1.967-6.871-3.196-10.216-1.074-2.922-2.444-5.887-4.784-8.024C26.001.905 22.76-.413 19.46.117c-2.852.458-5.077 2.345-6.712 4.633-1.76 2.462-2.786 5.415-3.85 8.221a169.735 169.735 0 00-3.37 9.76A171.135 171.135 0 00.046 46.013c-.217 1.33.347 2.69 1.746 3.075 1.194.328 2.857-.406 3.076-1.746z"
        fill="#01010c"
      />
    </Svg>
  )
}

export default SvgComponent
