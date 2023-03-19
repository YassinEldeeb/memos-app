import React from 'react'
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg'
import { useStoreState } from '../../state-management/typedHooks'

export const SettingsFilledIcon = () => {
  const colors = useStoreState((state) => state.theme)

  return (
    <Svg width="26" height="26" viewBox="0 0 50 50" fill="none">
      <G clip-path="url(#clip0)">
        <Path
          d="M47.2562 19.5708L43.3396 19.0729C43.0167 18.0792 42.6187 17.1208 42.1542 16.2104L44.5729 13.0958C45.5521 11.8354 45.4375 10.0562 44.3187 8.97292L41.0375 5.69167C39.9437 4.5625 38.1646 4.45 36.9021 5.42708L33.7917 7.84583C32.8812 7.38125 31.9229 6.98333 30.9271 6.66042L30.4292 2.75C30.2417 1.18125 28.9104 0 27.3333 0H22.6667C21.0896 0 19.7583 1.18125 19.5708 2.74375L19.0729 6.66042C18.0771 6.98333 17.1187 7.37917 16.2083 7.84583L13.0958 5.42708C11.8375 4.45 10.0583 4.5625 8.97292 5.68125L5.69167 8.96042C4.5625 10.0562 4.44792 11.8354 5.42708 13.0979L7.84583 16.2104C7.37917 17.1208 6.98333 18.0792 6.66042 19.0729L2.75 19.5708C1.18125 19.7583 0 21.0896 0 22.6667V27.3333C0 28.9104 1.18125 30.2417 2.74375 30.4292L6.66042 30.9271C6.98333 31.9208 7.38125 32.8792 7.84583 33.7896L5.42708 36.9042C4.44792 38.1646 4.5625 39.9438 5.68125 41.0271L8.9625 44.3083C10.0583 45.4354 11.8354 45.5479 13.0979 44.5708L16.2104 42.1521C17.1208 42.6187 18.0792 43.0167 19.0729 43.3375L19.5708 47.2458C19.7583 48.8187 21.0896 50 22.6667 50H27.3333C28.9104 50 30.2417 48.8187 30.4292 47.2562L30.9271 43.3396C31.9208 43.0167 32.8792 42.6187 33.7896 42.1542L36.9042 44.5729C38.1646 45.5521 39.9438 45.4375 41.0271 44.3187L44.3083 41.0375C45.4375 39.9417 45.5521 38.1646 44.5729 36.9021L42.1542 33.7896C42.6208 32.8792 43.0187 31.9208 43.3396 30.9271L47.2479 30.4292C48.8167 30.2417 49.9979 28.9104 49.9979 27.3333V22.6667C50 21.0896 48.8187 19.7583 47.2562 19.5708V19.5708ZM25 35.4167C19.2562 35.4167 14.5833 30.7437 14.5833 25C14.5833 19.2562 19.2562 14.5833 25 14.5833C30.7437 14.5833 35.4167 19.2562 35.4167 25C35.4167 30.7437 30.7437 35.4167 25 35.4167Z"
          fill={colors.primary}
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="50" height="50" fill={colors.primary} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
