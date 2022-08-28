import react, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import {
  Card,
  List,
  Text,
  Divider,
  Button,
  StarIcon,
  Input,
} from "@ui-kitten/components";

const Agree = () => {
  const [countAgree, setcountAgree] = useState(0);
  const [countNeutral, setcountNeutral] = useState(0);
  const [countDisagree, setcountDisagree] = useState(0);
  const [text, setText] = useState("");
  const onChange = (textValue) => setText(textValue);
  const [data, setData] = useState([
    {
      title: "Agree",
      user: "Kevin",
      comment:
        " The individual rights a women has are not only for herself, but the child relying on her to live. One of the woman’s most basic freedoms is the right to control her own body and to determine if she bears a child.",
    },
    {
      title: "Agree",
      user: "Kevin",
      comment:
        " The individual rights a women has are not only for herself, but the child relying on her to live. One of the woman’s most basic freedoms is the right to control her own body and to determine if she bears a child.",
    },
    {
      title: "Agree",
      user: "Kevin",
      comment:
        " The individual rights a women has are not only for herself, but the child relying on her to live. One of the woman’s most basic freedoms is the right to control her own body and to determine if she bears a child.",
    },
    {
      title: "Disagree",
      user: "Shaun",
      comment:
        " The individual rights a women has are not only for herself, but the child relying on her to live. One of the woman’s most basic freedoms is the right to control her own body and to determine if she bears a child.",
    },
  ]);

  return (
    <ScrollView style={{ backgroundColor: "rgb(247, 249, 252)" }}>
      <View
        style={{
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://cdn.cfr.org/sites/default/files/styles/open_graph/public/image/2022/06/Abortion.jpg",
          }}
          style={styles.img}
          resizeMode="contain"
        />
      </View>

      <Text
        style={{ marginLeft: 20, marginTop: 50, marginBottom: 10 }}
        category="h5"
      >
        What is your opinion on abortion?
      </Text>
      <View style={styles.buttons}>
        <Pressable
          style={styles.btnA}
          onPress={() => setcountAgree(countAgree + 1)}
        >
          <Text>Agree</Text>
        </Pressable>
        <Pressable
          style={styles.btnN}
          onPress={() => setcountNeutral(countNeutral + 1)}
        >
          <Text>Neutral</Text>
        </Pressable>
        <Pressable
          style={styles.btnD}
          onPress={() => setcountDisagree(countDisagree + 1)}
        >
          <Text>Disagree</Text>
        </Pressable>
      </View>

      <View style={styles.stats}>
        <Text>
          {Math.round(
            (countAgree / (countAgree + countNeutral + countDisagree)) * 100
          )}
          %
        </Text>
        <Text>
          {Math.round(
            (countNeutral / (countAgree + countNeutral + countDisagree)) * 100
          )}
          %
        </Text>
        <Text>
          {Math.round(
            (countDisagree / (countAgree + countNeutral + countDisagree)) * 100
          )}
          %
        </Text>
      </View>

      <Text
        style={{ marginLeft: 20, marginTop: 50, marginBottom: 10 }}
        category="h5"
      >
        Views
      </Text>
      <View style={{ padding: 15 }}>
        <Input
          textStyle={{}}
          label={(evaProps) => <Text {...evaProps}>My View</Text>}
          onChangeText={onChange}
          style={{ marginBottom: 20 }}
        />

        <Button
          onPress={() =>
            setData([{ title: "Agree", user: "Kevin", comment: text }, ...data])
          }
        >
          Comment
        </Button>
      </View>
      <ListCustomItemShowcase data={data} />
    </ScrollView>
  );
};
export { Agree };

export const ListCustomItemShowcase = ({ data }) => {
  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category="h6">
        {info.item.title} {info.index + 1}
      </Text>
    </View>
  );

  const renderItemFooter = (footerProps) => (
    <Text {...footerProps}>By User</Text>
  );

  const renderItem = (info) => (
    <Card
      style={styles.item}
      status="basic"
      header={(headerProps) => renderItemHeader(headerProps, info)}
      footer={(footerProps) => {
        return <Text {...footerProps}>By {info.item.user}</Text>;
      }}
    >
      <Text>{info.item.comment}</Text>
    </Card>
  );
  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  img: {
    width: 375,
    height: 220,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 220,
  },
  btnA: {
    width: "30%",
    alignItems: "center",
    backgroundColor: "#00d5ff",
    paddingVertical: 20,
    borderRadius: 10,
  },
  btnN: {
    width: "30%",
    alignItems: "center",
    backgroundColor: "#d6d6d2",
    paddingVertical: 20,
    borderRadius: 10,
  },
  btnD: {
    width: "30%",
    alignItems: "center",
    backgroundColor: "#f70c0c",
    paddingVertical: 20,
    borderRadius: 10,
  },
  buttons: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
    alignContent: "flex-end",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    maxHeight: "100%",
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});

// { navigation, route, ...props }
