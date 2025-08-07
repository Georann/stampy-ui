import type {TOCItem} from '~/routes/questions.toc'
import {questionUrl} from '~/routesMapper'
import './grid.css'

export const GridBox = ({title, subtitle, pageid}: TOCItem) => (
  <a href={questionUrl({title, pageid})} className="grid-item bordered">
    <p className="large-bold">{title}</p>
    <div className="grid-description grey">{subtitle}</div>
  </a>
)

interface GridProps {
  gridBoxes: TOCItem[]
}
export const Grid = ({gridBoxes}: GridProps) => (
  <div className="grid">
    {gridBoxes
      .filter(({category}) => category)
      .slice(0, 6)
      .map((gridBoxProps) => (
        <GridBox key={gridBoxProps.title} {...gridBoxProps} />
      ))}
  </div>
)
export default Grid
