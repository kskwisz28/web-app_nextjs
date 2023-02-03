import MainImage from '../components/mainImage'
import { FcHome } from 'react-icons/fc'


import { jsx, Box, Heading, Text, Link, Card } from 'theme-ui'

export default function CompanyInfoBox(props) {
  return (
    <Card
      variant="interactive"
      key={props.companyName}
      sx={{ p: 4, height: '100%' }}
    >
      {props.logo && props.companyWebsite && (
        <Link
          variant="primary"
          href={props.companyWebsite}
          target="_blank"
          sx={{
            color: 'primary600',
            alignSelf: 'flex-end',
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
      {props.logo && !props.companyWebsite && (
        <Box pb={2}>
          <MainImage
            absoluteHeight="2.4rem"
            centered
            mainImage={props.logo}
            altText={'company' + props.title + ' logo'}
          />
        </Box>
      )}
      {props.companyName && (
        <Box>
          <Heading pt={2} as="h3">
            {props.companyName}
          </Heading>
        </Box>
      )}
      {props.companyAddress && (
        <Box css={{ width: '100%' }}>
          <Heading pt={3} pb={2} as="h4" color="dark200">
            Adress
          </Heading>
          <Text as="div">{props.companyAddress}</Text>
          {props.companyCity && <Text as="div">{props.companyCity}</Text>}
        </Box>
      )}
      
      {props.contactName && (
      <Box css={{ width: '100%' }}>
        <Heading pt={3} pb={2} as="h4" color="dark200">
          Kontaktinformation
        </Heading>

        {props.contactName && (
          <Text css={{ display: 'block' }}>{props.contactName}</Text>
        )}
        {props.companyEmail && (
          <Link
            variant="primary"
            sx={{ color: 'primary600' }}
            href={`mailto:${props.companyEmail}`}
          >
            {props.companyEmail}
          </Link>
        )}
        
      </Box>
      )}

      {props.companyWebsite && (
        <Link
          variant="primary"
          href={props.companyWebsite}
          target="_blank"
          sx={{
            color: 'primary600',
            alignSelf: 'flex-end',
          }}
        >
          <FcHome sx={{ mt: 2, mr: 1, height: '0.8rem' }} />
          Besök webbplats
        </Link>
      )}
    </Card>
  )
}
