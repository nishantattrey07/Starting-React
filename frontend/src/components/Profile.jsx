import PropTypes from 'prop-types';

export function Profile({ user }) {
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.username}</p>
            <img
                src={user.imageurl}
                alt={'photo of ' + user.name}
                style={{
                    width: user.imagesize,
                    height: user.imagesize
                }}
                className="avatar"
            />
        </div>
    );
}

Profile.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        imageurl: PropTypes.string.isRequired,
        imagesize: PropTypes.number.isRequired,
    }).isRequired
};
