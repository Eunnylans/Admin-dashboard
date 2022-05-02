import "./widgetLg.css";

export default function widgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
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
              src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/185872471_10215171635523483_1904449185798158987_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=22iC3fjuxHcAX8h4mmr&_nc_oc=AQl1yBTscTeHFy9DaPxmrzKRrfuk4ksstIaEa8_Sd1DNpjFux_FFIsbXFkUifYTDznM&_nc_ht=scontent-frt3-1.xx&oh=00_AT8zS2rrL6N7YCUuj6zxkhPs1psn2a32coAibkMTDeiFLQ&oe=629326C2"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Maureen Orji</span>
          </td>
          <td className="widgetLgDate">24 Jul 2021</td>
          <td className="widgetLgAmount">$150.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/185872471_10215171635523483_1904449185798158987_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=22iC3fjuxHcAX8h4mmr&_nc_oc=AQl1yBTscTeHFy9DaPxmrzKRrfuk4ksstIaEa8_Sd1DNpjFux_FFIsbXFkUifYTDznM&_nc_ht=scontent-frt3-1.xx&oh=00_AT8zS2rrL6N7YCUuj6zxkhPs1psn2a32coAibkMTDeiFLQ&oe=629326C2"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Maureen Orji</span>
          </td>
          <td className="widgetLgDate">24 Jul 2021</td>
          <td className="widgetLgAmount">$150.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/185872471_10215171635523483_1904449185798158987_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=22iC3fjuxHcAX8h4mmr&_nc_oc=AQl1yBTscTeHFy9DaPxmrzKRrfuk4ksstIaEa8_Sd1DNpjFux_FFIsbXFkUifYTDznM&_nc_ht=scontent-frt3-1.xx&oh=00_AT8zS2rrL6N7YCUuj6zxkhPs1psn2a32coAibkMTDeiFLQ&oe=629326C2"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Maureen Orji</span>
          </td>
          <td className="widgetLgDate">24 Jul 2021</td>
          <td className="widgetLgAmount">$150.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/185872471_10215171635523483_1904449185798158987_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=22iC3fjuxHcAX8h4mmr&_nc_oc=AQl1yBTscTeHFy9DaPxmrzKRrfuk4ksstIaEa8_Sd1DNpjFux_FFIsbXFkUifYTDznM&_nc_ht=scontent-frt3-1.xx&oh=00_AT8zS2rrL6N7YCUuj6zxkhPs1psn2a32coAibkMTDeiFLQ&oe=629326C2"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Maureen Orji</span>
          </td>
          <td className="widgetLgDate">24 Jul 2021</td>
          <td className="widgetLgAmount">$150.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
