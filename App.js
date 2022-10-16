import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>CALIBER</Text>
      <StatusBar style="auto" />
      <Text style={styles.smallText}>Email</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <Text style={styles.smallText}>Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  inputView: {
    borderRadius: 30,
    height: 45,
    marginBottom: 20,
   },
 
  TextInput: {
    borderRadius: 30,
    height: 40,
    width: 300,
    flex: 1,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: "center",
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#189AB4",
  },

  headerText: {
    color: "#189AB4",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
  },

  smallText: {
    color: "#88CAD8",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 1,
  },

  loginText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 17,
  },
});
