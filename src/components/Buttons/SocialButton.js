import PropTypes from 'prop-types';

import './SocialButton.scss';

const SocialButton = (props) => {
  const { href, id, color } = props;
  return (
      <a href={href} target="_blank" className="btn" rel="noreferrer">
          <i className={id} style={{ color }} />
      </a>
  );
};

SocialButton.propTypes = {
  color: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SocialButton;
