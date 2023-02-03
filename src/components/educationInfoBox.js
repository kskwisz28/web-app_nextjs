import MainImage from './mainImage'
import { FcHome } from 'react-icons/fc'


import { jsx, Box, Heading, Text, Link, Card, Flex, Button } from 'theme-ui'

export default function EducationInfoBox(props) {
  return (
    <Card
      variant="interactive"
      key={props.companyName}
      sx={{ p: 4, height: '100%' }}
    >
      <Flex
        sx={{
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          {props.logo && props.companyWebsite && (
            <Link
              pb={10}
              variant="primary"
              href={props.companyWebsite}
              target="_blank"
              sx={{
                color: 'primary600',
                alignSelf: 'flex-end',
                display: 'block',
              }}
            >
              <MainImage
                absoluteHeight="2.4rem"
                centered
                mainImage={props.logo}
                altText={'company' + props.title + ' logo'}
              />
            </Link>
          )}
          {props.companyName && (
            <Box>
              <Heading pt={2} as="h3">
                {props.companyName}
              </Heading>
            </Box>
          )}
          {props.companyDescription && (
            <Box py={4}>
              <Text as="div">{props.companyDescription}</Text>
            </Box>
          )}
        </Box>

        <Box>
         <Box css={{ width: '100%' }}>
            {props.companyCity && 
              <Heading pt={3} pb={2} as="h4" color="dark200">
                Studieort
              </Heading>
            }

            {props.companyCity && <Text>{props.companyCity}</Text>}
          </Box>
          <Box css={{ width: '100%' }}>
            {props.companyAddress && 
              <Heading pt={3} pb={2} as="h4" color="dark200">
                Typ av utbildning
              </Heading>
            }

            {props.companyAddress && <Text>{props.companyAddress}</Text>}

          </Box>
          {props.companyWebsite && (
            <Link
              variant="buttons.cta"
              href={props.companyWebsite}
              target="_blank"
              sx={{
                alignSelf: 'flex-end',
                color: '#ffffff',
                mt: 4,
                py: 2,
                display: 'inline-block'
              }}
            >
              Läs mer & ansök
            </Link>
          )}
        </Box>
      </Flex>
    </Card>
  )
}
