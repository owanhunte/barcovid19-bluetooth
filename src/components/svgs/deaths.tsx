import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Deaths: React.FC = () => {
  return (
    <Svg x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
      <Path
        fill="#B39DDB"
        d="M36,35H12V11.1c0,0,3.7-5.1,12-5.1s12,5.1,12,5.1V35z"
      />
      <Path
        fill="#9575CD"
        d="M17 14H31V16H17zM17 18H31V20H17zM17 22H31V24H17zM17 26H31V28H17z"
      />
      <Path fill="#B39DDB" d="M6 38H42V42H6z" />
      <Path fill="#9575CD" d="M8 34H40V38H8z" />
    </Svg>
  );
};

export default Deaths;
