import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import CircleLoader from 'react-spinners/ClipLoader';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  //   console.log(location.pathname);
  //   console.log(user, loading);
  if (loading) {
    return (
      <div className="text-center mt-20">
        <CircleLoader size={50} color="#36d7b7" />
        <CircleLoader size={50} color="#FBBF24" />
        <CircleLoader size={50} color="#FF0000" />
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
