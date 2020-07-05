import React from 'react';
import { Text, TextProps, GestureResponderEvent } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

type Props = TextProps & {
  href: string;
  children: React.ReactElement | Array<React.ReactElement> | string | string[];
};

const Anchor: React.FC<Props> = (props) => {
  const _handlePress = (event: GestureResponderEvent) => {
    WebBrowser.openBrowserAsync(props.href);
    props.onPress && props.onPress(event);
  };

  return (
    <Text {...props} onPress={_handlePress}>
      {props.children}
    </Text>
  );
};

export default Anchor;
