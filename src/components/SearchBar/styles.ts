import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      paddingHorizontal: 10,
      marginTop:10,
      marginBottom: 2,
    },
    icon: {
      marginRight: 8,
    },
    input: {
      flex: 1,
      height: 40,
      fontSize: 16,
      color: '#333',
    },
 });

 export default styles;