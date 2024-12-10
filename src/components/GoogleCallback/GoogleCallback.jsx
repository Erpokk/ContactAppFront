import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleLogIn, refreshUser } from "../../redux/auth/operations";

const GoogleCallback = () => {
  const [searchParams] = useSearchParams(); // Получаем параметры из URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleGoogleCallback = async () => {
      const code = searchParams.get("code"); // Извлекаем `code` из URL
      if (!code) {
        console.error("Authorization code not found");
        return;
      }

      try {
        const resultAction = await dispatch(googleLogIn(code));
        if (googleLogIn.fulfilled.match(resultAction)) {
          console.log("Login successful:", resultAction.payload);
          dispatch(refreshUser());
          navigate("/contacts");
        } else {
          console.error("Google login failed:", resultAction.payload);
        }
      } catch (error) {
        console.error("Google login failed:", error);
      }
    };

    handleGoogleCallback();
  }, [dispatch, searchParams, navigate]);

  return <h1>Processing login...</h1>;
};

export default GoogleCallback;
