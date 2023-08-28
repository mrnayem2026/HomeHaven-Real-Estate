import { Roboto_Condensed } from "next/font/google";

const roboto_condensed = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

const Home = () => {
  return (
    <div>
      <div className={`text-2xl`}>
        Automatically self-host any Google Font. Fonts are included in the
        deployment and served from the same domain as your deployment. No
        requests are sent to Google by the browser.
      </div>
      <p className="font-roboto font-medium">Ehllo alksdsfjlkdjs</p>
      <p className={`${roboto_condensed.variable} font-bold`}>HEllo Nayem</p>
    </div>
  );
};

export default Home;
