import React from 'react';

const Item = ({ item, onRemoveItem }) => {
  const handleRemoveItem = () =>
    onRemoveItem(item);

  return (
    <div class="story-item">
      <span class="story-link">
        <a href={item.url}>{item.title}</a>
      </span>
      <span class="story-author">{item.author}</span>
      <span class="story-comments">{item.numComments}</span>
      <span class="story-points">{item.points}</span>
      <span class="story-dismiss">
        <button type="button" onClick={handleRemoveItem}>
          Dismiss
        </button>
      </span>
    </div>
  );
};

export default Item;