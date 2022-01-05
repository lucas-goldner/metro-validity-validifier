import React from "react";
import Image from "next/image";

const FooterIcon = () => {
  return (
    <Image
      src="/metroval.jpg"
      alt="Metro Validity Logo"
      width={170}
      height={30}
      layout="fixed"
    />
  );
};

export default FooterIcon;
