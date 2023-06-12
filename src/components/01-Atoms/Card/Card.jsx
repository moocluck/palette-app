import React from 'react';
import { Link } from 'react-router-dom';
import { Heading5 } from '../Heading/Heading.styles';
import { cardStyles, linkStyles, imageContainerStyles, imageStyles, textStyles } from './Card.styles';

const Card = ({ imageUrl, text, destination }) => {
  return (
    <Link to={destination} style={linkStyles}>
      <div style={cardStyles} className="card">
        <div style={imageContainerStyles}>
          <img src={imageUrl} alt="Card Icon" style={imageStyles} />
        </div>
        <Heading5 weight='500' xsmall style={textStyles}>{text}</Heading5>
      </div>
    </Link>
  );
};

export default Card;