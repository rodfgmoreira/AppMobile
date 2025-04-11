import { Text, TextProps } from 'react-native';

export default function TextoPadrao(props: TextProps) {
  return (
    <Text
      {...props}
      style={[{ fontFamily: 'Poppins-Regular' }, props.style]}
    />
  );
}
