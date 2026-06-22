import classes from './ToastContainer.module.css';

const ToastContainer = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default ToastContainer;