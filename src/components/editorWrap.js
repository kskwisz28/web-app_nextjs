import styled from '@emotion/styled'


import { jsx, Flex } from 'theme-ui'

const EditorWindow = styled.div`
  position: relative;
  .editorTab {
    width: calc(3 * var(--vw));
    height: auto;
  }
`

export default function EditorWrap(props) {
  return (
    <EditorWindow className="editorWrapper" css={{ width: '100%' }}>
      <Flex
        sx={{
          borderTopLeftRadius: '1rem',
          borderTopRightRadius: '1rem',
          alignItems: 'center',
          p: 2,
        }}
        bg="dark"
      >
        <Flex ml={2} py={2}>
          <svg
            className="editorTab"
            width="40"
            height="7"
            viewBox="0 0 30 7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="3.33575"
              cy="3.59047"
              rx="3.15411"
              ry="3.13636"
              fill="#fd6462"
            ></ellipse>{' '}
            <ellipse
              cx="14.9007"
              cy="3.59047"
              rx="3.15411"
              ry="3.13636"
              fill="#f3c334"
            ></ellipse>{' '}
            <ellipse
              cx="26.4656"
              cy="3.59047"
              rx="3.15411"
              ry="3.13636"
              fill="#20D287"
            ></ellipse>
          </svg>
        </Flex>
        {props.windowText && (
          <input
            sx={{
              border: 'none',
              py: 1,
              px: 3,
              mx: 3,
              borderRadius: '50px',
              fontSize: '0.7rem',
              width: '100%',
              bg: 'rgba(255,255,255,.1)',
              color: 'white',
              '::placeholder': {
                color: 'white',
              },
            }}
            type="text"
            placeholder={props.windowText}
          />
        )}
      </Flex>
      {props.children}
    </EditorWindow>
  )
}
