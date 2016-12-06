/** HTML Code for the below Form Builder Code **/
/**
<form>
 <div className="demo">
 <table>
 <tr>
    <label> First Name: </label>
    <input type="text" name ="firstname" value=""/>
  </tr>
  <tr>
    <label> Last Name: </label>
    <input type="text" name ="lastname" value=""/>
  </tr>
  <tr>
    <label> Email: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp
    <input type="email" name ="email" value=""/>
  </tr>
  </table>
</div>
</form>
**/

/** React JS Code for Form Creation **/
var formNode =
React.createElement(
  "form",
  null,
  React.createElement(
    "div",
    { className: "demo" },
    React.createElement(
      "table",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "label",
          null,
          " First Name: "
        ),
        React.createElement("input", { type: "text", name: "firstname", value: "" })
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "label",
          null,
          " Last Name: "
        ),
        React.createElement("input", { type: "text", name: "lastname", value: "" })
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "label",
          null,
          " Email: "
        ),
        "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",
        React.createElement("input", { type: "email", name: "email", value: "" })
      )
    )
  )
);

ReactDOM.render(formNode,document.getElementById('root')
);
