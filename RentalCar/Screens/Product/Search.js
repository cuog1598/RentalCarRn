import React, { Component } from 'react';
import {StatusBar, ImageBackground, View,StyleSheet,Dimensions,TouchableOpacity,Image,SafeAreaView,Text,ScrollView,FlatList} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content,Form,Picker } from 'native-base';
import { SearchBar } from 'react-native-elements';
import backgroud from '../images/backgroud/backgroud.jpg'

const a= '../images/backgroud/white.jpg'

export default class HeaderMultipleIconExample extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      img:'../images/backgroud/backgroud.jpg',
      selected: "key1",
      selected2: "",
      title: '',
      Id: null,
      content: '',
      obj: [],
      obj2: [],
    };
  }

  componentDidMount() {
    this._fetchUsers()
    
    if(this.props.navigation.state.params.Id ===1)
    {
      this.setState({
        title : "Tìm kiếm xe Ô tô"
      })
    }
    else
    {
      this.setState({
        title : "Tìm kiếm xe máy"
      })
    }
  }

  _fetchUsers = () => {
    fetch('http://10.0.2.2:45455/api/tinhs')
      .then((response) => response.json())
      .then((resopnseJson) => {
        this.setState ({
          obj: resopnseJson,
        })
        
      })
      .catch((error) => {
          console.error(error);
      });

}


_fetchHuyen = () => {
  fetch('http://10.0.2.2:45455/api/Huyens/62')
    .then((response) => response.json())
    .then((resopnseJson) => {
      this.setState ({
        obj2: resopnseJson,
      })
      
    })
    .catch((error) => {
        console.error(error);
    });

}

onValueChange(value) {
  this._fetchHuyen()

  this.setState({
    selected: value,
  });
}

onValueChange2(value) {
  this.setState({
    selected2: value
  });
}
  render() {
    const {navigation}=this.props; 
    return (
      
      <SafeAreaView>

      <View style={styles.container}>
        <Container>

        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
        <View style={styles.Thumbnail}>
        <ImageBackground style={styles.Thumbnail} source={require(a)}>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingTop:20}}>
            <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
              <Icon style={{paddingLeft:20, paddingTop:10}} name='arrow-back' />
            </TouchableOpacity>
            <Text style= {{fontSize:18, fontWeight:"bold", textAlign:"center", paddingTop:10, paddingLeft:30}}>{this.state.title}</Text>
          </ScrollView>
        
        </View>
          
        </ImageBackground>
        
        </View>
         
          
        </Container>
          
      </View>
      <View style={{height:1.5, backgroundColor:"gray"}}>

      </View>

      <View>
        <Text>{this.state.content}</Text>
        <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: width }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              {
                 this.state.obj.map((item) =>{
                   return(
                   <Picker.Item  label={item.tenTinh} value={item.ma} key={item.ma}/>
                   );
                 })
               }
            </Picker>
          </Form>
      </View>
      <View>
        <Form>
      <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              {
                 this.state.obj2.map((item) =>{
                   return(
                   <Picker.Item  label={item.tenHuyen} value={item.id} key={item.id}/>
                   );
                 })
               }
            </Picker>
          </Form>
               <Image source={require('../images/backgroud/backgroud.jpg')}/>
               <Text>{this.state.img}</Text>
      </View>
      </SafeAreaView>
      
    );
  }
}
const {height,width}= Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
    backgroundColor: 'transparent',
    height:80,
      }
      ,
    Thumbnail:{
        height:80,
        left: 0,
        right: 0,
        width: width,
        borderWidth:0.5,
        borderBottomWidth:1,
        borderBottomColor:"gray",
        
    },

    body:{
    
    }
    }
)
