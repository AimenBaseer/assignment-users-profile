import { useQuery } from "react-query";
import { Spin } from "antd";

import { getUsersList } from "../services/userAPI";
import { UserCard } from "./UserCard";
import { IUser } from "../interface/index";

export const UsersList = () => {
  const {
    data = [],
    isLoading,
  } = useQuery<IUser[], Error>("users", getUsersList);

  return (
    <>
      {isLoading ? (
        <Spin size="large"  />
      ) : (
        <div tabIndex={0} className="cards-list-container">
          {data.map(({id, email, phone, username, website }) => {
            return (
              <UserCard
                key={id}
                email={email}
                contactNo={phone}
                userName={username}
                url={website}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
