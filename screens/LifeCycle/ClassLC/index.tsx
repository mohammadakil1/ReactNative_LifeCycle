import {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

// class Class_component extends Component {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       count: 0,
//       name: 'akil',
//     };
//   }
//   increment = () => {
//     // this.setState({count:this.state.count+1})
//   };

//   render() {
//     return (
//       <View>
//         <Text>Class_component</Text>
//       </View>
//     );
//   }
// }
// export default Class_component;

class ClassLC extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text>ClassLC</Text>
      </View>
    );
  }
}

export default ClassLC;
