import { Star } from './Star.tsx'

type TStars = {
  count: number;
}

export const Stars = (props: TStars) => {
  const count = props.count

  if (count < 1 || count > 5) {
    return null;
  }
  return (
    <ul className="card-body-stars u-clearfix">
      <li>
        {Array.from(Array(count).keys()).map((index) => (
          <Star key={index}/>
        ))}
      </li>
    </ul>
  )
}
