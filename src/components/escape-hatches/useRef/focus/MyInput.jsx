import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const MyInput =  function (props, ref) {
  return (
    <input {...props} ref={ref} />
  )
}

const ForwardedMyInput = forwardRef(MyInput);

export default ForwardedMyInput;
