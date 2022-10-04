import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Button,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {getMovies} from '../network/request';

const dropDownData = [
  {label: 'Now Playing', value: {id: '1', api: 'now_playing'}},
  {label: 'Popular', value: {id: '2', api: 'popular'}},
  {label: 'Top Rated', value: {id: '3', api: 'top_rated'}},
  {label: 'Upcoming', value: {id: '4', api: 'upcoming'}},
];

const Movies = () => {
  const [value, setValue] = useState(dropDownData[0]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoad, setLoad] = useState(true);
  const [loading, setLoading] = useState(false);

  const requestAPI = async change => {
    await setPage(1);
    getMovies({api: value.value.api, page}).then(async res => {
      // console.log('res', res);
      if (data?.page !== res?.page) {
        if (change) {
          setData(res.results);
        } else {
          await setData([...data, ...res.results]);
        }
        // await setData(arr => [...arr, ...res.results]);
        setLoad(false);
      } else {
        setLoad(false);
      }
      console.log('data', data);
    });
  };

  useEffect(() => {
    // console.log('use Effect');
    requestAPI();
    // console.log('CURRENT PAGE', page);
  }, [page, value]);

  useEffect(() => {
    // console.log('use Effect');
    requestAPI(page, true);
    // console.log('CURRENT PAGE', page);
  }, [value]);

  const fetchMoreData = () => {
    setLoad(true);
    // if (!newsModel.isListEnd && !newsModel.moreLoading) {
    const a = page + 1;
    setPage(a);
    // }
  };

  const renderFooter = () => (
    <View style={styles.footerText}>
      {isLoad && <ActivityIndicator />}
      {!isLoad && <Text>No more articles at the moment</Text>}
    </View>
  );

  const renderEmpty = () => (
    <View style={styles.emptyText}>
      <Text>No Data at the moment</Text>
      <Button onPress={() => requestAPI()} title="Refresh" />
    </View>
  );

  const renderList = () => {
    <View />;
  };
  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dropDownData}
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item);
        }}
      />
      <FlatList
        contentContainerStyle={{flexGrow: 1, marginTop: 20}}
        data={data}
        renderItem={({item}) => {
          return (
            <Text style={{padding: 20, fontSize: 20}}>
              {item.original_title}
            </Text>
          );
        }}
        keyExtractor={item => item.id}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        onEndReachedThreshold={0.2}
        onEndReached={fetchMoreData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 4,
    marginHorizontal: 24,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  title: {
    fontSize: 25,
    fontWeight: '700',
    marginVertical: 15,
    marginHorizontal: 10,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  emptyText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Movies;
