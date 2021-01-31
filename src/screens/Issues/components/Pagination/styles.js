import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  item: {
    paddingTop: 4,
    paddingRight: 8,
    paddingBottom: 4,
    paddingLeft: 8,
    marginLeft: 8,
    marginRight: 8,
  },
  itemText: {
    fontSize: 20,
  },
  activeItemText: {
    color: 'red',
  },
  border: {
    borderColor: 'grey',
    borderWidth: 2,
  },
});
