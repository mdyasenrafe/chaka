import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpiner = ({ color, loading }) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div>
      <ClipLoader color={color} loading={loading} css={override} size={100} />
    </div>
  );
};

export default LoadingSpiner;
