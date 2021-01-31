import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  item: {
    marginLeft: 2,
    marginRight: 2,
    minWidth: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 20,
    textAlign: 'center',
    paddingLeft: 2,
    paddingRight: 2,
  },
  activeItemText: {
    color: 'red',
  },
  border: {
    borderColor: 'grey',
    borderWidth: 2,
  },
});
