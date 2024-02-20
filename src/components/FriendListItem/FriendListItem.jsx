
import css from "./FriendListItem.module.css"

export const FriendListItem = ({ avatar, name, isOnline }) => {
    const classForSpan = [css.status]
    if (isOnline) classForSpan.push(css.status_online);
    return (
        <li className={css.item}>
            <span className={classForSpan.join(" ")}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    );
}