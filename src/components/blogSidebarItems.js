import {Box, Heading, useThemeUI} from 'theme-ui'

import SocialIcons from '../components/socialIcons'
import styled from '@emotion/styled'
import LinkCustom from '../components/linkCustom'

import {useTranslation} from 'next-i18next'
import {useRouter} from "next/router";

export default function BlogSidebarItems({categoriesMenu}) {
  const {t} = useTranslation('common')

  const router = useRouter()
  const context = useThemeUI()
  const {theme} = context

  const CategoryLink = styled(LinkCustom)`
    color: ${theme.colors.primary600};
    font-weight: 600;
    display: block;
    padding: 0.2rem 0;
    font-size: 1rem;
    &:hover {
      color: ${theme.colors.primary};
    }
  `

  return (
    <div>
      <Box p={3} mb={3} sx={{borderRadius: '8px'}}>
        <Heading as="h1" sx={{mb: 3}}>
          {t('common:Blog')}
        </Heading>
        <h2>{t('common:Categories')}</h2>
        {categoriesMenu &&
          categoriesMenu[0] &&
          categoriesMenu[0].menuItems[router.locale] &&
          categoriesMenu[0].menuItems[router.locale].map(category => (
            <CategoryLink
              key={category._key}
              to={category.menuItemSlug}
              effect="fade"
              length={0}
            >
              {category.menuItemName}
            </CategoryLink>
          ))}
      </Box>
      <Box my={3} p={3} sx={{borderRadius: '8px'}}>
        <h2>{t('common:connect')}</h2>
        <SocialIcons/>
      </Box>
    </div>
  )
}
