import React, { createContext } from 'react';

// Tạo Context với giá trị mặc định
const UserContext = createContext({
  name: 'Guest',
  age: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateUserData: () => {}
});

export default UserContext;
