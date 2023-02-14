import "./widgetLg.css";

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.gr-assets.com/authors/1561336084p8/4123863.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Federico Kereki</span>
          </td>
          <td className="widgetLgDate">14 May 2022</td>
          <td className="widgetLgAmount">$2100.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ikechi Fortune</span>
          </td>
          <td className="widgetLgDate">12 May 2022</td>
          <td className="widgetLgAmount">$1202.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        </table>
    </div>
  );
}
export default WidgetLg;