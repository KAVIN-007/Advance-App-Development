import React from 'react'
import { avatar, quotationMark } from '../../../assets'
import PropTypes from 'prop-types'; // Import PropTypes for type checking

const FeedbackCard = ({ feedback }) => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <img src={avatar} alt={feedback.name} />
          <div>
            <h1>{feedback.name}</h1>
            <p>{feedback.position}</p> 
          </div>
        </div>
        <img className='h-8' src={quotationMark} alt="quotation mark" /> 
      </div>

      <div className='py-8'>
        <h3 className='text-lg'>{feedback.comment}</h3> {/* Assuming comment is provided in feedback */}
      </div>
    </div>
  )
}

FeedbackCard.propTypes = {
  feedback: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    quotationMark: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired
  }).isRequired
};

export default FeedbackCard;
