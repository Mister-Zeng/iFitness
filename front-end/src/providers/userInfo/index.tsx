import React, { createContext, useContext } from "react";
import { userInfoConstants } from "../../constants/userInfo";
import { UserType } from "../../models";

export const UserInfoContext = createContext<{
  userInfo: UserType;
  setUserInfo: (userInfo: UserType) => void;
}>({
  userInfo: userInfoConstants,
  setUserInfo: () => {},
});

const UserInfoSelect = () => {
  const context = useContext(UserInfoContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within AuthContext");
  }

  return context;
};

export default UserInfoSelect;
