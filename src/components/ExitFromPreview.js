import Link from 'next/link'

export default function ExitFromPreview() {
  return (
    <Link
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        p: '6px',
        backgroundColor: 'blue',
        color: 'white',
        fontWeight: 'bold',
      }}
      href="/api/exit-preview"
    >
      Exit Preview
    </Link>
  )
}
