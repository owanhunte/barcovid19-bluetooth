import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { StyleProp, ViewStyle } from 'react-native';

type Props = {
  style: StyleProp<ViewStyle>;
};

const ProgressCircleEmpty: React.FC<Props> = ({ style }) => {
  return (
    <Svg width="8" height="8" viewBox="0 0 16 16" fill="none" style={style}>
      <Circle cx="8" cy="8" r="8" fill="#C4C4C4" />
    </Svg>
  );
};

export default ProgressCircleEmpty;
