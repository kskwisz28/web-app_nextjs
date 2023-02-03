import React from 'react'

import BlockContent from '@sanity/block-content-to-react'
import serializer from '../helpers/serializers'

export default function editor(props) {
    return (
        <div>
            {console.log(props)}
            <BlockContent
                key={props._key}
                blocks={props.blockContent}
                serializers={serializer}
                hardBreak
            />
        </div>
    )
}
