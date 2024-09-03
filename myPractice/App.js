import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [hobby, setHobby] = useState("");
  const [tag, setTag] = useState("");
  const [display, setDisplay] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    password: "",
    hobby: "",
    tag: ""
  });

  const validateName = (text) => {
    setName(text);
    setErrors(prev => ({ ...prev, name: !text.trim() ? "Name is required" : "" }));
  };

  const validateAge = (text) => {
    setAge(text);
    setErrors(prev => ({ ...prev, age: (!text || isNaN(text) || text <= 0) ? "Valid age is required" : "" }));
  };

  const validateEmail = (text) => {
    setEmail(text);
    setErrors(prev => ({ ...prev, email: !text || !/\S+@\S+\.\S+/.test(text) ? "Valid email is required" : "" }));
  };

  const validatePhone = (text) => {
    setPhone(text);
    setErrors(prev => ({ ...prev, phone: !text || !/^\d{10}$/.test(text) ? "Valid 10-digit phone number is required" : "" }));
  };

  const validatePassword = (text) => {
    setPassword(text);
    setErrors(prev => ({ ...prev, password: !text.trim() ? "Password is required" : "" }));
  };

  const validateHobby = (text) => {
    setHobby(text);
    setErrors(prev => ({ ...prev, hobby: !text.trim() ? "Hobby is required" : "" }));
  };

  const validateTag = (text) => {
    setTag(text);
    setErrors(prev => ({ ...prev, tag: !text.trim() ? "Tag line is required" : "" }));
  };

  const handleSubmit = () => {
    // Validate all fields
    validateName(name);
    validateAge(age);
    validateEmail(email);
    validatePhone(phone);
    validatePassword(password);
    validateHobby(hobby);
    validateTag(tag);

    // Check if there are no errors before displaying the summary
    if (Object.values(errors).every(error => error === "")) {
      setDisplay(true);
    }
  };

  const handleClear = () => {
    setName("");
    setAge("");
    setEmail("");
    setPhone("");
    setPassword("");
    setHobby("");
    setTag("");
    setDisplay(false);
    setErrors({
      name: "",
      age: "",
      email: "",
      phone: "",
      password: "",
      hobby: "",
      tag: ""
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Get Your Summary</Text>
      <View style={styles.formBox}>
        <TextInput
          style={[styles.formField, errors.name ? styles.errorField : {}]}
          placeholder="What's your name....."
          value={name}
          onChangeText={validateName}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <TextInput
          style={[styles.formField, errors.age ? styles.errorField : {}]}
          placeholder="What's your age....."
          value={age}
          onChangeText={validateAge}
          keyboardType="numeric"
        />
        {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}

        <TextInput
          style={[styles.formField, errors.email ? styles.errorField : {}]}
          placeholder="What's your email....."
          value={email}
          onChangeText={validateEmail}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <TextInput
          style={[styles.formField, errors.phone ? styles.errorField : {}]}
          placeholder="What's your phone....."
          value={phone}
          onChangeText={validatePhone}
          keyboardType="numeric"
        />
        {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

        <TextInput
          style={[styles.formField, errors.password ? styles.errorField : {}]}
          placeholder='Type your password.....'
          value={password}
          onChangeText={validatePassword}
          secureTextEntry
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <TextInput
          style={[styles.formField, errors.hobby ? styles.errorField : {}]}
          placeholder="What's your hobby....."
          value={hobby}
          onChangeText={validateHobby}
        />
        {errors.hobby && <Text style={styles.errorText}>{errors.hobby}</Text>}

        <TextInput
          style={[styles.formField, errors.tag ? styles.errorField : {}]}
          placeholder='Say your specific tag line.....'
          value={tag}
          onChangeText={validateTag}
        />
        {errors.tag && <Text style={styles.errorText}>{errors.tag}</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Submit' onPress={handleSubmit} />
        <Button title='Clear' onPress={handleClear} color="#FF6347" />
      </View>

      {/* Summary Section */}
      {display && (
        <View style={styles.summary}>
          <Text style={styles.summaryText}>Summary:</Text>
          <Text>{`Name: ${name}`}</Text>
          <Text>{`Age: ${age}`}</Text>
          <Text>{`Email: ${email}`}</Text>
          <Text>{`Phone: ${phone}`}</Text>
          <Text>{`Hobby: ${hobby}`}</Text>
          <Text>{`Tag Line: ${tag}`}</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  header: {
    backgroundColor: 'black',
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 20,
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    padding: 10,
    textAlign: 'center',
    width: '100%'
  },
  formBox: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1.5,
    marginBottom: 20,
    width: '100%',
    maxWidth: 400,
    padding: 10,
    borderRadius: 10,
    elevation: 3,  // Add shadow for better appearance
  },
  formField: {
    borderColor: 'gray',
    borderWidth: 1.5,
    marginBottom: 10,
    fontSize: 15,
    height: 40,
    backgroundColor: '#F9F3C3',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  errorField: {
    borderColor: 'red',
    borderWidth: 2,
    backgroundColor: '#FFD2D2',  // Light red background for error
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 400,
    marginBottom: 20,
  },
  summary: {
    backgroundColor: 'lightgrey',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: '100%',
    maxWidth: 400,
  },
  summaryText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
