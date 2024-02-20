import { StatisticsListItem } from "components/StatisticsListItem/StatisticsListItem"
import css from "./Statistics.module.css"


export const Statistics = ({title, stats}) => {
    return <div className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
  <ul className={css.stat_list}>
  {stats.map(({id, label, percentage}) => <StatisticsListItem key={id} label={label} percentage={percentage}/>)}     
  </ul>
</div>
}