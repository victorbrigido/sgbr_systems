import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getModels } from '../../services/api';
import styles from '../Model/styles';
import Card from '../../components/CardCar/Card';
import SearchBar from '../../components/SearchBar/SearchBar'; 

type RootStackParamList = {
  Home: undefined;
  Model: { brandId: string };
  Details: { brandId: string; modeloId: string; anoId?: string };
};


type ModelScreenProps = NativeStackScreenProps<RootStackParamList, 'Model'>;

type CarModel = {
  codigo: string;
  nome: string;
};

const Model: React.FC<ModelScreenProps> = ({ route, navigation }) => {
  const { brandId } = route.params;
  const [models, setModels] = useState<CarModel[]>([]);
  const [searchText, setSearchText] = useState('');
  const [filteredModels, setFilteredModels] = useState<CarModel[]>(models);

  

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await getModels(brandId);
        setModels(response.data.modelos);
      } catch (error) {
        console.error('Error fetching models:', error);
      }
    };

    fetchModels();
  }, [brandId]);


  useEffect(() => {
    const lowercasedText = searchText.toLowerCase();
    const filtered = models.filter((model) =>
      model.nome.toLowerCase().includes(lowercasedText)
    );
    setFilteredModels(filtered);
  }, [searchText, models]);

  const handleModelPress = (modeloId: string) => {
    navigation.navigate('Details', { brandId, modeloId });
  };
  

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Car Models</Text>
    <SearchBar
      placeholder="Search Models"
      value={searchText}
      onChangeText={(text) => setSearchText(text)}
    />
    <FlatList
      data={filteredModels}
      keyExtractor={(item) => item.codigo}
      renderItem={({ item }) => (
        <Card
          title={item.nome}
          onPress={() => handleModelPress(item.codigo)}
        />
      )}
    />
  </View>
  );
};

export default Model;





