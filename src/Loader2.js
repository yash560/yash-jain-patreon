import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader2 = (props) => (
  <ContentLoader
    speed={2}
    width={630}
    height={200}
    viewBox="0 0 800 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
    <rect x="48" y="116" rx="3" ry="3" width="600" height="86" />
    <rect x="48" y="72" rx="3" ry="3" width="380" height="6" />
    <rect x="48" y="88" rx="3" ry="3" width="178" height="6" />
  </ContentLoader>
);

export default MyLoader2;
