import React, { memo, useRef } from "react";

export const MemoCount = memo(() => {
  const renderCount = useRef(0);
  console.log(renderCount);
  return (
    <>
      <div>
        <p>Nothing changed here but Ive now rendered:</p>
        <span>{renderCount.current++}time(s)</span>
      </div>
    </>
  );
});

// export default memo(MemoCount);
