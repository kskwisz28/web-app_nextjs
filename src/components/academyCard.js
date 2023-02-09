import React from 'react'

import {Flex, Box, Heading, Link, Text} from 'theme-ui'
import {useTranslation} from "next-i18next";

export default function AcademyCard({
                               title,
                               description,
                               link,
                               linkText,
                               themeColor,
                               icon,
                               readTime,
                             }) {
  const {t} = useTranslation('academy')
  return (
    <Flex
      sx={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 6,
        p: 4,
        pl: '42px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'box-shadow 0.2s ease-in-out',
        '&:hover': {
          boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.12)',
        },
      }}
    >
      {readTime !== null && (
        <Box
          sx={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            p: 2,
            py: '4px',
            background: '#FAF8F7',
            borderRadius: '0px 4px',
          }}
        >
          <Text
            variant="normal"
            sx={{fontSize: '12px', fontWeight: '400', color: 'faded'}}
          >
            {t('readTime')} {readTime} {t('minutes')}
          </Text>
        </Box>
      )}
      {link && (
        <Link
          href={link}
          sx={{
            '::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              zIndex: 20,
            },
          }}
        />
      )}

      {icon && (
        <Box
          sx={{
            svg: {
              height: '100%',
              width: '100%',
              fill: themeColor || 'faded',
              position: 'absolute',
              bottom: '-40%',
              left: '20%',
              zIndex: 1,
              opacity: 0.1,
            },
          }}
          dangerouslySetInnerHTML={{
            __html: icon,
          }}
        />
      )}

      <Box
        sx={{
          position: 'absolute',
          backgroundColor: themeColor ?? 'primary',
          width: 8,
          left: 1,
          borderRadius: 4,
          top: 1,
          bottom: 1,
        }}
      ></Box>
      <Flex sx={{zIndex: 10, flexDirection: 'column', gap: 2}}>
        <Heading
          variant="h5"
          as="h5"
          sx={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {title}
        </Heading>

        <Text
          variant="normal"
          sx={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {description ?? '-'}
        </Text>

        <Text
          variant="normal"
          sx={{fontSize: 16, fontWeight: '700', color: 'primary'}}
        >
          {linkText}
        </Text>
      </Flex>
    </Flex>
  )
}
