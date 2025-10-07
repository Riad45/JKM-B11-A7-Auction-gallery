const SideCard = ({ bidItems }) => {


  
  
  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="">
              <th className="text-center text-xl">Bid Items</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="text-center ">
                <h3 className="text-lg font-bold">No Bid Item yet</h3> <br />
                <p className="px-5">
                  Click the heart icon on any item to add it to your favorites
                </p>
              </td>
            </tr>

            { bidItems.map((item) => 
              <tr key={item.id}>
                <td>
                  <h1>name: {item.title} </h1>
                </td>
              </tr>
            )}

            <tr>
              <td className="flex justify-between text-lg font-bold ">
                <h3>Total Bid Amount</h3>
                <h3>$0000</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SideCard;
