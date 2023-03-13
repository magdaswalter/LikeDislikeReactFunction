import React, { useState } from "react";
import { ReactionType } from "../../types/ReactionTypes";
import CustomButton from "../custom-button/CustomButton";
import "./LikeDislikeComponent.css";

const LikeDislikeButton = () => {
  const [selectedReaction, setSelectedReaction] = useState<ReactionType | null>(
    null
  );

  const handleReactionClick = (reaction: ReactionType) => {
    if (selectedReaction === reaction) {
      setSelectedReaction(null);
    } else {
      setSelectedReaction(reaction);
    }
  };

  return (
    <div className="button-container">
      <CustomButton
        title="Like"
        handleClick={() => {
          handleReactionClick(ReactionType.Like);
        }}
        className={selectedReaction === ReactionType.Like ? "active" : ""}
      />
      <CustomButton
        title="Dislike"
        handleClick={() => {
          handleReactionClick(ReactionType.Dislike);
        }}
        className={selectedReaction === ReactionType.Dislike ? "active" : ""}
      />
    </div>
  );
};

export default LikeDislikeButton;
