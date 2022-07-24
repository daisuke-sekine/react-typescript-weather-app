type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  }
}

const Results = ({results}: ResultsPropsType) => {
  const {country, cityName, temperature, conditionText, icon} = results;
  return (
   <>
    {country && <div>{country}</div>}
    {cityName && <div>{cityName}</div>}
    {temperature && <div>{temperature}<span>°C</span></div>}
    {icon &&
    <div>
      <img src={icon} alt="icon" />
      <span>{conditionText}</span>
    </div>}
   </>
  );
};

export default Results;