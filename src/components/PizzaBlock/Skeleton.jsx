import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="140" cy="140" r="125" />
    <rect x="0" y="280" rx="10" ry="10" width="280" height="25" />
    <rect x="0" y="325" rx="10" ry="10" width="280" height="70" />
    <rect x="0" y="415" rx="10" ry="10" width="105" height="38" />
    <rect x="135" y="410" rx="25" ry="25" width="145" height="45" />
  </ContentLoader>
);

export default Skeleton;
