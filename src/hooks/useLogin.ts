import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { postData } from "../api/crudServices";

export function useLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  async function handleLogin (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true)
    try {
      const res = await postData('/auth/login', {    
        username: formData.username,
        password: formData.password,
        expiresInMins: 1440,
      });
      toast.success("Login successful!", { duration: 3000 });
      localStorage.setItem('authToken', res.accessToken)
      navigate("/", { replace: true });
    } catch (error: any) {
      toast.error(`${error.message as string || "Something went wrong"}`, {duration: 3000});
    } finally{
        setIsLoading(false)
    }
  };

  return { isLoading, formData, handleChange, handleLogin };
}
