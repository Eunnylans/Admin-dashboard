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
              src="https://scontent-frx5-2.xx.fbcdn.net/v/t1.6435-9/86175865_2575101879265844_341294984856600576_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=td2EQO591JwAX8ywISF&_nc_ht=scontent-frx5-2.xx&oh=00_AT8NRH6CglSGXSux_pvSuQhAmIRTtJhKGJamNnZPJYcwvA&oe=62A9ACBF"
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
              src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/119733615_4309416539133004_1891197642158888396_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=e3f864&_nc_ohc=uSAnS47uJIIAX_qCo0M&_nc_ht=scontent-frt3-1.xx&oh=00_AT_7u8gqD8VrH9PKZCHCrSmOesa5PhmNcawvwBywBHn91w&oe=62A88605"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Julietn Effiom</span>
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
              src="https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-6/282256149_10216574157945667_1061935250443600287_n.jpg?_nc_cat=102&ccb=1-6&_nc_sid=0debeb&_nc_ohc=z-13jvNOiOQAX-yg8pc&_nc_ht=scontent-frt3-1.xx&oh=00_AT-_hj5IBp-tcuEHyEoJc3KbM0pQPfONjJbs36hgtk2Owg&oe=628A4621"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Favor Igbinedion</span>
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
              src="https://scontent-frt3-2.xx.fbcdn.net/v/t39.30808-6/281858270_10216574158705686_8826049898503738449_n.jpg?_nc_cat=103&ccb=1-6&_nc_sid=0debeb&_nc_ohc=VJwqeUOiSqsAX9usnDV&tn=6n4Q6I1YmwmBo1l1&_nc_ht=scontent-frt3-2.xx&oh=00_AT8xAhGntKXQ64jEN8vALqNUbxO0vJouDzmXcQtRo3K6Ww&oe=6289FD42"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Nathaniel Osaretin Ugowe</span>
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
