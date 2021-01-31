import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  item: {
    marginLeft: 8,
    marginRight: 8,
    minWidth: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 20,
    textAlign: 'center',
    paddingLeft: 4,
    paddingRight: 4,
  },
  activeItemText: {
    color: 'red',
  },
  border: {
    borderColor: 'grey',
    borderWidth: 2,
  },
});
