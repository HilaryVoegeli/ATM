const ATMDeposit = ({onChange, isDeposit, val}) => {
  const choice = ["Deposit", "Cash Back"]
  return (
    <label className="label huge">
     <h3>{choice[Number(!isDeposit)]}</h3>
     <input type="number" onChange={onChange} min="0" step="10"></input>
     <input type="submit" value = "Submit" ></input>
    </label>
  );
};

const Account = () => {
  let deposit = 0; 
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState('');
  let status = `Your Account Balance $ ${totalState}`;
  
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };
  
  const handleSubmit = () => {
    let newTotal = isDeposit ? deposit + totalState: totalState - deposit;
    if (newTotal < 0){
      newTotal = totalState;
      alert ('Not enough cash in your account for this transaction.');
    } else{
    setTotalState(newTotal)};
    event.preventDefault();
  };
  
  const handleModeSelect = (event) => {
    setAtmMode(event.target.value);
    if(event.target.value === "Deposit") setIsDeposit(true);
    if(event.target.value === "Cash Back") setIsDeposit(false);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
      <option id="no-selection" value=""></option>
      <option id="deposit-selection" value="Deposit">Deposit</option>
      <option id="cashback-selection" value="Cash Back">Cash Back</option>
      </select>
      {atmMode != "" && <h2 id = 'total'>{status}</h2>}
      {atmMode != "" && <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>}
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
