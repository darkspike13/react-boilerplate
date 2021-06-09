import Clock from '../components/Clock/Clock';
import Frame from '../components/Frame';
import SocialButton from '../components/Buttons/SocialButton';

import './Home.scss';

const Home = () => (
    <div className="c-home">
        <div className="c-home-clock">
            <Clock />
            <h2>Work in Progress</h2>
        </div>
        <div className="c-home-socials">
            <Frame>
                <SocialButton href="https://github.com/darkspike13/" id="fab fa-github" />
                <SocialButton href="https://www.facebook.com/darkspike13/" id="fab fa-facebook-f" color="#3b5998" />
                <SocialButton href="https://www.instagram.com/darkspike13/" id="fab fa-instagram" color="#C13584" />
                <SocialButton href="https://www.twitter.com/darkspike13/" id="fab fa-twitter" color="#00acee" />
                <SocialButton href="https://www.linkedin.com/in/guillaume-assaud-880913188/" id="fab fa-linkedin-in" color="#0e76a8" />
                <SocialButton href="mailto:darkspike13@hotmail.com" id="far fa-envelope" />
            </Frame>
        </div>
    </div>
);

export default Home;
