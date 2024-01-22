import React, { useEffect } from "react";
import { Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

function Notification({ type, message }) {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(
      uiActions.showNotification({
        open: false,
      })
    );
  };
  useEffect(() => {
    if (notification.open) {
      const timer = setTimeout(() => {});
    }
  });

  return (
    <div className="notifi">
      {notification.open && (
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      )}
    </div>
  );
}

export default Notification;
