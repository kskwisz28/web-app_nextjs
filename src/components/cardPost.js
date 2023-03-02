import Link from 'next/link'
import {Box, Heading, Text, Button, Flex} from 'theme-ui'

import MainImage from '../components/mainImage'
import {useTranslation} from "next-i18next";
import OptimizedImage from "@/components/optimizedImage";
import {useRouter} from "next/router";

export default function CardPost({node}) {
  const {t} = useTranslation('common')
  const {locale} = useRouter()

  return (
    <article
      key={node.slug.current}
      css={{
        boxShadow:
          '0 30px 60px -10px rgb(0 0 0 / 10%), 0 18px 36px -18px rgb(0 0 0 / 23%)',
      }}
    >
      <Link
        href={`/${node.language}/${node.language === 'en' ? 'blog' : 'blogg'}/${
          node.slug.current
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
                <Flex css={{justifyContent: 'center'}}>
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
                <Text px={1} variant="lead" sx={{color: 'dark300'}}>
                  {(new Date(node.publishedAt)).toLocaleDateString(locale)}
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
                  <Box
                    sx={{
                      borderRadius: '50%',
                      maxHeight: '2rem',
                      overflow: 'hidden',
                      margin: '4px 8px 4px 4px',
                    }}
                  >
                    <OptimizedImage
                      image={node.author.image}
                      alt={'author ' + node.author && node.author.name}
                      maxWidth="32px"
                    />
                  </Box>

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
              {t('readMore')}
            </Button>
          </Flex>
        </Box>
      </Link>
    </article>
  )
}
