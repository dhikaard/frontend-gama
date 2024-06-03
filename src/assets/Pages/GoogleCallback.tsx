import { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Center, Loader } from "@mantine/core";

const GoogleCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
      const fetchUser = async () => {
          try {
              const response = await axios.get(`http://127.0.0.1:8000/api/v1/auth/callback${location.search}`);
              const {user, token} = response.data;
              
              localStorage.setItem('token', token);
              localStorage.setItem('name', user.full_name);

              navigate('/');
          } catch (error) {
              console.error('Error handling Google callback:', error);
          }
      };

      fetchUser();
  }, [location.search]);

  return (
    <Center  maw={"25.75rem"} h={"100vh"}>
        <Loader color="green" />
    </Center>
  );
};

export default GoogleCallback;
