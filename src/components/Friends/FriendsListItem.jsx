import css from './Friends.module.css';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.friends__item}>
    <span className={isOnline ? css.online : css.offline} />,
        <img className={css.avatar} src={avatar} alt={name} />,
        <p className={css.friends__name}>{name}</p>, 
        </li>
    )
}