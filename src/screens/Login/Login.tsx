import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { useAuth } from '../../hooks/UseAuth';
import styles from '../Login/styles';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';



type RootStackParamList = {
    Home: undefined;
  };
  
  type LoginInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
  
  type Props = {
    navigation: LoginInScreenNavigationProp;
  };
  
  const Login: React.FC<Props> = ({ navigation }) => {
    const { Login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
  
    const handleLogin = async () => {
      setLoading(true); // Exibe o indicador de carregamento
      try {
        const response = await axios.post('https://test-api-y04b.onrender.com/signIn', {
          user: username,
          password,
        });
    
        const userData = response.data.user; 
        await Login(userData); 
        navigation.navigate('Home'); 
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
        } else {
          setError('An unexpected error occurred. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

  
return (
    <View style={styles.container}>
  
        <Text style={styles.wellcome}>Hello, Please log in to enter</Text>
  
        <View style={styles.content}>
          <View style={styles.contentInput}>
            <Image 
            source={{
                uri: "https://img.icons8.com/?size=100&id=PedPR10iVAnY&format=png&color=000000",
                    }}
                    style={{ width: 14, height: 14 }}
                />
            
                <TextInput  
                        placeholder="user or email"
                        value={username}
                        onChangeText={setUsername} 
                        style={styles.input} placeholderTextColor="#757575" 
                />
          </View>
  
          <View style={styles.contentInput}>
            <Image 
            source={{
                uri: "https://img.icons8.com/?size=100&id=94&format=png&color=000000",
                    }}
                    style={{ width: 14, height: 14 }}
                />

           
            <TextInput 
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword} 
                style={styles.input} placeholderTextColor="#757575"  />
          </View>
        </View>

        {error ? <Text style={styles.error}>{error}</Text> : null}
  
        <TouchableOpacity style={styles.buttonSignIn} onPress={handleLogin}>
          <Text style={styles.buttonSignInText}>Login </Text>
        </TouchableOpacity>
  
        <View style={styles.ContainerSeparator}>
          <View style={styles.separator} />
          <Text style={styles.ContainerSeparatorText}>or continue with</Text>
          <View style={styles.separator} />
        </View>
  
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Image 
            source={{
                uri: "https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000",
                    }}
                    style={{ width: 32, height: 32 }}
                />
            <Text style={styles.buttonText}>Google</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.footerButton}>
          <Image 
            source={{
                uri: "https://img.icons8.com/?size=100&id=118497&format=png&color=000000",
                    }}
                    style={{ width: 32, height: 32 }}
                />
            <Text style={styles.buttonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.footerButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

export default Login;