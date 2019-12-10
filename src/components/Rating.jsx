// import StarRatings from './react-star-ratings';
// import PropTypes from 'prop-types';

// // need to lift state to work on App component - needs to grab the rating, round to nearest half digit, and render as stars. 

// class Foo extends Component {
//   changeRating( newRating, index ) {
//     this.setState({
//       rating: newRating
//     });
//   }

//   render() {
//     // rating = 2;
//     return (
//       <StarRatings
//         rating={this.state.rating}
//         starRatedColor="blue"
//         changeRating={this.changeRating}
//         numberOfStars={6}
//         name='rating'
//       />
//     );
//   }
// }

// Foo.propTypes = {
//   routeList: PropTypes.array,
//   rating: PropTypes.number,
//   index: PropTypes.number
// }

// export default Foo;


// class Bar extends Component {
// render() {
//   // aggregateRating = 2.35;
//   return (
//     <StarRatings
//       rating={2.403}
//       starDimension="40px"
//       starSpacing="15px"
//     />
//   );
// }
// }

// Bar.propTypes = {
//   routeList: PropTypes.array,
//   rating: PropTypes.number,
//   index: PropTypes.number
// }