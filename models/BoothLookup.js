import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import Header from "../components/Header";
import { connect } from "react-redux";
// import { useSelector } from "react-redux";

const BoothLookup = ({ booths, passCloseBLU }) => {
  // const availableBooths = useSelector((state) => state.booths);

  console.log(booths);
  return (
    <View>
      <Header />
      <Button title="Close" onPress={passCloseBLU} />
      <FlatList
        data={booths}
        renderItem={({ item }) => (
          <View>
            <Text>Booth ID: {item.boothName}</Text>
            <Text>Exhibitor: {item.boothNumber}</Text>
            <Text>Info: {item.info}</Text>
            <Text>Phone: {item.phone}</Text>
            <Text>Website: {item.website}</Text>
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  const { booths } = state;
  return { booths };
};

export default connect(mapStateToProps)(BoothLookup);
