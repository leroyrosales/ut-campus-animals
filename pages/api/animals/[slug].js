import { animals } from '../../../data'

export default function handler({ query: { slug } }, res) {
  const filtered = animals.filter((animal) => animal.slug === slug)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Animal with the slug of ${slug} is not found` })
  }
}
