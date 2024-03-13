import React from "react";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
import { LoginValidation } from "./LoginValidation";
import { useRouter } from "next/router";
import { useFormik } from "formik";

export const LoginMain = () => {
  const router = useRouter();

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: () => {},
  });

  const loginUser = async () => {
    try {
      const user = {
        email: values.email,
        password: values.password,
      };
      console.log(user);
      const res = await fetch("http://localhost:8000/loginUser", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user),
      });
      if (res.status !== 200) {
      }
      if (res.status === 400) {
        return alert("нэвтрэх нэр эсвэл нууц үг буруу");
      }
      if (res.status === 200) {
        return router.push("./");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <Header />
      <div className="w-full h-full pt-[111px] flex justify-center">
        <div className="w-[448px] h-[549px] p-[32px] flex flex-col gap-[48px]">
          <div className="w-[348px] flex justify-center">
            <p className="text-[#0D1118] font-bold">Нэвтрэх</p>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="font-normal text-sm">Имэйл</label>
              <input
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[348px] h-[48px] pl-4 rounded-sm bg-[#F7F7F8]"
                type="text"
                placeholder="Имэйл хаягаа оруулна уу"
              />
              {errors.email && (
                <p className="text-red-500 text-[12px]">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="font-normal text-sm">Нууц үг</label>
              <input
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[348px] h-[48px] pl-4 rounded-sm bg-[#F7F7F8]"
                type="password"
                placeholder="Нууц үг"
              />
              {errors.password && (
                <p className="text-red-500 text-[12px]">{errors.password}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[32px]">
            <button
              onClick={loginUser}
              className="w-[348px] hover:bg-[#18BA51] hover:text-black h-[48px] bg-[#EEEFF2] text-[#1C20243D] rounded-sm">
              Нэвтрэх
            </button>
            <div className="w-[348px] text-[#3F4145]  flex justify-center">
              Эсвэл
            </div>
            <a href="/signup">
              <button className="w-[348px] h-[48px] rounded-sm border-emerald-500 border">
                Бүртгүүлэх
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
