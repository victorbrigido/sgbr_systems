import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from '../CardCar/styles'

type CardProps = {
  title: string;
  imageUri?: string;
  onPress?: () => void;
};

const Card: React.FC<CardProps> = ({ title, imageUri }) => {
  return (
    <View style={styles.card}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.cardImage} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );
};

export default Card;


