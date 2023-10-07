import React from "react";

const footer = () => {
  return (
    <div
      className="footer bg-dark text-white text-center py-3"
      style={{
        background: "black",
        width: "100%",
        height: "100px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span className="copyright">Copyright &copy; Trendy Shoppie 2023</span>
    </div>
  );
};
export default footer;
