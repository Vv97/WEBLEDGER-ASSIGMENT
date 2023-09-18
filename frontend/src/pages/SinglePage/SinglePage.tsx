import { useParams } from "react-router-dom";
import { SignupResponseInterface } from "../../types/user.types";
import { GetSaveRecipe } from "../../types/recipes.interface";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

const initialData: GetSaveRecipe = {
  _id: "",
  userID: "",
  createdAt: "",
  updateAt: "",
  id: 0,
  title: "",
  image: "",
  imageType: "",
};

export const SinglePage = () => {
  const { id } = useParams();
  const [data, setdata] = useState<GetSaveRecipe>(initialData);
  const getSaveRecipes = async () => {
    const url = `https://webledger-assigment.onrender.com/recipes/${id}`;
    const token: string = localStorage.getItem("users") || "";
    const users: SignupResponseInterface = token
      ? JSON.parse(token)
      : { message: "", users: {}, token: "" };
    const options = {
      headers: {
        Authorization: users.token || "",
      },
    };
    try {
      const response: AxiosResponse<GetSaveRecipe> = await axios.get(
        url,
        options
      );

      if (response.status >= 200 && response.status < 300) {
        setdata(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSaveRecipes();

    return () => {
      setdata(initialData);
    };
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "25px",
        flexDirection: "column",
      }}
    >
      <div>
        <img src={data.image} alt="" />
      </div>

      <div>{data.title}</div>
    </div>
  );
};
