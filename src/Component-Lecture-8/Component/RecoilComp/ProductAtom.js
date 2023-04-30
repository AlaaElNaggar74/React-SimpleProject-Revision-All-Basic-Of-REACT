import { atom } from "recoil";


let ProductAtoms=atom({
  key:"ProductAtoms",
  default:[
    {
      id: 1,
      title: "Product-5222",
      mname: "Toshiba",
      lname: "XL",
      familName: "naggar",
      coun: 2,
    },
    {
      id: 2,
      title: "Product-2",
      mname: "Samsung",
      lname: "MD",
      familName: "naggar",
      coun: 8,
    },
    {
      id: 3,
      title: "Product-3",
      mname: "LAMBERG",
      lname: "SM",
      familName: "naggar",
      coun: 5,
    },
  ]
});

export default ProductAtoms;