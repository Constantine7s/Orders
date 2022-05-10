import axios from 'axios';

export default function Orders({ data, fetchData }) {

  async function deleteOrder(order) {
    await axios.delete(`/del/${Number(order.target.id)}`);
    fetchData();
  }

  let orders = data.map((order) => {
    return (
      <tr key={order.id}>
        <td>{order.name}</td>
        <td>{order.drink}</td>
        <td>{order.size}</td>
        <section id = "btn">
        <button
          type="button"
          className="orderBtn"
          id={order.id}
          onClick={deleteOrder}
        >
          Delete
        </button>
        </section>
      </tr>
    );
  });

  return (
    <div className="order-list">
      <div className="container">
        <h2>Current Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Drink</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>{orders}</tbody>
        </table>
        {!orders.length && <div className="alert">Waiting for orders...</div>}
      </div>
    </div>
  );
}
