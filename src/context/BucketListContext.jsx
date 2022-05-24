import { createContext, useReducer } from "react";

export const BucketListContext = createContext();


function reducer(activity, { type, payload }) {
  switch (type) {
    case 'create':
      return [payload, ...activity];
    case 'reset':
      return payload;
    case 'update':
      return activity.map((item) => (item.id === payload.id ? payload : item));
    case 'delete':
      return activity.filter((item) => item.id !== payload.id);
    default:
      throw Error(`Unknown action: ${type}`);
  }
}

export const BucketListProvider = ({ children }) => {
  const [activity, dispatch] = useReducer(reducer);

  return (
    <BucketListContext.Provider value={{ activity, dispatch }}>
      {children}
    </BucketListContext.Provider>
  )
}