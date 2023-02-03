
import { jsx } from 'theme-ui'

import Sticky from 'react-sticky-el'
import BlogSidebarItems from './blogSidebarItems'

import useWindowSize from '../hooks/useWindowSize'

export default function BlogSidebar({ categoriesMenu }) {
  const size = useWindowSize()
  const withSticky = size.width > 768
  console.log('with sticky: ' + withSticky)

  return (
    <div>
      {withSticky && (
        <Sticky>
          <BlogSidebarItems categoriesMenu={categoriesMenu} />
        </Sticky>
      )}
      {!withSticky && <BlogSidebarItems categoriesMenu={categoriesMenu} />}
    </div>
  )
}
