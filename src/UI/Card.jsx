import classes from "./Card.module.scss";
import PropTypes from "prop-types"; // Make sure to import PropTypes

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
