import React, { useState } from "react";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
import { useFormik, validateYupSchema } from "formik";
import { SignInValidation } from "./SignupValidation";
import { useRouter } from "next/router";
import { Home } from "../Home";

export const SigninMain = () => {
  const router = useRouter();
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validationSchema: SignInValidation,
    onSubmit: () => {},
  });

  const createUser = async () => {
    try {
      const user = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      console.log(user);
      const res = await fetch("http://localhost:8000/createUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (res.status === 201) {
        return router.push("./login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="w-full h-full pt-[10px] flex justify-center">
        <div className="w-[448px] h-[744px] p-[32px] flex flex-col gap-[48px]">
          <div className="w-[348px] flex justify-center">
            <p className="text-[#0D1118] font-bold text-[28px]">Бүртгүүлэх</p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label className="font-normal text-sm">Нэрээ</label>
              <input
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[348px] h-[48px] pl-4 rounded-sm bg-[#F7F7F8]"
                type="text"
                placeholder="Нэрээ оруулна уу"
              />
              {errors.name && (
                <p className="text-red-500 text-[12px]">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="font-normal text-sm">И-мэйл</label>
              <input
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[348px] h-[48px] pl-4 rounded-sm bg-[#F7F7F8]"
                type="text"
                placeholder="И-мэйл хаягаа оруулна уу"
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
                <p className="text-red-500 text-[12px] w-[320px]">
                  {errors.password}
                </p>
              )}
            </div>
            <div>
              <label className="font-normal text-sm">Нууц үг давтах</label>
              <input
                id="cpassword"
                value={values.cpassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[348px] h-[48px] pl-4 rounded-sm bg-[#F7F7F8]"
                type="password"
                placeholder="Нууц үгээ оруулна уу"
              />
              {errors.cpassword && (
                <p className="text-red-500 text-[12px]">{errors.cpassword}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex">
              <input type="checkbox" name="horns" />
              <label className="text-[#161616] text-[14px] pl-[11px]">
                Үйлчилгээний нөхцөо зөвшөөрөх
              </label>
            </div>
            <div>
              <button className="w-[348px] h-[48px] rounded-sm bg-[#EEEFF2]  border">
                <p onClick={createUser} className="text-sm text-[#8B8E95]">
                  Бүртгүүлэх
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
