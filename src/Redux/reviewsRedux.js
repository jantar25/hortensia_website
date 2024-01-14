import { createSlice } from '@reduxjs/toolkit'

const reviewsSlice = createSlice({
  name:'reviews',
  initialState:{
    reviews: [],
    isFetching: false,
    error: null,
    success:null
  },
  reducers:{
    // GET ALL REVIEWS
    getReviewsStart:(state) => {
      state.isFetching=true
    },
    getReviewsSuccess:(state,action) => {
      state.isFetching=false
      state.reviews=action.payload
      state.error=null
    },
    getReviewsFailure:(state,error) => {
      state.isFetching=false
      state.error=error.payload
    },
    // UPDATE A REVIEW
    updateReviewStart:(state) => {
      state.isFetching=true
      state.error=null
      state.success=null
    },
    updateReviewSuccess:(state,action) => {
      state.isFetching=false
      state.reviews.reviews[state.reviews.reviews.findIndex((item) => item.data.reviewUid === action.payload.id)].data = action.payload.updatedReview
      state.error=null
    },
    updateReviewFailure:(state,error) => {
      state.isFetching=false
      state.error=error.payload
      state.success=null
    },
  }
})


export const { getReviewsStart,getReviewsSuccess,getReviewsFailure,updateReviewStart,updateReviewSuccess,updateReviewFailure } = reviewsSlice.actions
export default reviewsSlice.reducer