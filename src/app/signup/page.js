"use client";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import Lottie from "lottie-react";
import singUpIcon from "../../assest/icons/oNAKbP8r85.json";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Link from "next/link";
const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Hide password
  const handlePasswordHide = () => {
    setShowPassword(!showPassword);
  };

  // Hide ConfirmPassword
  const handleConfirmPasswordHide = () => {
    setshowConfirmPassword(!showConfirmPassword);
  };

  //   Reguler Expression For Password validation
  const regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{6,}$/;

  // Below Function work for Form [Start]
  const onSubmit = (data) => {
    if (data.password === data.confirmPassword && validateCaptcha(data.captcha) == true) {
      console.log(data);
      reset();
      setConfirmPasswordError("");
      setCaptchaError("");
    } else {
      setConfirmPasswordError("Password and Confirm Password don't match");
      setCaptchaError("Captcha don't match")
    }
  };
  //  Function work for Form [End]

  useEffect(() => {
    loadCaptchaEnginge(6,"white","red");
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        {/* Left side ---> Lottie Animation Start  */}
        <div className="w-3/6">
          <Lottie animationData={singUpIcon} loop={true} />
        </div>
        {/* Left side ---> Lottie Animation End  */}

        {/* Right Side ----> Form Section Start  */}
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* First and Last Name Start  */}
            <div className="flex gap-2 pt-7">
              {/* First name*/}
              <div className=" w-full">
                <label
                  htmlFor="firstName"
                  className="pb-2 block text-lg text-[#E73300]  font-black"
                >
                  First name
                </label>
                <input
                  {...register("firstName", { required: true })}
                  className="placeholder:text-xs placeholder:text-red-300 w-full border focus:outline-none  px-3 py-2 rounded-md border-[#E73300]"
                  placeholder="Your First Name"
                />
                {/* errors will return when field validation fails  */}
                {errors.firstName && (
                  <span className="text-xs text-red-500 pb-1 inline ">
                    This field is required
                  </span>
                )}
              </div>

              {/* last name*/}
              <div className=" w-full">
                <label
                  htmlFor="firstName"
                  className="pb-2 block text-lg text-[#E73300]  font-black"
                >
                  Last name
                </label>
                <input
                  {...register("lastName", { required: true })}
                  className="placeholder:text-xs placeholder:text-red-300 w-full border focus:outline-none  px-3 py-2 rounded-md border-[#E73300]"
                  placeholder="Your Last Name"
                />
                {/* errors will return when field validation fails  */}
                {errors.lastName && (
                  <span className="text-xs text-red-500 pb-1 inline ">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            {/* First and Last Name End  */}

            {/* Email Address  */}
            <div className="flex flex-col gap-2  pt-7">
              <label
                htmlFor="email"
                className="pb-2 block text-lg text-[#E73300]  font-black"
              >
                Email Adresss
              </label>
              <input
                {...register("email", { required: true })}
                className="placeholder:text-xs placeholder:text-red-300 w-full border focus:outline-none  px-3 py-2 rounded-md border-[#E73300]"
                placeholder="Your Email Adresss"
              />
              {/* errors will return when field validation fails  */}
              {errors.email && (
                <span className="text-xs text-red-500 pb-1 inline ">
                  This field is required
                </span>
              )}
            </div>

            {/* Password and Confirm Password field Start  */}
            {/* Only Password */}
            <div className="relative w-full  pt-7">
              <label
                htmlFor="password"
                className="pb-2 block text-lg text-[#E73300]  font-black"
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: true,
                  pattern: regex,
                })}
                type={showPassword ? "text" : "password"}
                className="placeholder:text-xs placeholder:text-red-300 w-full border focus:outline-none  px-3 py-2 rounded-md border-[#E73300]"
                placeholder="Type strong password"
              />

              {showPassword ? (
                <span className="absolute top-[75px] right-4">
                  <svg
                    onClick={handlePasswordHide}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6  text-red-600 cursor-pointer"
                  >
                    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                  </svg>
                </span>
              ) : (
                <span className="absolute top-[75px] right-4">
                  <svg
                    onClick={handlePasswordHide}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-red-600 cursor-pointer"
                  >
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}

              {/* errors will return when field validation fails  */}
              {errors.password?.type === "required" && (
                <span className="text-xs text-red-500 pb-1 inline ">
                  This password is required
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-xs text-red-500 pb-1 inline ">
                  Password must have 6 characters. <br /> one Uppercase and
                  lowercase Letter. <br />
                  One Special Character and at least one digit.
                </span>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative w-full  pt-7">
              <label
                htmlFor="password"
                className="pb-2 block text-lg text-[#E73300]  font-black"
              >
                Confirm Password
              </label>
              <input
                {...register("confirmPassword", {
                  required: true,
                })}
                type={showConfirmPassword ? "text" : "password"}
                className="placeholder:text-xs placeholder:text-red-300 w-full border focus:outline-none  px-3 py-2 rounded-md border-[#E73300]"
                placeholder="Confirm your password"
              />

              {showConfirmPassword ? (
                <span className="absolute top-[75px] right-4">
                  <svg
                    onClick={handleConfirmPasswordHide}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6  text-red-600 cursor-pointer"
                  >
                    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                  </svg>
                </span>
              ) : (
                <span className="absolute top-[75px] right-4">
                  <svg
                    onClick={handleConfirmPasswordHide}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-red-600 cursor-pointer"
                  >
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}

              {/* errors will return when field validation fails  */}
              {errors.confirmPassword?.type === "required" && (
                <span className="text-xs text-red-500 pb-1 inline pr-3">
                  This password is required.
                </span>
              )}
              <span className="text-xs text-red-500 pb-1 inline ">
                {confirmPasswordError}
              </span>
            </div>
            {/* Password and Confirm Password field End*/}

            {/* Terms and Condition Field Start  */}
            <div className="form-control pt-7">
              <label className="cursor-pointer label">
                <input
                  {...register("termsAndConditions", {
                    required: true,
                  })}
                  type="checkbox"
                  className="checkbox checkbox-error  border-red-500"
                />
                <span className="pb-2 block text-lg text-[#E73300]  font-black">
                  I accept the{" "}
                  <span className="text-red-300 underline">
                    {" "}
                    <Link href="/">terms and conditions</Link>{" "}
                  </span>
                </span>
              </label>
              {/* errors will return when field validation fails  */}
              {errors.termsAndConditions && (
                <span className="text-xs text-red-500 pb-1 inline ">
                  This Terms And Conditions Checkbox is required.
                </span>
              )}
            </div>
            {/* Terms and Condition Field End */}

            {/* Captch Start  */}
            <div className="pt-7">
              <label
                htmlFor="password"
                className="pb-2 block text-lg text-[#E73300]  font-black"
              >
                Type Captcha
              </label>
              <input
                {...register("captcha",{
                  required: true,
                })}
                type="text"
                className="placeholder:text-xs placeholder:text-red-300 w-full border focus:outline-none  px-3 py-2 rounded-md border-[#E73300]"
                placeholder="Type Captcha"
              />

              {/* errors will return when field validation fails  or Captcha not same with the field */}
              {errors.captcha?.type === "required" && (
                <span className="text-xs text-red-500 pb-1 inline pr-3">
                  This captcha is required.
                </span>
              )}

              <span className="text-xs text-red-500 pb-1 inline my-2">
                {captchaError}
              </span>

              <div className="pt-4">
                <LoadCanvasTemplate reloadColor="red" className="btn"></LoadCanvasTemplate>
              </div>
            </div>
            {/* Captch End  */}

            <input
              type="submit"
              className="cursor-pointer mt-7 w-full btn  btn-error text-white bg-red-600 hover:text-black hover:bg-red-500  rounded-lg text-2xl font-black "
            />
          </form>
        </div>
        {/* Right Side ----> Form Section End */}
      </div>
    </div>
  );
};

export default SignUpPage;
