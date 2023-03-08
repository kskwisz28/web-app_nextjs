import {isHomepage} from "@/helpers/general";

export default function preview(req, res) {
  res.setPreviewData({})

  let location = ['']
  if (req.query.language) {
    location.push(req.query.language)
  }
  if (req.query.slug && !isHomepage(req.query.slug)) {
    location.push(req.query.slug)
  }

  res.writeHead(307, {Location: location.join('/')})
  res.end()
}
