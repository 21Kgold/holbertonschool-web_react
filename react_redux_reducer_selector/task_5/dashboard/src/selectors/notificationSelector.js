// state must be an inmutable Map collection of key-value pairs
export const filterTypeSelected = (state) => state.get("filter");

export const getNotifications = (state) => state.get("notifications");

export const getUnreadNotifications = (state) => {
  return getNotifications(state).filter(
    (value) => value.get("isRead") === true
  );
}
