const ListAndMap = () => {
  let count = 1;
  let arr = [{id:1,name:"HTML"}, {id:2,name:"CSS"}, {id:3,name:"JAVASCRIPT"}, {id:4,name:"bOOTSTARP"}, {id:5,name:"REACT"}];
  let newList = arr.map((ele) => (
    <li key={ele.id}>
      <h1 onClick={()=>{
        console.log(ele.id);
      }}>{`${ele.name} FrontEnd`}</h1>
    </li>
  ));
  return (
    <div className="ListAndMap">
      <ul>{newList}</ul>
    </div>
  );
};

export default ListAndMap;
