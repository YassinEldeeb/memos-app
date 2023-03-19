import React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'
import { useStoreState } from '../../state-management/typedHooks'

export const EditIcon = ({ size }: { size: number }) => {
  const colors = useStoreState((state) => state.theme)

  return (
    <Svg
      opacity={0.8}
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
    >
      <G clip-path="url(#clip0)">
        <Path
          d="M27.6888 18.8458C27.2761 18.8458 26.9417 19.1803 26.9417 19.593V26.2269C26.9402 27.4644 25.9377 28.4672 24.7002 28.4684H3.73578C2.4983 28.4672 1.49577 27.4644 1.49431 26.2269V6.75677C1.49577 5.51959 2.4983 4.51677 3.73578 4.51531H10.3697C10.7824 4.51531 11.1169 4.18084 11.1169 3.76815C11.1169 3.35576 10.7824 3.021 10.3697 3.021H3.73578C1.67351 3.02333 0.00233391 4.69451 -9.53674e-07 6.75677V26.2272C0.00233391 28.2894 1.67351 29.9606 3.73578 29.963H24.7002C26.7625 29.9606 28.4336 28.2894 28.436 26.2272V19.593C28.436 19.1803 28.1015 18.8458 27.6888 18.8458V18.8458Z"
          fill={colors.white}
        />
        <Path
          d="M28.14 1.09854C26.827 -0.214528 24.6982 -0.214528 23.3851 1.09854L10.0554 14.4283C9.96402 14.5196 9.89806 14.6328 9.86362 14.7572L8.11073 21.0855C8.03864 21.345 8.11189 21.6228 8.30218 21.8134C8.49277 22.0037 8.77062 22.077 9.03008 22.0052L15.3584 20.252C15.4828 20.2175 15.596 20.1516 15.6873 20.0602L29.0168 6.73022C30.3278 5.41628 30.3278 3.28922 29.0168 1.97528L28.14 1.09854ZM11.6834 14.9139L22.5927 4.00427L26.111 7.52262L15.2014 18.4323L11.6834 14.9139ZM10.9806 16.3242L13.7914 19.1353L9.90332 20.2126L10.9806 16.3242ZM27.9603 5.6737L27.1679 6.46609L23.6492 2.94746L24.4419 2.15506C25.1713 1.42571 26.3539 1.42571 27.0832 2.15506L27.9603 3.0318C28.6884 3.76203 28.6884 4.94376 27.9603 5.6737V5.6737Z"
          fill={colors.white}
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width={size} height={size} fill={colors.white} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
