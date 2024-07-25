export default function Fruit({fruitInfo, onclickAction}){

    return <div>
        <li>{fruitInfo.nom}{""}
            <button onClick={onclickAction}>Action</button>
          </li>
    </div>
};