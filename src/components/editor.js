import React from 'react'

import BlockContent from '@sanity/block-content-to-react'
import serializer from '../helpers/serializers'

export default function editor(props) {
    return (
        <div>
            <BlockContent
                key={props._key}
                blocks={props.blockContentRaw}
                serializers={serializer}
                hardBreak
            />
        </div>
    )
}
