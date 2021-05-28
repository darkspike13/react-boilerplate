import Frame from './Frame';
import SocialButton from './Buttons/SocialButton';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Test = () => (
    <Frame>
        <SocialButton href="https://www.facebook.com/" id="fab fa-facebook-f" color="#3b5998" />
        <SocialButton href="https://www.twitter.com/" id="fab fa-twitter" color="#00acee" />
        <SocialButton href="https://www.linkedin.com/" id="fab fa-linkedin-in" color="#0e76a8" />
        <SocialButton href="mailto:darkspike13@hotmail.com" id="far fa-envelope" />
    </Frame>
);

export default Test;
