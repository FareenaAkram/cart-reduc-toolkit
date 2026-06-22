import { useEffect } from 'react';
import { CheckCircle2, CircleAlert, Loader2 } from 'lucide-react';
import classes from './Notification.module.css';

const Notification = ({ status, message, onClose }) => {
  useEffect(() => {
    if (status === 'pending') return;

    const timer = setTimeout(() => {
      onClose();
    }, status === 'success' ? 2000 : 4000);

    return () => clearTimeout(timer);
  }, [status, onClose]);

  const icon =
    status === 'pending' ? (
      <Loader2 className={classes.spinner} size={18} />
    ) : status === 'success' ? (
      <CheckCircle2 className={classes.successIcon} size={18} />
    ) : (
      <CircleAlert className={classes.errorIcon} size={18} />
    );

  return (
    <div
      className={`${classes.toast} ${
        status === 'success'
          ? classes.success
          : status === 'error'
          ? classes.error
          : ''
      }`}
    >
      {icon}
      <span>{message}</span>
    </div>
  );
};

export default Notification;