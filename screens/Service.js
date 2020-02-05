import React, {Component} from 'react';
import {Platform, StyleSheet, AsyncStorage, NetInfo} from 'react-native';


export default class Service  extends Component {
  
  constructor(props){
    super(props);
    this.state = { 
      user :'',
      client : 0,
      isConnected: true
    }
    
    
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  
sliderData = () => 
{
 return  fetch('https://www.mbbsbangladesh.com/wp-json/wp/v2/posts?categories=420',
    {
      method: "GET"
   }).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });

   
}
saveUserData = async (key, value) => {
  //console.log(key ,value);
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
};

getUserData = async (key) => {
  var data = await AsyncStorage.getItem(key) || 'none';
  return data;
}

clearLocalStorage = async () => {
  try {
  await AsyncStorage.clear();
  } catch (error) {
  }
  }

register = (name, email, firstName, lastName, password, role) => 
{

let formdata = new FormData();
  //formdata.append("name", 'test')
formdata.append("username", "PromodSSP")
formdata.append("password", "44J%5bensJUK0spSAw7hN@pZ")
// formdata.append("product[description]", '12dsadadsa')
 
  // console.log(JSON.stringify(data));
   return  fetch('https://www.mbbsbangladesh.com/wp-json/jwt-auth/v1/token',
    {
      method: "POST",
        headers: {
    'Content-Type': 'multipart/form-data',
  },
    body: formdata
   }).then((response) => 
   response.json()
   )
   .catch((error) => {
     console.log(error, 'error');
   });

}


validateEmail = (email) => {
  // console.log(email);
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
   
    return (true)
  }
    
    return (false)
};


login = (username, password) => 
{
let formdata = new FormData();
  //formdata.append("name", 'test')
formdata.append("username", username)
formdata.append("password", password)
// formdata.append("product[description]", '12dsadadsa')
 
  // console.log(JSON.stringify(data));
   return  fetch('https://www.mbbsbangladesh.com/wp-json/jwt-auth/v1/token',
    {
      method: "POST",
        headers: {
    'Content-Type': 'multipart/form-data',
  },
    body: formdata
   }).then((response) => 
   response.json()
   )
   .catch((error) => {
     console.log(error, 'error');
   });



}

calculator = (token, stname, parentname, email, phone, score,  sub, sub2, sub3, sub4, sub5,bio, phy, che, value, picker1, picker2) => 
{



// formdata.append("product[description]", '12dsadadsa')
var data = { "title": "Pramod Kumar", "status": "publish" ,"post_type": "candidates", "student_name": "Pramod Kumar" ,"parents_name": "P P Keshri","student_email": "keshripramod@gmail.com","phone_number": "9356704158" ,"student_category": "Genral","neet_score": 523,"year_pass_10": 1995 ,"year_pass_12": 1998,"sub1_marks": 77,"sub2_marks": 66 ,"sub3_marks": 98,"sub4_marks": 77,"sub5_marks": 66 , 
"phy_marks": 66 ,"che_marks": 98,"bio_marks": 77 }

 
  return fetch('https://www.mbbsbangladesh.com/wp-json/wp/v2/candidates', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + token
  },
  body: JSON.stringify(data)
}).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });

 

  
  

}

calculator2 = () => {

  }

 
  
  
}