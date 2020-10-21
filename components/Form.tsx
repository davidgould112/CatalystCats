import React from 'react';
import { Cat } from '../state/types';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput, View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';

interface Props {
  formType: string;
  editCat: Cat;
  submit: (name: string, breed:string, color: string, id: number) => void;
  hideForm: () => void;
  updateCat: (cat: Cat) => void;
}

interface State {
  name: string;
  breed: string;
  color: string;
  id: number;
}

class Form extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: this.props.editCat.name,
      breed: this.props.editCat.breed,
      color: this.props.editCat.color,
      id: -1
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBreedChange = this.handleBreedChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  componentDidMount () {
    if(this.props.formType === 'create') {
      this.setState({
        name: "Enter Name",
        breed: "Select",
        color: "Select"
      })
    }
  }

  handleNameChange(text:String) {
    this.setState({ name: text } as State)
  }
  handleBreedChange(item: {value: String}) {
    this.setState({ breed: item.value } as State)
  }
  handleColorChange(item: {value: String}) {
    this.setState({ color: item.value } as State)    
  }

  render () {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.title}> {(this.props.formType === "create") ? "Create A New Cat!" : "Edit Cat"} </Text>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.inputContainer}>
            <Text>Name</Text>
            <TextInput 
              style={styles.textInput}
              placeholder={this.state.name}
              onChangeText={(text: string) => this.handleNameChange(text)}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={[styles.zHigh, styles.inputContainer]}>
          <Text>Color</Text>
          <DropDownPicker
              defaultValue={this.props.editCat.color}
              onChangeItem={(item: any) => {this.handleColorChange(item)}}
              style={styles.picker}
              containerStyle={{
                height: 40,
              }}
            items={[
              {label: "Black", value: "Black"},
              {label: "Gray", value: "Gray"},
              {label: "Brown", value: "Brown"},
              {label: "Orange", value: "Orange"},
              {label: "Calico", value: "Calico"},
              {label: "White", value: "White"},
              {label: "Select", value: "Select"}
            ]}
          />
        </View>
        <View style={[styles.zLow, styles.inputContainer]}>
          <Text>Breed</Text>
          <DropDownPicker
            defaultValue={this.state.breed}
            containerStyle={{height: 40}}
            onChangeItem={(item: any) => this.handleBreedChange(item)}
            style={styles.picker}
            items={[
              {label:"Bengal", value:"Bengal"},
              {label:"Persian", value:"Persian"},
              {label:"Bobtail", value:"Bobtail"},
              {label:"Abyssinian", value:"Abyssinian"},
              {label:"Tabby", value:"Tabby"},
              {label:"Siamese", value:"Siamese"},
              {label: "Select", value: "Select"}
            ]}
          /> 
        </View>
        <Button 
          title="Submit" 
          onPress={() => {
            if(this.props.formType === 'create') {
              this.props.submit(this.state.name, this.state.breed, this.state.color, this.state.id); 
            } else {
              this.props.updateCat({
                name: this.state.name,
                breed: this.state.breed,
                color: this.state.color,
                key: this.props.editCat.key
              })
            }
            this.props.hideForm(); 
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    formContainer: {
    width: '100%',
    height: '100%',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 20,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#ffffff",
    borderColor: "#dfdfdf",
    height: 38,
    paddingLeft: 15,
    width: "100%"

  },
  picker: {
    height: 15
  },
  inputContainer: {
    height: 60,
    width: "50%",
    marginBottom: 10,
    marginTop: 10
  },
  zHigh: {
    zIndex: 100
  },
  zLow: {
    zIndex: 95
  }
})

export default Form;