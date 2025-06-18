import { Navigate } from 'react-router-dom';
import type User from '../types/User';

interface Props {
  user: User | null;
  onUserLogout: () => void;
}

const Profile = ({ user, onUserLogout }: Props) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <div className="content-wrapper">
        <title>Profile | MyShop</title>
        <h1>Profile</h1>
        <p className="text-dimmed">
          You are logged in as <strong>{user.username}</strong>.
        </p>
        <input
          type="button"
          value="Logout"
          className="btn-link btn-link__secondary"
          onClick={onUserLogout}
        />
      </div>
    </>
  );
};

export default Profile;
