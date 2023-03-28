import css from './Friends.module.css';
import PropTypes from 'prop-types';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.friends__item}>
            <span className={isOnline ? css.online : css.offline} />,
            <img className={css.avatar} src={avatar} alt={name} />,
            <p className={css.friends__name}>{name}</p>,
        </li>
    );
};

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};