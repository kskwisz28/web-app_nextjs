import { Link } from 'gatsby'


import { jsx, Box, Heading, Text, Button, Flex, Image } from 'theme-ui'

import { useTranslation } from 'react-i18next'

import MainImage from '../components/mainImage'

export default function CardPost({ node }) {
  const { t } = useTranslation('common')

  return (
    <article
      key={node._rawSlug.current}
      css={{
        boxShadow:
          '0 30px 60px -10px rgb(0 0 0 / 10%), 0 18px 36px -18px rgb(0 0 0 / 23%)',
      }}
    >
      <Link
        to={`/${node.language}/${node.language === 'en' ? 'blog' : 'blogg'}/${
          node._rawSlug.current
        }`}
      >
        {node.mainImage && (
          <MainImage
            roundedUp
            shadowed
            mainImage={node.mainImage && node.mainImage}
          />
        )}
        <Box p={4}>
          <Flex
            mb={2}
            css={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Flex
              sx={{
                '@media screen and (max-width: 540px)': {
                  width: '100%',
                  justifyContent: 'center',
                  mb: 1,
                },
              }}
            >
              {node.categories && (
                <Flex css={{ justifyContent: 'center' }}>
                  {node.categories.map(category => (
                    <Text
                      variant="lead"
                      sx={{
                        color: 'primary600',
                        fontWeight: '600',
                        borderRadius: '4px',
                        mr: 1,
                      }}
                      key={category._key}
                    >
                      {category.title}
                    </Text>
                  ))}
                </Flex>
              )}
              {node.publishedAt && (
                <Text px={1} variant="lead" sx={{ color: 'dark300' }}>
                  {node.publishedAt}
                </Text>
              )}
            </Flex>

            {node.tags && (
              <Flex
                css={{
                  '@media screen and (max-width: 540px)': {
                    width: '100%',
                    justifyContent: 'center',
                    display: 'none',
                  },
                }}
              >
                {node.tags.map(tag => (
                  <Text
                    px={1}
                    variant="lead"
                    sx={{
                      color: 'dark300',
                      px: 2,
                      py: 1,
                      mr: 2,
                      borderRadius: '4px',
                    }}
                    key={tag._key}
                  >
                    #{tag.title}
                  </Text>
                ))}
              </Flex>
            )}
          </Flex>

          <Heading
            variant="text.h4"
            as="h3"
            color="text"
            css={{
              '@media screen and (max-width: 540px)': {
                textAlign: 'center',
              },
            }}
          >
            {node.title && node.title}
          </Heading>

          {node.excerpt && (
            <Box
              color="dark"
              css={{
                '@media screen and (max-width: 540px)': {
                  textAlign: 'center',
                },
              }}
            >
              <Text>{node.excerpt}</Text>
            </Box>
          )}

          <Flex
            css={{
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            <div
              css={{
                '@media screen and (max-width: 540px)': {
                  width: '100%',
                },
              }}
            >
              {node.author && (
                <Flex
                  my={2}
                  sx={{
                    alignItems: 'center',
                    '@media screen and (max-width: 540px)': {
                      justifyContent: 'center',
                    },
                  }}
                >
                  <Image
                    src={node?.author?.image?.asset?.url}
                    p={1}
                    alt={'author ' + node.author && node.author.name}
                    sx={{
                      borderRadius: '50%',
                      maxHeight: '40px',
                      mr: 1,
                    }}
                  />

                  <Box
                    color="dark"
                    css={{
                      fontSize: '0.8rem',
                      textAlign: node.author ? 'left' : 'center',
                    }}
                  >
                    {node && node.author && node.author.name}
                    {!node.author && 'Quickbutik'}
                  </Box>
                </Flex>
              )}
            </div>
            <Button
              variant="primary"
              mt={2}
              sx={{
                '@media screen and (max-width: 540px)': {
                  width: '100%',
                  mt: 2,
                },
              }}
            >
              {t('common:readMore')}
            </Button>
          </Flex>
        </Box>
      </Link>
    </article>
  )
}
