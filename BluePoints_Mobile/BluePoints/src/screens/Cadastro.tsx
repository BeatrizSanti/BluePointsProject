


import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Image, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';


import Header from './Header'

const { width: screenWidth } = Dimensions.get('window'); 


const saveUser = async (email, senha) => {
  try {
    await AsyncStorage.setItem(`user-${email}`, JSON.stringify({ email, senha }));
    console.log('Usuário salvo com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar usuário:', error);
  }
};



export default function Cadastro() {

  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showSenha, setShowSenha] = useState(false)


  const handleCadastro = async () => {
    if (email && senha) {
      await saveUser(email, senha); 
      alert('Cadastro realizado com sucesso!');
      navigation.navigate('Login');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };


  const handleGoogleLogin = () => {
    navigation.navigate('Tab', { screen: 'Home' });
    
    console.log('Login com Google');
  };


  const toggleShowPassword = () => {
    setShowSenha(!showSenha);
  };





  return (


    <View style={style.container}>

      <Header navigation={navigation}/>

      <ScrollView
        style={style.scrollView}
        contentContainerStyle={style.contentContainerScroll}
      >

        <Text style={style.titulo}>Cadastre-se no Blue Points</Text>



        <TouchableOpacity style={style.googleBotao} onPress={handleGoogleLogin}>

          <Image source={{uri : "https://img.icons8.com/fluency/48/google-logo.png"}} style={style.googleIcon} />

          <Text style={style.googleBotaoTxt}>Continue com Google</Text>

        </TouchableOpacity>



        <Text style={style.txt}>ou</Text>

        <TextInput
          style={style.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />


        <View style={style.inputContainer}> 

          <TextInput
            style={style.inputSenha}
            placeholder="Senha"
            onChangeText={setSenha}
            value={senha}
            secureTextEntry={!showSenha}
          />

          <TouchableOpacity onPress={toggleShowPassword} style={style.showSenha}>

            <Icon 
              name={showSenha ? 'visibility-off' : 'visibility'} 
              size={24} 
              color="#b2b2b2" 
            />

          </TouchableOpacity>

        </View>

        <TouchableOpacity style={style.cadastroBotao} onPress={handleCadastro}>

          <Text style={style.cadastroBotaoTxt}>Log in</Text>

        </TouchableOpacity>




        <View style={style.loginContainer}>
        
          <Text style={style.loginTxt}>
            Já tem uma conta? 

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
            >

              <Text style={style.loginLink}>Fazer login</Text>
            </TouchableOpacity>

          </Text>
        </View>

      </ScrollView>


    </View>


  );
}




const style = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#232424',
  },


  scrollView: {
    flex: 1,
    width: '100%',
  },


  contentContainerScroll: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20%', 
  },



  titulo: {
    fontFamily: 'WhyteRegular',
    color: '#E9E9E9',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },



  googleBotao: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 6,
    marginBottom: 20,
    width: '80%',
    height: '11%', 
  },



  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },



  googleBotaoTxt: {
    fontSize: 14,
    fontFamily: 'inherit',
    fontWeight: 'bold',
    color: '#2C2C2C',
  },



  txt: {
    fontFamily: 'inherit',
    fontSize: 14,
    color: '#b2b2b2',
    marginBottom: 25,
  },


  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    width: '80%', 
    marginBottom: 15, 
  },


  input: {
    fontFamily: 'inherit',
    padding: 10,
    width: '80%',
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ffff',
    color: '#2C2C2C',
    backgroundColor: '#ffff',
    maxWidth: '80%',
    maxHeight: '20%',
    flex: 1,
  },


  inputSenha: {
    fontFamily: 'inherit',
    padding: 10,
    width: '80%', 
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ffff',
    color: '#2C2C2C',
    backgroundColor: '#ffff',
    flex: 1,
  },



  showSenha: {
    position: 'absolute', 
    right: 0, 
    padding: 10, 
    top: '5%',
  },



  cadastroBotao: {
    backgroundColor: '#1A3B48',
    padding: 15,
    borderRadius: 6,
    marginTop: 15,
    marginBottom: 15,
    width: '80%',

  },



  cadastroBotaoTxt: {
    color: '#E9E9E9',
    fontSize: 14,
    textAlign: 'center',
    marginRight: '30%',
    marginLeft: '30%',
    fontFamily: 'Whyte',
    fontWeight: 'bold',
  },



  loginContainer: {
    marginBottom: 10, 
  },



  loginTxt: {
    fontFamily: 'inherit',
    fontSize: 14,
    color: '#7f7f7f',
  },



  loginLink: {
    fontFamily: 'inherit',
    color: '#647C8C',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginLeft: 5,
    marginBottom: -3,
  },
  

});




