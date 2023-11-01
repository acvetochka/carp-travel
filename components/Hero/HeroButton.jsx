import { Link } from 'react-scroll';
import styles from '../../styles/button.module.css';

const HeroButton = () => {
  return (
    <div className={`md:col-start-2 md:row-start-5 ${styles.button}`}>
      <div
        className={` text-btn-m font-bold  opacity-100 transition-all ease-in-out hover:backdrop-opacity-20 duration-500 ${styles.buttonReverse}`}
      >
        <Link
          className="w-full"
          to="contacts"
          spy={true}
          smooth={true}
          duration={1500}
          href="/"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default HeroButton;
