import css from "./StatisticsListItem.module.css"
import getRandomColor from "../../helpers/random-color"

export const StatisticsListItem = ({ label, percentage }) => {
    return (
    <li className={css.item} style={{backgroundColor: getRandomColor()}}>
        <span className="label">{label}
        </span><span className="percentage">{percentage}%</span>
    </li>
    );
};