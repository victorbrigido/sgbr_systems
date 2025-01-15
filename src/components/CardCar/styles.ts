import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', 
    alignItems: 'center',
    width: width * 0.98, 
    height: 60,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginVertical: 2,
    padding: 8, 
  },
  cardImage: {
    width: 50, 
    height: 50, 
    borderRadius: 10,
    marginRight: 12, 
  },
  placeholder: {
    width: 50,
    height: 50,
    marginRight: 12,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#ccc',
    fontSize: 10, 
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1, 
    flexWrap: 'wrap', 
  },
});

export default styles;
