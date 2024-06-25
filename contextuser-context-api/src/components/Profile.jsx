import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login!</div>;

  return (
    <div>
      Welcome {user.username} <br />
      Hello Mr. {user.firstName} {user.lastName}
      <br />
    </div>
  );
};

export default Profile;
