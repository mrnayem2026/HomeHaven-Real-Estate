"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";

//   This Options for Select tag
const country = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla1", label: "Vanilla1" },
  { value: "vanilla2", label: "Vanilla2" },
  { value: "vanilla3", label: "Vanilla3" },
];

const animatedComponents = makeAnimated();

const InquiryForm = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
    control,
  } = useForm();

  // Below Function work for Form [Start]
  const onSubmit = (data) => {
    console.log(data);
    setSelectedValue(null);
    reset();
  };

  //  Function work for Form [End]

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Inquiry Type Select section start */}
        <div className="flex flex-col gap-2 pt-7">
          <label htmlFor="inquiry" className="text-sm font-black ">
            Inquiry Type
          </label>
          <Controller
            name="country"
            control={control}
            render={({ field, value, ref }) => (
              <Select
                className=""
                options={country}
                components={animatedComponents}
                value={country.find((c) => c.value === value)}
                isMulti
                // onChange={(selected) => field.onChange(selected.map((opt) => opt.value))}
                onChange={(selected) => {
                  field.onChange(selected.map((opt) => opt.value));
                  setSelectedValue(selected);
                }}
              />
            )}
            rules={{ required: true }}
          />
          {errors.country && (
            <p className="text-xs text-red-500 pb-1 inline ">
              Inquiry Type is required
            </p>
          )}
        </div>
        {/* Inquiry Type Select section End */}

        {/* Personel Role Select section start */}
        <div className="flex flex-col gap-2 pt-7">
          <label htmlFor="inquiry" className="text-sm font-black ">
            Personel Role
          </label>
          <Controller
            name="country"
            control={control}
            render={({ field, value, ref }) => (
              <Select
                options={country}
                components={animatedComponents}
                value={country.find((c) => c.value === value)}
                isMulti
                // onChange={(selected) => field.onChange(selected.map((opt) => opt.value))}
                onChange={(selected) => {
                  field.onChange(selected.map((opt) => opt.value));
                  setSelectedValue(selected);
                }}
              />
            )}
            rules={{ required: true }}
          />
          {errors.country && (
            <p className="text-xs text-red-500 pb-1 inline ">
              Personel Role is required
            </p>
          )}
        </div>
        {/* Personel Role Select section End */}

        {/* First and Last Name Start  */}
        <div className="flex gap-2 pt-7">
          {/* First name*/}
          <div className=" w-full">
            <label
              htmlFor="firstName"
              className="pb-2 block text-sm  font-black"
            >
              First name
            </label>
            <input
              {...register("firstName", { required: true })}
              className="placeholder:text-sm placeholder:text-slate-400 w-full border focus:outline-none  px-3 py-2 rounded-md border-[#EEEEEE]"
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
              className="pb-2 block text-sm  font-black"
            >
              Last name
            </label>
            <input
              {...register("firstName", { required: true })}
              className="placeholder:text-sm placeholder:text-slate-400 w-full border focus:outline-none  px-3 py-2 rounded-md border-[#EEEEEE]"
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
          <label htmlFor="email" className="pb-2 block text-sm  font-black">
            Email Adresss
          </label>
          <input
            {...register("email", { required: true })}
            className="placeholder:text-sm placeholder:text-slate-400 w-full border focus:outline-none  px-3 py-2 rounded-md border-[#EEEEEE]"
            placeholder="Your Email Adresss"
          />
          {/* errors will return when field validation fails  */}
          {errors.email && (
            <span className="text-xs text-red-500 pb-1 inline ">
              This field is required
            </span>
          )}
        </div>

        {/* Property Details  */}
        <div className="flex flex-col gap-2 pt-7">
          <label htmlFor="inquiry" className="text-sm font-black ">
            Property Details
          </label>
          <Controller
            name="country"
            control={control}
            render={({ field, value, ref }) => (
              <Select
                className=""
                options={country}
                components={animatedComponents}
                value={country.find((c) => c.value === value)}
                isMulti
                // onChange={(selected) => field.onChange(selected.map((opt) => opt.value))}
                onChange={(selected) => {
                  field.onChange(selected.map((opt) => opt.value));
                  setSelectedValue(selected);
                }}
              />
            )}
            rules={{ required: true }}
          />
          {errors.country && (
            <p className="text-xs text-red-500 pb-1 inline ">
              Property Details is required
            </p>
          )}
        </div>

        {/* Max Price and Minimum Size Start   */}
        <div className="flex gap-2 pt-7">
          {/* Max Price>*/}
          <div className=" w-full">
            <label
              htmlFor="maxPrice"
              className="pb-2 block text-sm  font-black"
            >
              Max Price
            </label>
            <input
              {...register("maxPrice", { required: true })}
              type="number"
              className="placeholder:text-sm placeholder:text-slate-400 w-full border focus:outline-none  px-3 py-2 rounded-md border-[#EEEEEE]"
              placeholder="Max Price"
            />
            {/* errors will return when field validation fails  */}
            {errors.maxPrice && (
              <span className="text-xs text-red-500 pb-1 inline ">
                Max Price field is required
              </span>
            )}
          </div>

          {/* Minimum Size*/}
          <div className=" w-full">
            <label
              htmlFor="firstName"
              className="pb-2 block text-sm  font-black"
            >
              Minimum Size
            </label>
            <input
              {...register("minimumSize", { required: true })}
              type="number"
              className="placeholder:text-sm placeholder:text-slate-400 w-full border focus:outline-none  px-3 py-2 rounded-md border-[#EEEEEE]"
              placeholder="Minimum Size"
            />
            {/* errors will return when field validation fails  */}
            {errors.minimumSize && (
              <span className="text-xs text-red-500 pb-1 inline ">
                Minimum Size field is required
              </span>
            )}
          </div>
        </div>
        {/* Max Price and Minimum Size End   */}

        <input type="submit" className="cursor-pointer bg-red-400  mt-7  w-full py-4 rounded-lg text-2xl font-black text-white" />
      </form>
    </>
  );
};

export default InquiryForm;
