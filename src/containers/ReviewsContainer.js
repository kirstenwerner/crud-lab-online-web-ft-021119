import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  associatedReviews = () => {
    return this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
  }

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />

        <Reviews reviews={this.associatedReviews()} restaurantId={this.props.restaurant.id} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => {
  return {reviews}
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({type: "ADD_REVIEW", review}),
  deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
