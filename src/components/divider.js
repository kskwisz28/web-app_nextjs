
import { useThemeUI, jsx, Box } from 'theme-ui'

export default ({
  variant,
  topColor,
  bottomColor,
  symbolUpper,
  symbolLower,
  multiply,
}) => {
  const context = useThemeUI()
  const { theme } = context

  const _topColor = topColor?.theme?.color
    ? theme.colors[topColor?.theme?.color]
    : '#f7f8fc'

  const _bottomColor = bottomColor?.theme?.color
    ? theme.colors[bottomColor?.theme?.color]
    : '#f7f8fc'

  if (variant === 'bottomLeft')
    return (
      <Box bg={_topColor}>
        <svg
          width="100%"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', margin: '-1px 0' }}
        >
          <path d="M1440 320H0V254L1440 0V320Z" fill={_bottomColor} />
          <rect
            x="54.0898"
            y="179.987"
            width="328.177"
            height="64"
            rx="32"
            transform="rotate(-10 54.0898 179.987)"
            fill={symbolUpper?.colorSelection?.value || '#DFF6FD'}
          />
          <circle
            cx="425"
            cy="144"
            r="28"
            fill={symbolUpper?.colorSelection?.value || '#DFF6FD'}
          />
          <g style={{ mixBlendMode: multiply ? 'multiply' : '' }} opacity="0.9">
            <path
              d="M0 287.627L215.752 249.584C233.156 246.515 244.778 229.918 241.709 212.514C238.64 195.109 222.043 183.488 204.638 186.557L0 222.64V287.627Z"
              fill={symbolLower?.colorSelection?.value || '#E7FCE6'}
            />
          </g>
          <circle opacity="0.9" cx="210" cy="218" r="28" fill={'#fff'} />
        </svg>
      </Box>
    )

  return (
    <Box bg={_bottomColor}>
      <svg
        style={{ display: 'block', margin: '-1px 0' }}
        width="100%"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H1440V66L0 320V0Z" fill={_topColor} />
        <g style={{ mixBlendMode: multiply ? 'multiply' : '' }} opacity="0.8">
          <path
            d="M1030.45 106.13L1439.52 34V98.9873L1041.56 169.158C1024.16 172.227 1007.56 160.605 1004.49 143.201C1001.42 125.796 1013.04 109.199 1030.45 106.13Z"
            fill={symbolUpper?.colorSelection?.value || '#CEFACF'}
          />
        </g>
        <path
          opacity="0.8"
          d="M1439.52 66L1286.14 93.044C1268.74 96.1129 1257.12 112.71 1260.19 130.115C1263.26 147.519 1279.85 159.141 1297.26 156.072L1439.52 130.987V66Z"
          fill={symbolLower?.colorSelection.value || '#DFF6FD'}
        />
      </svg>
    </Box>
  )
}
