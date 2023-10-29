import { Star } from './Star'

export const Stars = (props) => {
  const count = props.count

  if (count < 1 || count > 5) {
    return null;
  }
  return (
    <ul className="card-body-stars u-clearfix">
      <li>
        {Array.from(Array(count).keys()).map(() => (
          <Star />
        ))}
      </li>
    </ul>
  )
}
