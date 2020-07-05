import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ConfirmedCases: React.FC = () => {
  return (
    <Svg x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
      <Path
        fill="#F44336"
        d="M38,44H12V4h26c2.2,0,4,1.8,4,4v32C42,42.2,40.2,44,38,44"
      />
      <Path
        fill="#BF360C"
        d="M10,4h2v40h-2c-2.2,0-4-1.8-4-4V8C6,5.8,7.8,4,10,4"
      />
      <Path
        fill="#FFF"
        d="M26,14c-5.5,0-10,4.5-10,10c0,5.5,4.5,10,10,10c5.5,0,10-4.5,10-10C36,18.5,31.5,14,26,14z M32,26h-4v4h-4v-4h-4v-4h4v-4h4v4h4V26z"
      />
    </Svg>
  );
};

export default ConfirmedCases;
