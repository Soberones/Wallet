import React from 'react';
import {Text as RText} from 'react-native';

export const textStyles = {
  fontFamily: 'Helvetica',
  fontStyle: 'normal',
  fontSize: 16,
  lineHeight: 22.4,
};

const {Provider, Consumer} = React.createContext(textStyles);

export const Text = ({style, ...props}) => (
  <Consumer>
    {contextStyle => {
      const mergedStyle = style ? {...contextStyle, ...style} : contextStyle;

      return <RText {...props} style={mergedStyle} />;
    }}
  </Consumer>
);

export const StyleText = ({style, children}) => (
  <Consumer>
    {contextStyle => (
      <Provider value={{...contextStyle, ...style}}>{children}</Provider>
    )}
  </Consumer>
);
