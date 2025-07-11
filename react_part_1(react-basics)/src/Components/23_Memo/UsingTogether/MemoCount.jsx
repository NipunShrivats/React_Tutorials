import React, { memo, useRef } from "react";

export const MemoCount = memo(({ bioData }) => {
  const renderCount = useRef(0);
  console.log(renderCount);
  return (
    <>
      <div>
        <p>Nothing changed here but Ive now rendered:</p>
        <span>{renderCount.current++}time(s)</span>
        <p>
          My name is {bioData.name} & I am {bioData.age} yrs old.
        </p>
      </div>
    </>
  );
});

// export default memo(MemoCount);
