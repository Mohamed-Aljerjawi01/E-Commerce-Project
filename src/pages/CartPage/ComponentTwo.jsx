import style from "./style.module.css"
import img1 from "./../../assets/media/imges/details-01.png"
import img2 from "./../../assets/media/imges/details-02.png"
import img3 from "./../../assets/media/imges/details-03.png"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

function ComponentTwo() {
  return <>
    <Container>
        <Box component={"table"} width={"100%"} margin={"100px 0"} className={`${style.textAlign}`}>
            <thead>
                <tr>
                    <th>Images</th>
                    <th>Product</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src={img1} alt="" width={"120px"} height={"120px"} /></td>
                    <td>Organic Avocado</td>
                    <td>$24.00</td>
                    <td>
                        <Box sx={{display:"flex", alignItems:"center", padding: "10px 10px", border: "1px solid rgba(128, 128, 128,0.5);", color: "gray", width:"fit-content", margin:"auto"}}>
                            <RemoveIcon sx={{color:"rgba(0, 0, 0,0.6)"}} /><Typography component={"span"} sx={{ padding: "0 20px", color: "rgba(0, 0, 0,0.7)" }}>1</Typography><AddIcon sx={{color:"rgba(0, 0, 0,0.6)"}}/>
                        </Box>
                    </td>
                    <td>$24.00</td>
                    <td><ClearIcon></ClearIcon></td>
                </tr>
                <tr>
                    <td><img src={img2} alt="" width={"120px"} height={"120px"} /></td>
                    <td>Fresh Orange</td>
                    <td>$12.00</td>
                    <td>
                        <Box sx={{display:"flex", alignItems:"center", padding: "10px 10px", border: "1px solid rgba(128, 128, 128,0.5);", color: "gray", width:"fit-content", margin:"auto"}}>
                            <RemoveIcon sx={{color:"rgba(0, 0, 0,0.6)"}} /><Typography component={"span"} sx={{ padding: "0 20px", color: "rgba(0, 0, 0,0.7)" }}>1</Typography><AddIcon sx={{color:"rgba(0, 0, 0,0.6)"}}/>
                        </Box>
                    </td>
                    <td>$12.00</td>
                    <td><ClearIcon></ClearIcon></td>
                </tr>
                <tr>
                    <td><img src={img3} alt="" width={"120px"} height={"120px"} /></td>
                    <td>Apricot Fruit</td>
                    <td>$42.00</td>
                    <td>
                        <Box sx={{display:"flex", alignItems:"center", padding: "10px 10px", border: "1px solid rgba(128, 128, 128,0.5);", color: "gray", width:"fit-content", margin:"auto"}}>
                            <RemoveIcon sx={{color:"rgba(0, 0, 0,0.6)"}} /><Typography component={"span"} sx={{ padding: "0 20px", color: "rgba(0, 0, 0,0.7)" }}>1</Typography><AddIcon sx={{color:"rgba(0, 0, 0,0.6)"}}/>
                        </Box>
                    </td>
                    <td>$42.00</td>
                    <td><ClearIcon></ClearIcon></td>
                </tr>
            </tbody>
        </Box>
    </Container>
  </>
}

export default ComponentTwo
