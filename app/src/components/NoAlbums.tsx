import React from 'react'
import { Svg, G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
import { useStoreState } from '../@types/typedHooks'

export const NoAlbums = ({ width }: { width: number }) => {
  const colors = useStoreState((state) => state.theme)

  return (
    <Svg width={width} height={width / 1.38} viewBox='0 0 246 177' fill='none'>
      <G clip-path='url(#clip0)'>
        <Path
          d='M24.978 160.611L20.302 164.945L24.0181 158.667C21.0904 153.322 16.3021 148.703 16.3021 148.703C16.3021 148.703 6.36805 158.285 6.36805 165.817C6.36805 173.349 10.8157 175.979 16.3021 175.979C21.7885 175.979 26.2361 173.349 26.2361 165.817C26.236 164.14 25.7432 162.362 24.978 160.611Z'
          fill='#F2F2F2'
        />
        <Path
          d='M19.0995 165.179V165.551C19.0776 169.866 18.3547 173.233 16.9361 175.604C16.9161 175.639 16.8942 175.672 16.8741 175.707L16.7152 175.61L16.5637 175.514C18.1374 172.954 18.6942 169.335 18.7143 165.571C18.7161 165.45 18.7179 165.326 18.7161 165.203C18.7106 163.61 18.6139 161.998 18.4587 160.432C18.4477 160.311 18.435 160.188 18.4222 160.064C18.2068 157.999 17.8964 156.025 17.5788 154.31C17.5569 154.188 17.5331 154.067 17.5094 153.948C16.9599 151.047 16.3994 148.947 16.2716 148.482C16.257 148.425 16.2479 148.393 16.2461 148.386L16.4195 148.336L16.4213 148.335L16.5966 148.285C16.5984 148.292 16.6294 148.397 16.6806 148.592C16.8759 149.32 17.3834 151.296 17.8818 153.902C17.9037 154.019 17.9274 154.141 17.9493 154.262C18.2086 155.653 18.4623 157.208 18.6632 158.84C18.7143 159.25 18.7599 159.655 18.8001 160.053C18.8147 160.177 18.8275 160.3 18.8384 160.421C19.0064 162.114 19.0934 163.7 19.0995 165.179Z'
          fill='white'
        />
        <Path
          d='M17.8818 153.902C17.7595 153.918 17.6354 153.935 17.5094 153.948C17.1673 153.983 16.8236 154.001 16.4798 154.001C15.0142 154.003 13.5668 153.674 12.2443 153.038C12.1677 153.135 12.091 153.233 12.0125 153.332C13.4037 154.016 14.9317 154.37 16.4798 154.369C16.8469 154.368 17.2137 154.349 17.5788 154.31C17.7029 154.297 17.827 154.28 17.9494 154.262C18.959 154.116 19.9408 153.817 20.8612 153.374C20.7827 153.273 20.706 153.174 20.6312 153.077C19.7601 153.486 18.8336 153.764 17.8818 153.902Z'
          fill='white'
        />
        <Path
          d='M18.8001 160.053C18.6741 160.061 18.5482 160.064 18.4222 160.064C18.3838 160.066 18.3437 160.066 18.3053 160.066C16.7173 160.066 15.1528 159.68 13.7452 158.939C12.3376 158.199 11.1287 157.127 10.2216 155.815C10.1485 155.923 10.0755 156.032 10.0043 156.142C10.9499 157.47 12.196 158.552 13.6396 159.298C15.0832 160.044 16.6826 160.434 18.3053 160.434C18.3565 160.434 18.4076 160.434 18.4587 160.432C18.5865 160.43 18.7125 160.426 18.8384 160.421C20.7876 160.32 22.6668 159.657 24.2513 158.51C24.1929 158.401 24.1345 158.293 24.0743 158.184C22.5343 159.311 20.7014 159.96 18.8001 160.053Z'
          fill='white'
        />
        <Path
          d='M19.0995 165.179C18.9717 165.19 18.8439 165.198 18.7161 165.203C18.5792 165.209 18.4423 165.213 18.3053 165.213C16.1714 165.21 14.0957 164.512 12.389 163.222C10.6823 161.933 9.43634 160.121 8.83775 158.059C8.7556 158.208 8.67345 158.355 8.59494 158.504C9.26939 160.561 10.5706 162.352 12.3138 163.623C14.057 164.893 16.1534 165.578 18.3053 165.58C18.4423 165.58 18.5792 165.578 18.7143 165.571C18.8439 165.567 18.9717 165.56 19.0995 165.551C21.6807 165.347 24.0888 164.164 25.836 162.241C25.7976 162.105 25.7538 161.97 25.71 161.834C24.0224 163.772 21.6512 164.972 19.0995 165.179Z'
          fill='white'
        />
        <Path
          d='M242.5 22.7624H158.783C157.126 22.7624 155.783 24.1056 155.783 25.7624V74.4826C155.783 76.1394 157.126 77.4826 158.783 77.4826H242.5C244.157 77.4826 245.5 76.1394 245.5 74.4826V25.7624C245.5 24.1056 244.157 22.7624 242.5 22.7624Z'
          fill='#2C394B'
        />
        <Path
          d='M243.99 11.0369H118.965C118.888 11.0369 118.814 11.0062 118.76 10.9516C118.706 10.8969 118.675 10.8228 118.675 10.7455C118.675 10.6683 118.706 10.5942 118.76 10.5395C118.814 10.4849 118.888 10.4542 118.965 10.4542H243.99C244.067 10.4542 244.141 10.4849 244.195 10.5395C244.249 10.5942 244.28 10.6683 244.28 10.7455C244.28 10.8228 244.249 10.8969 244.195 10.9516C244.141 11.0062 244.067 11.0369 243.99 11.0369Z'
          fill='#CACACA'
        />
        <Path
          d='M125.479 6.95776C127.237 6.95776 128.662 5.52281 128.662 3.75272C128.662 1.98262 127.237 0.547668 125.479 0.547668C123.721 0.547668 122.295 1.98262 122.295 3.75272C122.295 5.52281 123.721 6.95776 125.479 6.95776Z'
          fill='#3F3D56'
        />
        <Path
          d='M136.476 6.95776C138.235 6.95776 139.66 5.52281 139.66 3.75272C139.66 1.98262 138.235 0.547668 136.476 0.547668C134.718 0.547668 133.293 1.98262 133.293 3.75272C133.293 5.52281 134.718 6.95776 136.476 6.95776Z'
          fill='#3F3D56'
        />
        <Path
          d='M147.474 6.95776C149.232 6.95776 150.658 5.52281 150.658 3.75272C150.658 1.98262 149.232 0.547668 147.474 0.547668C145.716 0.547668 144.291 1.98262 144.291 3.75272C144.291 5.52281 145.716 6.95776 147.474 6.95776Z'
          fill='#3F3D56'
        />
        <Path
          d='M207.012 49.4553L201.551 43.7889C201.432 43.668 201.29 43.5728 201.133 43.5093C200.976 43.4458 200.807 43.4153 200.638 43.4196H200.622C200.453 43.4153 200.285 43.4458 200.128 43.5093C199.971 43.5728 199.828 43.668 199.709 43.7889L194.248 49.4553C194.014 49.6751 193.877 49.9792 193.866 50.3008C193.856 50.6224 193.972 50.9352 194.191 51.1702C194.209 51.1901 194.228 51.2093 194.248 51.2279C194.498 51.4632 194.827 51.5941 195.169 51.5941C195.511 51.5941 195.84 51.4632 196.09 51.2279L199.326 47.8223V56.6029C199.341 56.941 199.485 57.2602 199.728 57.4941C199.971 57.728 200.294 57.8585 200.63 57.8585C200.966 57.8585 201.289 57.728 201.532 57.4941C201.775 57.2602 201.919 56.941 201.934 56.6029V47.8223L205.17 51.2279C205.42 51.4632 205.749 51.5941 206.091 51.5941C206.433 51.5941 206.763 51.4632 207.012 51.2279C207.246 51.0081 207.383 50.7039 207.394 50.3823C207.405 50.0607 207.288 49.748 207.07 49.5129C207.051 49.4931 207.032 49.4739 207.012 49.4553Z'
          fill='white'
        />
        <Path
          d='M200.641 63.6233C198.106 63.6233 195.628 62.8665 193.521 61.4487C191.413 60.0308 189.77 58.0156 188.8 55.6578C187.83 53.3 187.576 50.7056 188.071 48.2025C188.565 45.6995 189.786 43.4004 191.578 41.5958C193.371 39.7912 195.655 38.5623 198.141 38.0644C200.627 37.5665 203.204 37.822 205.546 38.7987C207.888 39.7753 209.89 41.4292 211.298 43.5511C212.706 45.6731 213.458 48.1678 213.458 50.7199C213.454 54.1409 212.103 57.4207 209.7 59.8397C207.297 62.2587 204.039 63.6194 200.641 63.6233ZM200.641 38.2943C198.2 38.2943 195.814 39.0231 193.784 40.3884C191.755 41.7538 190.173 43.6944 189.239 45.9648C188.305 48.2353 188.06 50.7337 188.536 53.144C189.013 55.5543 190.188 57.7683 191.914 59.5061C193.64 61.2438 195.839 62.4272 198.233 62.9067C200.628 63.3861 203.109 63.14 205.364 62.1996C207.62 61.2591 209.547 59.6665 210.903 57.6231C212.26 55.5798 212.983 53.1774 212.983 50.7199C212.98 47.4256 211.678 44.2672 209.364 41.9378C207.051 39.6084 203.913 38.2981 200.641 38.2943Z'
          fill='white'
        />
        <Path
          d='M207.772 106.711H123.978C123.121 106.708 122.427 105.279 122.426 103.514V60.6964C122.426 58.9319 123.121 57.5029 123.978 57.5H207.772C208.628 57.5021 209.323 58.9315 209.324 60.6964V103.514C209.323 105.278 208.627 106.708 207.772 106.711Z'
          fill='white'
        />
        <Path
          d='M150.926 81.8294C154.973 81.8294 158.253 78.5266 158.253 74.4525C158.253 70.3783 154.973 67.0756 150.926 67.0756C146.879 67.0756 143.599 70.3783 143.599 74.4525C143.599 78.5266 146.879 81.8294 150.926 81.8294Z'
          fill='#3F3D56'
        />
        <Path
          d='M173.904 97.1848H137.958C137.913 97.1853 137.869 97.1816 137.824 97.1738L154.825 67.5278C154.929 67.3431 155.08 67.1894 155.262 67.0825C155.444 66.9756 155.651 66.9192 155.862 66.9192C156.072 66.9192 156.279 66.9756 156.461 67.0825C156.643 67.1894 156.794 67.3431 156.898 67.5278L168.307 87.4227L168.854 88.3745L173.904 97.1848Z'
          fill={colors.primary}
        />
        <Path
          d='M193.917 97.1852H162.827L168.851 88.3756L169.285 87.741L177.135 76.2599C177.274 76.0842 177.448 75.94 177.646 75.8365C177.844 75.733 178.061 75.6726 178.284 75.6593C178.506 75.6459 178.729 75.6799 178.938 75.7589C179.147 75.838 179.336 75.9604 179.495 76.1182C179.536 76.163 179.573 76.2103 179.608 76.2599L193.917 97.1852Z'
          fill={colors.primary}
        />
        <Path
          d='M207.772 106.711H123.978C123.121 106.708 122.427 105.279 122.426 103.514V60.6964C122.426 58.9319 123.121 57.5029 123.978 57.5H207.772C208.628 57.5021 209.323 58.9315 209.324 60.6964V103.514C209.323 105.278 208.627 106.708 207.772 106.711ZM123.978 58.7784C123.464 58.7784 123.047 59.6377 123.047 60.6963V103.514C123.047 104.572 123.464 105.431 123.978 105.432H207.772C208.286 105.432 208.702 104.573 208.703 103.514V60.6964C208.703 59.6378 208.286 58.7795 207.772 58.7785L123.978 58.7784Z'
          fill='#E6E6E6'
        />
        <Path
          d='M111.055 176.548H0.789403C0.712647 176.548 0.639034 176.517 0.584759 176.462C0.530484 176.408 0.499992 176.334 0.499992 176.256C0.499992 176.179 0.530484 176.105 0.584759 176.05C0.639034 175.996 0.712647 175.965 0.789403 175.965H111.055C111.132 175.965 111.205 175.996 111.26 176.05C111.314 176.105 111.344 176.179 111.344 176.256C111.344 176.334 111.314 176.408 111.26 176.462C111.205 176.517 111.132 176.548 111.055 176.548Z'
          fill='#CACACA'
        />
        <Path
          d='M78.0481 60.9663C75.323 57.1028 69.9316 56.9228 69.9316 56.9228C69.9316 56.9228 64.6779 56.3591 61.3078 62.2432C58.1665 67.7277 62.5925 74.5451 62.5925 74.5451C63.4673 74.5978 67.2495 74.6209 78.5052 73.2209L79.0095 70.4829L80.4563 72.9798C81.0578 72.9059 81.6834 72.8294 82.3373 72.7499C82.0414 69.8443 80.6703 64.6838 78.0481 60.9663Z'
          fill='#2C394B'
        />
        <Path
          d='M84.4718 115.022L83.7499 90.0213L78.8348 92.1861L81.2064 115.293C80.6952 115.692 80.3257 116.247 80.153 116.875C79.9803 117.503 80.0137 118.17 80.2481 118.777C80.4826 119.384 80.9056 119.898 81.4541 120.244C82.0027 120.589 82.6473 120.747 83.2921 120.693C83.9369 120.64 84.5472 120.378 85.0322 119.947C85.5172 119.516 85.8508 118.938 85.9835 118.301C86.1161 117.663 86.0406 117 85.7682 116.409C85.4958 115.818 85.0411 115.332 84.4718 115.022Z'
          fill='#FFB8B8'
        />
        <Path
          d='M78.0669 93.2685C81.2723 93.5808 83.5746 92.2476 85.1322 89.5574L84.057 84.601C84.057 82.9886 83.5466 81.4181 82.5999 80.1176C81.6531 78.817 80.3193 77.8541 78.7921 77.3685L78.2205 77.1868L78.0669 93.2685Z'
          fill='#E6E6E6'
        />
        <Path
          d='M51.3287 86.3939C51.2866 86.3939 51.2447 86.3895 51.2035 86.3808L45.274 86.28L45.261 86.1316L45.2613 86.1252L45.7532 73.825C45.7587 73.6993 45.7888 73.576 45.8416 73.462C45.8945 73.348 45.9692 73.2456 46.0613 73.1607C46.1535 73.0758 46.2614 73.01 46.3788 72.9671C46.4963 72.9241 46.621 72.9049 46.7458 72.9105L51.4952 73.1238C51.62 73.1293 51.7424 73.1596 51.8556 73.2129C51.9687 73.2661 52.0704 73.3413 52.1547 73.4341C52.239 73.5269 52.3043 73.6355 52.3469 73.7537C52.3895 73.8719 52.4086 73.9974 52.403 74.123L51.9357 85.8062C51.9294 85.964 51.8627 86.1133 51.7495 86.2228C51.6364 86.3324 51.4856 86.3936 51.3287 86.3938L51.3287 86.3939Z'
          fill={colors.primary}
        />
        <Path
          d='M50.6824 86.4026C50.6673 86.4026 50.6521 86.4022 50.6369 86.4015L45.9811 86.1925C45.7168 86.1803 45.4681 86.0631 45.2895 85.8665C45.1109 85.67 45.0171 85.4101 45.0286 85.144L45.5259 73.9131C45.5374 73.6595 45.6484 73.4208 45.8345 73.2495C46.0206 73.0782 46.2665 72.9881 46.5185 72.9992L51.2678 73.2123C51.5197 73.2239 51.7568 73.3357 51.927 73.523C52.0972 73.7103 52.1866 73.958 52.1757 74.2116L51.6783 85.4426C51.6669 85.7008 51.557 85.9447 51.3715 86.1235C51.186 86.3023 50.9392 86.4022 50.6824 86.4026Z'
          fill='#2C394B'
        />
        <Path
          d='M48.5978 76.6171C48.9733 76.6171 49.2777 76.3107 49.2777 75.9326C49.2777 75.5546 48.9733 75.2481 48.5978 75.2481C48.2223 75.2481 47.9179 75.5546 47.9179 75.9326C47.9179 76.3107 48.2223 76.6171 48.5978 76.6171Z'
          fill={colors.primary}
        />
        <Path
          d='M54.2501 89.4499V93.9645L49.9181 87.0922C50.226 86.5621 50.3555 85.946 50.2871 85.3359C50.2187 84.7257 49.9563 84.1541 49.5389 83.7064C49.1214 83.2586 48.5714 82.9588 47.9709 82.8515C47.3703 82.7443 46.7514 82.8354 46.2065 83.1112C45.6616 83.387 45.2198 83.8328 44.9472 84.3821C44.6745 84.9314 44.5855 85.5547 44.6935 86.159C44.8015 86.7634 45.1007 87.3164 45.5464 87.7356C45.9921 88.1547 46.5605 88.4176 47.1667 88.4849L53.2223 99.2874C53.5381 99.8507 54.0243 100.298 54.61 100.564C55.1958 100.829 55.8505 100.9 56.4788 100.765C57.1072 100.63 57.6763 100.297 58.1034 99.8133C58.5304 99.3301 58.793 98.7222 58.853 98.0782L59.6023 90.0325L54.2501 89.4499Z'
          fill='#FFB8B8'
        />
        <Path
          d='M60.1809 92.9451C57.162 93.2392 54.9937 91.9837 53.5268 89.45L54.5394 84.7821C54.5394 83.2635 55.0201 81.7845 55.9117 80.5596C56.8034 79.3348 58.0595 78.4279 59.4979 77.9706L60.0362 77.7995L60.1809 92.9451Z'
          fill='#E6E6E6'
        />
        <Path
          d='M67.1797 173.841L63.8766 173.301L64.3721 160.219L69.2469 161.015L67.1797 173.841Z'
          fill='#FFB6B6'
        />
        <Path
          d='M67.9216 176.355L57.1323 176.366L57.1322 176.228C57.1311 175.107 57.5725 174.031 58.3592 173.238C59.1459 172.444 60.2136 171.997 61.3273 171.996H61.3276L67.9173 171.99L67.9216 176.355Z'
          fill='#2C394B'
        />
        <Path
          d='M82.9639 166.223L79.9763 167.74L72.741 156.862L77.1502 154.622L82.9639 166.223Z'
          fill='#FFB6B6'
        />
        <Path
          d='M85.1869 168.751L75.5542 173.644L75.4927 173.521C74.9911 172.52 74.9049 171.36 75.2533 170.295C75.6016 169.23 76.3559 168.348 77.3502 167.842L77.3504 167.842L83.2337 164.854L85.1869 168.751Z'
          fill='#2C394B'
        />
        <Path
          d='M69.5615 73.4162C72.8054 73.4162 75.4351 70.7687 75.4351 67.5029C75.4351 64.237 72.8054 61.5896 69.5615 61.5896C66.3176 61.5896 63.6879 64.237 63.6879 67.5029C63.6879 70.7687 66.3176 73.4162 69.5615 73.4162Z'
          fill='#FFB8B8'
        />
        <Path
          d='M76.8433 61.542L71.5169 58.733L64.1613 59.8822L62.6394 66.6492C70.1515 67.7368 75.3509 68.3606 77.097 66.5215L76.8433 61.542Z'
          fill='#2C394B'
        />
        <Path
          d='M60.0885 104.479C60.0885 104.479 55.611 113.699 60.572 127.341L74.2748 162.519L80.8257 158.62L74.1482 143.475L79.5799 124.938C80.8306 120.737 81.2162 116.323 80.713 111.967C80.3216 108.707 79.413 105.392 77.4368 103.721C72.7869 99.7882 60.0885 104.479 60.0885 104.479Z'
          fill='#2C394B'
        />
        <Path
          d='M67.5791 140.797L62.6113 166.154L69.2273 167.409L73.3893 145.461L67.5791 140.797Z'
          fill='#2C394B'
        />
        <Path
          d='M73.8937 76.3034L66.2996 76.4053L59.6521 77.9448L60.0461 104.75C60.0461 104.75 72.0649 108.174 77.3438 103.44L80.8258 78.3507C78.872 77.239 76.5259 76.599 73.8937 76.3034Z'
          fill='#E4E4E4'
        />
        <Path
          d='M73.2213 61.4504C75.2992 61.4504 76.9836 59.7546 76.9836 57.6627C76.9836 55.5707 75.2992 53.8749 73.2213 53.8749C71.1434 53.8749 69.459 55.5707 69.459 57.6627C69.459 59.7546 71.1434 61.4504 73.2213 61.4504Z'
          fill='#2C394B'
        />
        <Path
          d='M69.459 56.7886C69.4587 56.2284 69.5819 55.6751 69.8197 55.1686C70.0575 54.6622 70.404 54.2152 70.8341 53.8598C71.2643 53.5045 71.7674 53.2497 72.3072 53.1138C72.847 52.978 73.41 52.9644 73.9557 53.0741C73.474 52.8453 72.9495 52.7222 72.417 52.7128C71.8845 52.7034 71.3561 52.808 70.8668 53.0197C70.3775 53.2314 69.9384 53.5453 69.5786 53.9406C69.2188 54.3359 68.9465 54.8037 68.7798 55.313C68.613 55.8222 68.5557 56.3613 68.6114 56.8945C68.6672 57.4278 68.8348 57.943 69.1032 58.4061C69.3716 58.8693 69.7346 59.2697 70.1683 59.581C70.6019 59.8923 71.0963 60.1072 71.6187 60.2117C70.9732 59.9062 70.4274 59.4221 70.045 58.8159C69.6626 58.2098 69.4593 57.5066 69.459 56.7886Z'
          fill='#2C394B'
        />
      </G>
      <Defs>
        <ClipPath id='clip0'>
          <Rect
            width='245'
            height='176'
            fill='white'
            transform='translate(0.499992 0.547668)'
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
