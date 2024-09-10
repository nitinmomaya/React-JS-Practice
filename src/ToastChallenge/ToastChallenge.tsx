import { useEffect, useState } from "react";
import Toast from "./Component/Toast/Toast";
interface ToastObject {
  id: number;
  message: string;
}
const ToastChallenge = () => {
  const [toastArray, setToastArray] = useState<Array<ToastObject>>([{id:0,message:''}]);
  const max = 10;
  const isMax = toastArray.length > max ? true : false;
  useEffect(() => {
    const removeToast = setInterval(() => {
      setToastArray((prev) => {
        if (prev.length > 0 || isMax) {
          return prev.slice(1);
        }
        return prev;
      });
    }, 5000);

    return () => clearInterval(removeToast);
  }, []);

  const handleClick = () => {
    if (!isMax) {
      setToastArray((prev) => [
        ...prev,
        { id: Date.now(), message: `Toast Notifications ${Date.now()}` },
      ]);
    }
  };
  return (
    <>
      <button onClick={handleClick}>Click to add more</button>
      <div>
        {toastArray.map((item: ToastObject) => {
          return <Toast message={item.message} />;
        })}
      </div>
    </>
  );
};

export default ToastChallenge;
