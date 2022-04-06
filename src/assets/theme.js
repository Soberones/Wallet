export const colors = {
  primary: '#00aaff',
  dark: '#222',
  light: '#f5f6f6',
  text: '#333333',
  textLight: '#a3a3a3',
  accentColor: '#ffd670',
  accentColorS: '#ff9770',
  accentColorS2: '#ff70a6',
  accentColorS3: '#70d6ff',
  accentColorS4: '#b9fbc0',
  accentColorS5: '#ff928b',
};

export const textStyles = {
  heading: scale => {
    const fontSize = 16 * scale;

    return {
      lineHeight: fontSize * 1.4,
      marginBottom: scale,
      fontWeight: '300',
      fontSize,
    };
  },
};

export const theme = {
  borderRadius: 20,
};
