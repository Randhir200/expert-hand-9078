import React from "react";

const BlogBanner = ({line}) => {
  return (
    <div className=" p-12 w-full bg-yellow-300 text-white">
      <p className=" text-xs font-bold tracking-widest">
      {line}
      </p>
      <img
        className="h-32 m-auto my-10"
        src="https://trackingtime.co/wp-content/uploads/2022/08/Ilustracio%CC%81n-Time-Off_SVG-240x146px.svg"
      />
      <p className=" text-4xl font-bold mb-20">Attendance & Timecards v2</p>
      <button className=" border rounded-md py-1 px-5 border-white font-bold tracking-widest">
        READ ARTICLE
      </button>
    </div>
  );
};

export default BlogBanner;
