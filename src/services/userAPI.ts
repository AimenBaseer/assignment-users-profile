import axios from "axios";
import { IUser } from "../interface";
import { USERS_URL, AVATAR_URL } from "../constants";

export const getUsersList = async () => {
  const response = await axios.get<IUser[]>(USERS_URL);
  return response.data;
};

export const getAvatar = async (userName: string) => {
  const response = await axios.get<string>(AVATAR_URL(userName));
  return response.data;
};
