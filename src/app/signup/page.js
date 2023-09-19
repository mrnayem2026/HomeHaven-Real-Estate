"use client";
import Lottie from "lottie-react";
import singUpIcon from "../../assest/icons/oNAKbP8r85.json";
import { useForm } from "react-hook-form";
const page = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
    control,
  } = useForm();

  //   Reguler Expression For Password validation
  const regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{6,}$/;
  // Below Function work for Form [Start]
  const onSubmit = (data) => {
    console.log(data);
  };
  //  Function work for Form [End]
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
                  {...register("firstName", { required: true })}
                  className="placeholder:text-xs placeholder:text-red-300 w-full border focus:outline-none  px-3 py-2 rounded-md border-[#E73300]"
                  placeholder="Your Last Name"
                />
                {/* errors will return when field validation fails  */}
                {errors.firstName && (
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
            <div className=" w-full  pt-7">
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
                type="password"
                className="placeholder:text-xs placeholder:text-red-300 w-full border focus:outline-none  px-3 py-2 rounded-md border-[#E73300]"
                placeholder="Type strong password"
              />
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
            <div className=" w-full  pt-7">
              <label
                htmlFor="password"
                className="pb-2 block text-lg text-[#E73300]  font-black"
              >
                Confirm Password
              </label>
              <input
                {...register("confirm", {
                  required: true,
                  pattern: regex,
                })}
                type="password"
                className="placeholder:text-xs placeholder:text-red-300 w-full border focus:outline-none  px-3 py-2 rounded-md border-[#E73300]"
                placeholder="Confirm your password"
              />
              {/* errors will return when field validation fails  */}
              {errors.confirm?.type === "required" && (
                <span className="text-xs text-red-500 pb-1 inline ">
                  This password is required
                </span>
              )}
              {errors.confirm?.type === "pattern" && (
                <span className="text-xs text-red-500 pb-1 inline ">
                  Password must have 6 characters. <br /> one Uppercase and
                  lowercase Letter. <br />
                  One Special Character and at least one digit.
                </span>
              )}
            </div>

            {/* Password and Confirm Password field End*/}

            <input
              type="submit"
              className="cursor-pointer w-full btn   rounded-lg text-2xl font-black "
            />
          </form>
        </div>
        {/* Right Side ----> Form Section End */}
      </div>
    </div>
  );
};

export default page;
