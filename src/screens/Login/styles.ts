import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffff",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    header: {
      alignSelf: "flex-start",
      marginTop: 50,
    },
    wellcome: {
      color: "#00000",
      marginTop: 100,
      fontSize: 24,
      fontWeight: "600",
    },
    content: {
      width: "100%",
      marginTop: 50,
      alignItems: "center",
      gap: 20,
    },
    contentInput: {
      width: "100%",
      height: 56,
      backgroundColor: "#DCDCDC",
      borderRadius: 12,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 20,
      gap: 10,
    },
    input: { flex: 1, color: "#1C1C1C" },
    buttonSignIn: {
      backgroundColor: "#007bff",
      width: "100%",
      height: 56,
      borderRadius: 56,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    },
    buttonSignInText: { color: "#f4f4f4", fontSize: 16, fontWeight: "800" },
    ContainerSeparator: {
      width: "100%",
      marginTop: 50,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },
    separator: {
      height: 1,
      backgroundColor: "#757575",
      flex: 1,
    },
    ContainerSeparatorText: {
      color: "##1C1C1C",
      fontSize: 16,
      fontWeight: "400",
    },
  
    footer: {
      marginTop: 50,
      flexDirection: "row",
      gap: 10,
    },
    footerButton: {
      width: 100,
      height: 60,
      backgroundColor: "#0000", 
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 12,
      borderWidth: 1, 
      borderColor: "#f4f4f4", 
    },      
    footerText: {
      color: "#1C1C1C",
      fontSize: 16,
      fontWeight: "400",
    },
    buttonText: {
      padding: 2,  
      color: "##1C1C1C",
      fontSize: 12,
      fontWeight: "400",
    },
    footerButtonText: {
      color: "#007bff",
      fontSize: 16,
      fontWeight: "400",
    },
    error: { // Adicione isso
        color: 'red',
        marginTop: 8,
        fontSize: 14,
      },
  });

export default styles;