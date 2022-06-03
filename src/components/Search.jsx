import styles from "./Search.module.css"
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery"
import TextField from '@mui/material/TextField';


export function Search() {

    const query = useQuery()
    const search = query.get("search")

    const history = useHistory();

    
    const hadleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className={styles.searchContainer} onSubmit={hadleSubmit}>
          <div className={styles.searchBox}>

              {/* <input className={styles.searchInput} type="text" placeholder="Buscar películas" value={search} onChange={(e) => {
                    const value = e.target.value;
                    history.push("/?search="+value)
                }} /> */}
              <TextField
                sx={
                    {
                        width: 800,
                        maxWidth: 900,
                    }
                    } 
                autoComplete="off"
                label="Buscar..." 
                variant="filled" 
                focused
                value={search} 
                onChange={(e) => {
                const value = e.target.value;
                history.push("/?search="+value)
                }}
              />
                

          </div>
        </form>
    )
}
