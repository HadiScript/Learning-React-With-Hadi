import SecondCompo from "./SecondCompo";

function FirstCompo() {
  let from = "hadir aza";

  return (
    <div>
      <h1>From hadi</h1>
      <SecondCompo myfrom={from} />
    </div>
  );
}

export default FirstCompo;
