import axios from "axios";
import Button from "../Button/Button";

const GoogleAuthButton = ({children}) => {
  const handleGoogleLogin = async () => {
    try {
      // Отправляем запрос на получение URL для Google OAuth
      const response = await axios.get("auth/get-oauth-url");
      console.log(response);
      const googleAuthUrl = response.data.data.url;

      // Перенаправляем пользователя на Google для авторизации
      window.location.href = googleAuthUrl;
    } catch (error) {
      console.error("Failed to get Google OAuth URL", error);
    }
  };

  return (
    <div>
      <Button onClick={handleGoogleLogin}>{children}</Button>
    </div>
  );
};

export default GoogleAuthButton;
