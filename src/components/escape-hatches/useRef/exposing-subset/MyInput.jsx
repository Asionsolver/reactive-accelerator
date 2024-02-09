import { forwardRef, useImperativeHandle, useRef } from "react";

/* eslint-disable react/prop-types */
const MyInput = function (props, ref) {
  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
    // set color red
    setColor(color) {
      realInputRef.current.style.color = color;
    },
    // set border radius
    setBorderRadius(borderRadius) {
      realInputRef.current.style.borderRadius = borderRadius;
    },
  }));
  return <input {...props} ref={realInputRef} />;
};

const ForwardedMyInput = forwardRef(MyInput);

export default ForwardedMyInput;
