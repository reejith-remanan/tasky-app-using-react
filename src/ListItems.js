import React from "react";
import FlipMove from "react-flip-move";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ListItems(props) {
  const items = props.items;
  const listItems = items.map((items) => {
    return (
        <FlipMove>
      <div className="list" key="item.key">
        <p>
          <input type="text" id={items.text} value={items.text}
          onChange={
            (e)=> {
                props.setUpdate(e.target.value, items.key)
            }
          }
           />
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => props.deleteItem(items.key)}
            />
          </span>
        </p>
      </div>
      </FlipMove>
    );
  });
  return <div>{listItems}</div>;
}
export default ListItems;
