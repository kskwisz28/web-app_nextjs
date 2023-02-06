import {Box, Heading, Text, Flex} from 'theme-ui'
import InfoSection from '../components/infoWithImage'

export default function App(props) {
  // TODO: Find support for MatrixCard
  return (
    <Box
      sx={{
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      {/*
      <MatrixCard
        id={'matrix-bg'}
        matrixText={'QUICKBUTIK2015'}
        delay={100}
        backgroundColor={'rgba(0, 0, 0, 0.1)'}
        textFontSize={'16'}
        styleOverrideForChildrenDiv={{
          zIndex: 0,
          backgroundColor: 'rgba(54, 47, 74,.8)',
          display: 'flex',
          borderRadius: '8px',
          width: '90%',
          left: '5%',
          top: '5%',
          height: '90%',
        }}
        textMainColor={'#6154F9'}
        textAlternateColorRatio={0.1}
        textAlternateColorList={['#00F000', '#00EA00', '#00E000', '#00D600']}
        styleOverrideForCanvas={{backgroundColor: '#rgba(0, 0, 0,1)'}}
        styleOverrideForContainerDiv={{
          minHeight: '100vh',
          color: 'black',
        }}
      >
      */}
        <Box>
          <InfoSection noPadding {...props.info}>
            <Flex py={3} css={{alignItems: 'center', flexWrap: 'wrap'}}>
              {props.firstTitle && (
                <Heading py={2} pr={3} as="h2" color="green">
                  {props.firstTitle}
                  {props.firstText && (
                    <Text css={{display: 'block'}} color="white">
                      {props.firstText}
                    </Text>
                  )}
                </Heading>
              )}
              {props.secondTitle && (
                <Heading py={2} as="h2" color="purple">
                  {props.secondTitle}
                  {props.firstText && (
                    <Text css={{display: 'block'}} color="white">
                      {props.secondText}
                    </Text>
                  )}
                </Heading>
              )}
            </Flex>
          </InfoSection>
        </Box>
      {/*
      </MatrixCard>
      */}
    </Box>
  )
}
