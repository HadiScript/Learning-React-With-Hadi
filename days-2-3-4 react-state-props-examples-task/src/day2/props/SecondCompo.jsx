import ThirdCompo from "./ThirdCompo";

const SecondCompo = (props) => {
  return (
    <div>
      <h5>Say hello from second component - {JSON.stringify(props)} </h5>
      <ThirdCompo secondFrom={props.myfrom} />
    </div>
  );
};

export default SecondCompo;
