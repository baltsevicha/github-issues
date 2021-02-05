import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  text: {
    color: '#ffffff',
    ...Platform.select({
      android: {
        paddingRight: 18,
        paddingLeft: 18,
        fontSize: 18,
      },
      ios: {
        fontWeight: 'bold',
      },
    }),
  },
});
