import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    position: 'relative',
  },
  label: {
    marginBottom: 8,
    fontSize: 24,
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    fontSize: 24,
    height: 36,
    padding: 6,
  },
  error: {
    position: 'absolute',
    bottom: -8,
    left: 16,
    color: 'red',
  },
});
