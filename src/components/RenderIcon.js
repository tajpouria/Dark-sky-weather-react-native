// import React, { Component } from "react";
// import { View, Image } from "react-native";
// import { connect } from "react-redux";

// class RenderIcon extends Component {
//   renderIcon() {
//     switch (this.props.state.data.icon) {
//       default:
//         return "icons8-tornado-96.png";
//     }
//   }
//   render() {
//     console.log(this.props);

//     return (
//       <View>
//         <Image
//           // TODO
//           // style should to cleaner
//           // default render icon spinner or sth like that
//           // maye RenderIcon comp should  change to hoc

//           style={{ height: 50, width: 50 }}
//           source={require(`../icons/${this.renderIcon()}`)}
//         />
//       </View>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return { state };
// };

// export default connect(mapStateToProps)(RenderIcon);

import React, { Component } from "react";
