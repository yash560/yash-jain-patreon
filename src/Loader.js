import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={400}
    viewBox="0 0 400 460"
    backgroundColor="#f5f5f5"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="31" y="74" rx="2" ry="2" width="240" height="10" />
    <rect x="31" y="95" rx="2" ry="2" width="140" height="10" />
    <rect x="28" y="12" rx="0" ry="0" width="61" height="49" />
    <rect x="224" y="209" rx="0" ry="0" width="125" height="38" />
    <circle cx="50" cy="232" r="10" />
    <circle cx="77" cy="231" r="8" />
  </ContentLoader>
);

export default MyLoader;
