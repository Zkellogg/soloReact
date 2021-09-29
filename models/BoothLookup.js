import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import Header from "../components/Header";

const BoothLookup = (props) => {
  let boothArr = [
    {
      key: "1",
      boothId: 100,
      name: "Booth 1",
      about: "some random information",
    },
    {
      key: "2",
      boothId: 200,
      name: "Booth 2",
      about: "some random information",
    },
    {
      key: "3",
      boothId: 300,
      name: "Booth 3",
      about: "some random information",
    },
    {
      key: "4",
      boothId: 400,
      name: "Booth 4",
      about: "some random information",
    },
  ];
  return (
    <View>
      <Header />
      <Button title="Close" onPress={props.passCloseBLU} />
      <FlatList
        data={boothArr}
        renderItem={({ item }) => (
          <View>
            <Text>Booth ID: {item.boothId}</Text>
            <Text>Exhibitor: {item.name}</Text>
            <Text>Info: {item.about}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default BoothLookup;
