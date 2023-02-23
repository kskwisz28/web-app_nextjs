import React from 'react'

import {Flex, Button} from 'theme-ui'
import {useTranslation} from 'next-i18next'
import Link from "next/link";

export default function Pagination({totalCount, currentPage}) {
  const {t, i18n} = useTranslation('common')

  const totalPages = Math.ceil(totalCount / 10)
  const nextPage = currentPage + 1
  const prevPage = currentPage - 1

  return (
    <Flex
      py={5}
      css={{justifyContent: 'space-between', alignItems: 'center'}}
    >
      <div>
        {prevPage > 0 && (
          <Link
            css={{
              color: '#ffffff',
              display: prevPage <= 0 ? 'none' : 'block',
            }}
            variant="cta"
            disabled={prevPage <= 0 ? 'true' : null}
            href={
              prevPage === 1
                ? '/' + i18n.language + '/' + t('common:postSlug')
                : '/' +
                i18n.language +
                '/' +
                t('common:postSlug') +
                '/' +
                prevPage
            }
          >
            <Button variant="cta">{t('common:prevPage')}</Button>
          </Link>
        )}
      </div>
      {t('common:pageOn')} {currentPage} {t('common:of')} {totalPages}
      <div>
        {nextPage <= totalPages && (
          <Link
            css={{
              color: '#ffffff',
              display: nextPage > totalPages ? 'none' : 'block',
            }}
            disabled={nextPage > totalPages ? 'true' : null}
            href={'/' + i18n.language + '/' + t('common:blog') + '/' + nextPage}
          >
            <Button variant="cta">{t('common:nextPage')}</Button>
          </Link>
        )}
      </div>
    </Flex>
  )
}
