import React, { Component } from 'react'
import { Image, SafeAreaView, ScrollView, View, Text, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import colors from '../../utils/colors'
import { TextBold, TextRegular, TextMedium } from '../custom/TextView'
import styles from './styles'
import * as Actions from '../../redux/actions'
import Accordion from 'react-native-collapsible/Accordion';
import Images from '../../utils/Images'
import MyTextInput from '../custom/TextInput';







class GetApprovedList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeSections: [],
      isFilterActive: false,
      filteredData: []

    }
  }

  componentDidMount() {

    if (!this.props.userData) {
      this.props.doGetdata()
    }
  }





  onChangeSearchText(text) {


    if (text.length > 0 && this.props.userData.length > 0) {
      let filteredData = []
      this.props.userData.forEach(element => {
        

        element.category.subcategories.forEach(elementvalue => {
          if (element.category.categoryName.toLowerCase().includes(text.toLowerCase()) || elementvalue.subCategoryname.toLowerCase().includes(text.toLowerCase())) {
            filteredData.push(element)


          }

        })

      });

      const uniqueNames = filteredData.filter((val, id, array) => {
        return array.indexOf(val) == id;
      });

      this.setState({ filteredData: uniqueNames, isFilterActive: true })
    }
    else {
      this.setState({ filteredData: [], isFilterActive: false })
    }
    
  }



  _renderHeader = section => {
    return (
      <View style={[styles.content, { borderRadius: 5 }]}>
        <View style={{ padding: 10, backgroundColor: colors.colorLightGrey }} />
        <View style={styles.bottomItemsView}>
          <View style={{ width: 60, height: 60, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={Images.ic_add_orange} style={styles.bottomsItemsImage} tintColor={colors.colorBlue}></Image>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextBold style={{ color: colors.colorBlack, fontSize: 16, }} title={section.category.categoryName} />
          </View>
        </View>

      </View>

    );
  };


  renderBookingItem(item, index) {
    return (
      <View>

        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>

          <TextMedium style={{ color: colors.colorBlack }} title={item.subCategoryname} />
        </View>
      </View>
    )

  }


  _renderContent = section => {
    return (
      <View style={styles.content}>

        <FlatList
          data={section.category.subcategories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => this.renderBookingItem(item, index)}
          ItemSeparatorComponent={() => (<View style={{ padding: 1, backgroundColor: colors.colorExtraLightGrey }} />)}
        />
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };




  render() {
    if (!this.props.userData) {
      return <View />
    }
    const { data, type, isFilterActive, filteredData } = this.state

    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={{ paddingHorizontal: 30, width: '100%', marginVertical: 25, }}>


          <TextBold style={{ color: colors.colorBlack, fontSize: 24, marginBottom: 20 }} title={"Approved Food List"} />

          <View style={{ width: '100%', marginVertical: 10, height: 60 }}>
            <MyTextInput
              placeholder={"Try Searching fat sauce "}
              onChangeText={(text) => this.onChangeSearchText(text)}
              placeholderTextColor={colors.colorBlack}
              placeholderIcon={Images.ic_star}
              containerStyle={{ height: 40, backgroundColor: colors.colorExtraLightGrey }}
              style={{ height: 40, color: colors.colorBlack }} />
          </View>

          <Accordion
            sections={isFilterActive ? filteredData : this.props.userData}
            activeSections={this.state.activeSections}
            // renderSectionTitle={this._renderSectionTitle}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
          />


        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  userData: state.userDataReducer


})

const mapDispatchToProps = (dispatch) => {
  return {
    doGetdata: () => dispatch(Actions.doLoginAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetApprovedList)
