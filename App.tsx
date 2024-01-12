import React, {Component, useEffect, useRef, useState} from 'react';
import {Pressable,View, Text, StyleSheet, TextInput, TouchableOpacity, Animated, Button, useAnimatedValue, TouchableWithoutFeedback} from 'react-native';
import Hehe from './fuck'
import { relative } from 'path';
const App = () => {
 const[st, setst] = useState(0)
 const[co, setc] = useState("red")
 const sizec = useState(new Animated.Value(1))[0]
 const sizec1 = useState(new Animated.Value(1))[0]
 const sizec2 = useState(new Animated.Value(1))[0]
 const move = useState(new Animated.Value(1))[0]
 const opc = useState(new Animated.Value(0))[0]
 const move1 = useState(new Animated.Value(0))[0]
 const [is, setis] = useState(false)
 const[opc1, setopc1] = useState(0)
 const[tim, settim] = useState(0)
 const move2 = useState(new Animated.Value(0))[0]

 if(st === 0){
  setst("Start")
  setc("gray")
}
let timerInterval;

useEffect(() => {

  if (is) {
    timerInterval = setInterval(() => {
      settim((prevTime) => prevTime + 1);
    }, 1000);
  }

  return () => {
    clearInterval(timerInterval);
  };
}, [is]);

  function inc(){

    setis(true)
    if(st >= 99){
      setst(100)
      setis(false)
      clearInterval(timerInterval)
      Animated.timing(move2, {
        toValue : 280,
        duration : 800,
        useNativeDriver: false
      }).start((result) => {
        if(result.finished){
          Animated.timing(sizec2, {
            toValue : 0.8,
            duration : 800,
            useNativeDriver: false
          }).start((result) => {
            if(result.finished){
              Animated.timing(sizec1, {
                toValue : 1.5,
                duration : 800,
                useNativeDriver: false
              }).start()
            }
          })
        }
      })
    }
    else{
    setopc1(1)
    Animated.timing(move, {
      toValue : 50,
      duration : 1200,
      useNativeDriver: false
    }).start(),
    Animated.parallel([
      Animated.timing(sizec, {
        toValue : 1.5,
        duration : 120,
        useNativeDriver: false
      }),
      
    ]).start()
    Animated.timing(sizec, {
      toValue : 1.22,
      duration : 120,
      useNativeDriver: false
    }).start((result) => {
      if(result.finished){
        Animated.timing(sizec, {
          toValue : 1.5,
          duration : 120,
          useNativeDriver: false
        }).start((result) => {
          if(result.finished){
            Animated.timing(opc, {
              toValue : 1,
              duration : 1,
              useNativeDriver: false
            }).start((result) => {
              if(result.finished){
                Animated.timing(move1, {
                  toValue : 300,
                  duration : 123,
                  useNativeDriver: false
                }).start((result => {
                  if(result.finished){
                    Animated.timing(opc, {
                      toValue : 0,
                      duration : 1,
                      useNativeDriver: false
                    }).start((result => {
                      if(result.finished){             
                    Animated.timing(move1, {
                      toValue : 0,
                      duration : 1,
                      useNativeDriver: false
                    }).start()
                  }
                }
                    ))
                  }
                }))
              }
            })
          }
        })
      }
    })
    if(st == "Start"){
      setc("red")
      setst(0)
    }
    setst(w => w+1)
    if(st > 10){
      setc("green")
    }
    if(st > 25){
      setc("dodgerblue")
    }
  }
  }
return(
  <View style = {styles.main}>
      <View style = {styles.nn}>
      <Text style = {styles.mm}>Crafted By Suraj In Native</Text>
    </View>
    <View style = {styles.sub}>
      <Animated.View style = {{transform : [{scale : sizec}], position:"relative",top:move}}>
        <Animated.View style = {{opacity:opc, position: "relative", bottom: move1}}>
      <Text style = {[styles.text1, {color: co}]}>{st}</Text>
      </Animated.View>
    <Text onPress={inc} style = {[styles.text, {color: co,}]}>{st}</Text>
    <Animated.View style = {{position:"relative", bottom:move2,transform:[{scale:sizec1}]}}>
    <Text style = {[styles.timer1, {opacity : opc1}]}>{tim}s</Text>
    </Animated.View>
    </Animated.View>
    </View>
  </View>
)
}
export default App
const styles = StyleSheet.create({
  nn:{
    backgroundColor:"dodgerblue",
    position:"relative",
    bottom:232,
    padding:25,
    width:'100%'
  },
  mm:{
    color:"white",
    fontSize:25,
    fontFamily:"BauhausStd-Medium",
  },
  timer1 : {
    position:"relative",
    fontFamily:"BauhausStd-Medium",
    left:38,
    fontSize:50
  },
  text1 : {
    fontSize:100,
    fontFamily:"BauhausStd-Medium",
    marginBottom:-50
  },

  text : {
    fontSize:150,
    fontFamily:"BauhausStd-Medium",
  },
  main:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sub:{
    justifyContent: 'center',
    alignItems: 'center',
  },
})