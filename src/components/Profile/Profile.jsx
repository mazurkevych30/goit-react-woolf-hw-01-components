import css from "./Profile.module.css"

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.stats_item}>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li className={css.stats_item}>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li className={css.stats_item}>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
}