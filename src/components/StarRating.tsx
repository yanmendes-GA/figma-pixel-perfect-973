import React from 'react';

interface StarRatingProps {
  rating?: number;
  showEmpty?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating = 5, showEmpty = false }) => {
  if (showEmpty) {
    return (
      <div className="flex items-center gap-px">
        {[1, 2, 3, 4, 5].map((star) => (
          <div
            key={star}
            className="flex w-[21px] shrink-0 h-[18px]"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-px">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/61a8a49d95936b897b5074ec892acdef5f1a8f1e?placeholderIfAbsent=true"
        className="aspect-[1.17] object-contain w-[21px] self-stretch shrink-0 my-auto"
        alt="Star"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/1e73d32a56a52bd42e9f585bfb74742496b0dcb5?placeholderIfAbsent=true"
        className="aspect-[1.22] object-contain w-[22px] self-stretch shrink-0 my-auto"
        alt="Star"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/07a0e707b04cf8729d08a525e5338e11d11ef33c?placeholderIfAbsent=true"
        className="aspect-[1.22] object-contain w-[22px] self-stretch shrink-0 my-auto"
        alt="Star"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/ce5da62eceb8d95a198b7ae8787c1767bf897026?placeholderIfAbsent=true"
        className="aspect-[1.22] object-contain w-[22px] self-stretch shrink-0 my-auto"
        alt="Star"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/122aa9735c731ffe31e3973647e1c68613990b6f?placeholderIfAbsent=true"
        className="aspect-[1.17] object-contain w-[21px] self-stretch shrink-0 my-auto"
        alt="Star"
      />
    </div>
  );
};
