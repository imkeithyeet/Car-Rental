"use client"
import { CustomButtonProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType = "button",
  textStyles,
  rightIcon,
  disabled = false,
}: CustomButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

CustomButton.defaultProps = {
  btnType: "button",
  disabled: false,
};

export default CustomButton;
