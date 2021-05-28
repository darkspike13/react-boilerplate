/* eslint-disable react/destructuring-assignment */
import './Frame.scss';

const Frame = (props) => (
    <div className="frame">
        {props.children}
    </div>
);

export default Frame;
