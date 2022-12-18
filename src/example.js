
const app = () => {

    // application state below

    const [location, setLocation] = useState('');
    const [temp, setTemp] = useState('');
    const [outfit, setOutfit] = useState('');

    // application functionality below

    const searchLocation = (input) => {
        // search for location based on input
        // on success -> search for outfit based on temp
        input.preventDefault();
        axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }

    const searchOutfit = (temp) => {
        // search for outfit based on temp
        // on success -> set outfit
        
    }

    // render section below

    if (outfit) {
        return <outfit outfit={outfit}></outfit>;
    }

    return (
        <form onSearch={searchLocation}></form>
    );

}

export default app;



