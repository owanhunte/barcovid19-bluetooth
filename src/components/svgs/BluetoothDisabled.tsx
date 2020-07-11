import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { StyleProp, ViewStyle } from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
  width?: number;
  height?: number;
};

const BluetoothDisabled: React.FC<Props> = (props) => {
  let svgProps: Props = {
    width: props.width || 40,
    height: props.height || 40,
  };

  if (props.style) {
    svgProps.style = props.style;
  }

  return (
    <Svg
      viewBox={`0 0 ${svgProps.width} ${svgProps.height}`}
      fill="none"
      {...svgProps}>
      <Circle cx="20" cy="20" r="20" fill="#D3080C" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.25 9.04248L28.2697 15.4851L22.3874 19.8968L31.4586 26.9064L30.5414 28.0933L8.54144 11.0933L9.45861 9.9064L19.25 17.4725V9.04248ZM21.156 18.9453L20.75 18.6316V11.9573L25.7303 15.5146L21.156 18.9453Z"
        fill="white"
      />
      <Path
        d="M24.6118 25.2841L25.8514 26.242L19.25 30.9573V22.2499L13.45 26.5999L12.55 25.3999L18.747 20.7521L20.75 22.2999V28.0425L24.6118 25.2841Z"
        fill="white"
      />
    </Svg>
  );
};

export default BluetoothDisabled;
