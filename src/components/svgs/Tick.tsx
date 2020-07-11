import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { StyleProp, ViewStyle } from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
  width?: number;
  height?: number;
};

const Tick: React.FC<Props> = (props) => {
  let svgProps: Props = {
    width: props.width || 32,
    height: props.height || 32,
  };

  if (props.style) {
    svgProps.style = props.style;
  }

  return (
    <Svg viewBox="0 0 32 32" fill="none" {...svgProps}>
      <Path
        d="M22.5 11L13.5 21L9.5 17"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Tick;
