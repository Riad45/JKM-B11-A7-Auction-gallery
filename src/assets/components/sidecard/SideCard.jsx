import { useState, useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";


const SideCard = ({ bidItems }) => {
  const [totalBidAmount, setTotalBidAmount] = useState(0);

  useEffect(() => {
    const total = bidItems.reduce(
      (accumulator, item) => accumulator + item.currentBidPrice,
      0
    );
    setTotalBidAmount(total);
  }, [bidItems]);

  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center text-xl">Bid Items</th>
            </tr>
          </thead>
          <tbody>
            {bidItems.length !== 0 ? (
              bidItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="flex justify-around items-start gap-5">
                      <img
                        className="h-18 w-18 flex-shrink-0 object-cover rounded"
                        src={item.image}
                        alt="item image"
                      />

                      <div>
                        <h3 className="text-ellipsis"> {item.title}</h3>
                        <div className="mt-5 flex gap-10 ">
                          <h3> ${item.currentBidPrice}</h3>
                          <h3>Bids: {item.bidsCount} </h3>
                        </div>
                      </div>

                      <button>
                        {" "}
                        <MdOutlineCancel size={30} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center">
                  <h3 className="text-lg font-bold">No Bid Item yet</h3> <br />
                  <p className="px-5">
                    Click the heart icon on any item to add it to your favorites
                  </p>
                </td>
              </tr>
            )}

            <tr>
              <td className="flex justify-between text-lg font-bold ">
                <h3>Total Bid Amount</h3>
                <h3>{totalBidAmount}</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SideCard;
