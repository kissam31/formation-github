
import './search-box.styles.css';
const SearchBox = (props) =>
{

        return(
            <input 
            className=  {`search-box ${props.className}`} //'search-box'
            type={props.type}  //'search' 
            placeholder = {props.placeholder} //'search monsters' 
            onChange={props.onChangeHandler}
            />
        );
    }

export default SearchBox