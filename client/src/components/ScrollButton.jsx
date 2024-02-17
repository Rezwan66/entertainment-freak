import { Link } from 'react-scroll';

const ScrollButton = ({ target, text, classes }) => {
  return (
    <Link className={`${classes}`} to={target} smooth={true} duration={500}>
      {text}
    </Link>
  );
};
export default ScrollButton;
