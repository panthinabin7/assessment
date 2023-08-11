import classes from "./Right.module.scss";
import UpcommingHours from "./UpcommingHours";
import MoreDetails from "./MoreDetails";

const Right = () => {
  return (
    <div className={classes.right}>
      <div className={classes.title}>
        <h3>Welcome back Isabella!</h3>
        <p>Check out today weather information</p>
      </div>
      <div className={classes.upcomming}>
        <UpcommingHours />
      </div>
      <div>
        <MoreDetails />
      </div>
    </div>
  );
};

export default Right;
