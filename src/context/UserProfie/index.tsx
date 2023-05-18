import React, { useContext } from 'react';
import UserContext from '../useContext';

const UserProfile = () => {
  // Sử dụng giá trị từ Context bằng useContext
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={user.updateUserData}>Random Data</button>
    </div>
  );
};

export default UserProfile;
