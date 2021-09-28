import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const Home = ({navigation}) => {
    return(
        <View style={{
            backgroundColor:"#FFF",
            flex:1
        }}>
           <View style={{
               backgroundColor:"grey",
               height:"40%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal:20
           }}>
               <Image
                    source={require("../assets/logo.jpg")}
                    style={{
                        height:100,
                        width:150,
                        marginTop:50,
                        marginLeft:85
                    }}
               />
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:25,
                   width:"100%"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontSize:28,
                            color:"orange",
                            fontWeight:"bold"
                        }}>Hi User</Text>
                   </View>
                   <View style={{width:"50%",alignItems:"flex-end"}}>
                        
                   </View>
               </View>
           </View>
           <LinearGradient
            colors={["black", "transparent"]}
            style={{
                left:0,
                right:0,
                height:90,
                marginTop:-45
            }}
           >
               <View style={{
                   backgroundColor:"#FFF",
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:15,
                   marginTop:25,
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <TextInput
                        placeholder="Search"
                        placeholderTextColor="orange"
                        style={{
                            fontWeight:"bold",
                            fontSize:18,
                            width:260
                        }}
                   />
                   <Image
                    source={require("../assets/SEARCHh.png")}
                    style={{height:20,width:20}}
                   />
               </View>
            </LinearGradient>


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"orange"
                        }}>Recommended</Text>
                        <View style={{
                            height:4,
                            backgroundColor:"#b1e5d3",
                            width:115,
                            marginTop:-5
                        }}>

                        </View>

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"orange",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                        </View>
                   </View>
               </View>

            
        
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:400}}
                >
                    <LinearGradient
                        colors={["rgba(0,164,109,0.09)", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:100,
                            marginTop:220,
                            top:0
                        }}
                    />
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require("../assets/images-1.jpg")}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>CONTENT WRITER</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"orange",
                            paddingTop:3
                        }}>
                            MUMBAI
                        </Text>
                    </TouchableOpacity>

                    <View 
                        //onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                         <Image
                            source={require("../assets/employee-office-desk-work-career-growth.webp")} style={{height:170,width:220}}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>ARCHITECT</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"orange",
                            paddingTop:3
                        }}>
                            JAIPUR
                        </Text>
                    </View>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require("../assets/job2.webp")}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>SAMANTHA</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>$400</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            RUSSIA
                        </Text>
                    </View>

                </ScrollView>            

                


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginTop:-80,
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Featured Jobs</Text>
                        <View style={{
                            height:4,
                            backgroundColor:"#b1e5d3",
                            width:115,
                            marginTop:-5
                        }}>

                        </View>

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                        </View>
                   </View>
               </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginBottom:-100}}
                >
                    
                </ScrollView>
        </View>
    )
}
export default Home;