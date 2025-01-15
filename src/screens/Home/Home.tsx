import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { useAuth } from '../../hooks/UseAuth';
import { getBrands } from '../../services/api';
import Card from '../../components/CardCar/Card';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../Home/styles';
import SearchBar from '../../components/SearchBar/SearchBar'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ConfirmLogoutAlert } from '../../components/Alert/Alert';

type RootStackParamList = {
  Home: undefined;
  Model: { brandId: string };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

type Brand = {
  codigo: string;
  nome: string;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const { user, signOut } = useAuth();
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
 

  useEffect(() => {
    const fetchBrands = async () => {
        try {
          setLoading(true); 
          const response = await getBrands();
          setBrands(response.data);
          setFilteredBrands(response.data);
        } catch (error) {
          console.error('Error fetching brands:', error);
        } finally {
          setLoading(false); 
        }
      };
  
      fetchBrands();
    }, []);

    useEffect(() => {
        const filtered = brands.filter((brand) =>
          brand.nome.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBrands(filtered);
      }, [searchQuery, brands]);


      const handleLogout = () => {
        ConfirmLogoutAlert(() => {
          signOut();
        });
      };

  return (
    <SafeAreaView style={styles.container}>
   
      <View style={styles.header}>
        <Text style={styles.userName}>Welcome, {user?.name || 'Guest'}!</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Icon name="logout" size={24} color="#ffff"/>
        </TouchableOpacity>
      </View>

     
      <SearchBar  placeholder="Search brands.." value={searchQuery} onChangeText={setSearchQuery} />
      
  
      <FlatList
        contentContainerStyle={styles.cardList}
        data={filteredBrands}
        keyExtractor={(item, index) => `${item.codigo}-${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Model', { brandId: item.codigo })}>
            <Card
              title={item.nome}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;