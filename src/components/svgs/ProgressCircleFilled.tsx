import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { StyleProp, ViewStyle } from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
};

const ProgressCircleFilled: React.FC<Props> = (props) => {
  return (
    <Svg width="8" height="8" viewBox="0 0 16 16" fill="none" {...props}>
      <Circle cx="8" cy="8" r="8" fill="#000" />
    </Svg>
  );
};

export default ProgressCircleFilled;
