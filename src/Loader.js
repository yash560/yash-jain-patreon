import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 300 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="31" y="100" rx="4" ry="4" width="225" height="25" />
    <rect x="31" y="0" rx="4" ry="4" width="80" height="80" />
    <rect x="154" y="209" rx="0" ry="0" width="125" height="38" />
    <circle cx="50" cy="232" r="10" />
    <circle cx="77" cy="232" r="10" />
    <rect x="30" y="162" rx="2" ry="2" width="178" height="17" />
    <rect x="32" y="142" rx="2" ry="2" width="140" height="10" />
  </ContentLoader>
);

export default MyLoader;
