import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { StyleProp, ViewStyle } from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
  stroke?: string;
  width?: number;
  height?: number;
};

const CovidNotifyOn: React.FC<Props> = (props) => {
  let stroke = props.stroke || 'black';
  let svgProps: Props = {
    width: props.width || 30,
    height: props.height || 30,
  };

  if (props.style) {
    svgProps.style = props.style;
  }

  return (
    <Svg
      viewBox={`0 0 ${svgProps.width} ${svgProps.height}`}
      fill="none"
      {...svgProps}>
      <Circle cx="15" cy="15" r="4" stroke={stroke} stroke-width="1.5" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.16638 9.16637C10.6593 7.67341 12.7218 6.75 15 6.75C17.2782 6.75 19.3407 7.67341 20.8336 9.16637L21.8943 8.10571C20.1299 6.34131 17.6924 5.25 15 5.25C12.3076 5.25 9.87013 6.34131 8.10572 8.10571L9.16638 9.16637ZM9.16638 20.8336L8.10572 21.8943C9.87013 23.6587 12.3076 24.75 15 24.75C17.6924 24.75 20.1299 23.6587 21.8943 21.8943L20.8336 20.8336C19.3407 22.3266 17.2782 23.25 15 23.25C12.7218 23.25 10.6593 22.3266 9.16638 20.8336ZM5.63085 5.63084C8.02863 3.23306 11.3411 1.75 15 1.75C18.6589 1.75 21.9714 3.23306 24.3692 5.63084L25.4298 4.57018C22.7606 1.90095 19.0731 0.25 15 0.25C10.9269 0.25 7.23942 1.90095 4.57019 4.57018L5.63085 5.63084ZM4.57019 25.4298L5.63085 24.3692C8.02863 26.7669 11.3411 28.25 15 28.25C18.6589 28.25 21.9714 26.7669 24.3692 24.3692L25.4298 25.4298C22.7606 28.0991 19.0731 29.75 15 29.75C10.9269 29.75 7.23942 28.0991 4.57019 25.4298Z"
        fill={stroke}
      />
    </Svg>
  );
};

export default CovidNotifyOn;
