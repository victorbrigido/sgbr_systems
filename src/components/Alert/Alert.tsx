import { Alert } from 'react-native';

export const ConfirmLogoutAlert = (onConfirm: () => void) => {
  Alert.alert(
    "Confirm Logout", // Título do alerta
    "Are you sure you want to logout?", // Mensagem
    [
      {
        text: "Cancel",
        onPress: () => console.log("Logout canceled"),
        style: "cancel",
      },
      {
        text: "Yes, Logout",
        onPress: onConfirm,
      },
    ],
    { cancelable: true }
  );
};
