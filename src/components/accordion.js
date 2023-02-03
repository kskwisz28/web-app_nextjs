
import { Box, jsx } from 'theme-ui'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

export default function AccordionWrapper(props) {
  return (
    <Box
      sx={{
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <Accordion allowZeroExpanded>
        {props.rows &&
          props.rows.map(item => (
            <Box css={{ maxWidth: '100%', display: 'block', color: props.colorText ? props.colorText.hex : '' }}>
              <AccordionItem key={item._key}>
                <AccordionItemHeading>
                  <AccordionItemButton>{item.title}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="bg-black">
                  <p sx={{ wordBreak: 'break-word', pt: 1, pb: 4, px: 2, bg: props.colorBg ? `rgba(${props.colorBg.rgb.r},${props.colorBg.rgb.g},${props.colorBg.rgb.b}, .8)` : ''}}>{item.description}</p>
                </AccordionItemPanel>
              </AccordionItem>
            </Box>
          ))}
      </Accordion>
    </Box>
  )
}
