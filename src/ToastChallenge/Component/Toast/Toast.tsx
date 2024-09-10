interface Toast{

    message:string;
}

const Toast = (props: Toast) => {
  return (
    <>
      <div>
        <h1>{props.message}</h1>
      </div>
    </>
  );
};

export default Toast;
