export default function preview(req, res) {
  res.setPreviewData({})
  const lang = req.query.language || ''
  res.writeHead(307, {Location: `/${lang}`})
  res.end()
}
