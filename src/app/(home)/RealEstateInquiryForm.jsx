import Image from "next/image";
import image from "../../assest/image/inquireformImage.png";
import InquiryForm from "./componnent/InquiryForm";

const RealEstateInquiryForm = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center gap-20 py-32">
        {/* left side Start [Form Section ]  */}
        <div>
          {/* Content Section  Start  */}
          <div>
            <h1 className="text-5xl font-black ">Real Estate Inquiry Form</h1>
            <p className="text-base  pt-3">
              Streamline property requests with our user-friendly <br />
              Real Estate Inquiry Form. Get started today!
            </p>
          </div>
          {/* Content Section  End  */}

          {/* form contetn start  */}
          <InquiryForm></InquiryForm>
          {/* form contetn End  */}
        </div>

        {/* left side End [Form Section ]  */}

        {/* Right side Start   */}
        <Image src={image}></Image>
        {/* Right side End */}
      </div>
    </>
  );
};

export default RealEstateInquiryForm;
