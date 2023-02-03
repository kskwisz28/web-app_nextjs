import { FaCheck } from 'react-icons/fa'


import { jsx } from 'theme-ui'

export default function boxListItem(props) {
  return (
    <li sx={{ py: 2 }}>
      <FaCheck sx={{ color: 'green', pr: 1, mb: '-4px' }} />
      {props.children}
    </li>
  )
}
