import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ButtonProps {
  className?: string;
  id?: string;
  text?: string;
}

const Button = ({ className, id, text }: ButtonProps) => {
  return (
    <Link href="#" className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <Image
            src="/images/arrow-down.svg"
            width={50}
            height={50}
            alt="Arrow Down"
          />
        </div>
      </div>
    </Link>
  );
};
export default Button;
