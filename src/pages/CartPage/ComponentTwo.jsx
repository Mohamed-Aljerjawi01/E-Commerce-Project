import img1 from "./../../assets/media/imges/details-01.png"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { useCartQuery } from "../../Hooks/useQuery"
import CircularProgress from "@mui/material/CircularProgress"
import { useRemoveAllCartMutation, useRemoveFromCartMutation, useUpdateQuantityMutation } from "../../Hooks/useMutation"
import Button from "@mui/material/Button"
import { useTranslation } from "react-i18next"
import TableContainer from "@mui/material/TableContainer"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import TableBody from "@mui/material/TableBody"
import TableFooter from "@mui/material/TableFooter"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../Store/MyStore"
import { useMediaQuery, useTheme } from '@mui/material';

function ComponentTwo() {
    const { data, isLoading, isError } = useCartQuery();
    console.log(data);

    const { mutate: removeFromCart, variables } = useRemoveFromCartMutation();
    // console.log(variables);

    const { mutate: removeAllCart, isPending:isPendingRemoveAllCart } = useRemoveAllCartMutation();

    const { mutate: updateQnt, isPending } = useUpdateQuantityMutation();

    const mode = useAuthStore(state=> state.mode);
    const countCart = useAuthStore(state=> state.countCart);

    const theme = useTheme();
    const downMd = useMediaQuery(theme.breakpoints.down('md'));

    const { t } = useTranslation();

    const navigate = useNavigate();

    return <>
        <Container sx={{ marginTop: "100px", marginBottom: "100px" }}>
            {
                isLoading ? <Box sx={{textAlign:"center"}}>
                        <CircularProgress sx={{ color:"#80b501"}}/>
                    </Box> :
                    isError ? <Typography sx={{ color: "red", fontWeight: "bold", textAlign: "center" }}>Error</Typography> :
                        <Box>
                            <TableContainer
                                component={Paper}
                                sx={{ overflowX: "auto", textAlign: "center", marginBottom: "50px" }}
                            >
                                <Table margin={"100px 0"} sx={{ minWidth: '100%' }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ textAlign: "center", fontWeight: "bold", fontSize: "16px", border:"1px solid rgba(128, 128, 128, 0.5)" }}>{t('Image')}</TableCell>
                                            <TableCell sx={{ textAlign: "center", fontWeight: "bold", fontSize: "16px", border:"1px solid rgba(128, 128, 128, 0.5)" }}>{t('Product')}</TableCell>
                                            <TableCell sx={{ textAlign: "center", fontWeight: "bold", fontSize: "16px", border:"1px solid rgba(128, 128, 128, 0.5)" }}>{t('Unit Price')}</TableCell>
                                            <TableCell sx={{ textAlign: "center", fontWeight: "bold", fontSize: "16px", border:"1px solid rgba(128, 128, 128, 0.5)" }}>{t('Quantity')}</TableCell>
                                            <TableCell sx={{ textAlign: "center", fontWeight: "bold", fontSize: "16px", border:"1px solid rgba(128, 128, 128, 0.5)" }}>{t('Total')}</TableCell>
                                            <TableCell sx={{ textAlign: "center", fontWeight: "bold", fontSize: "16px", border:"1px solid rgba(128, 128, 128, 0.5)" }}>{t('Remove')}</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.items.map(function (item) {
                                            return <TableRow key={item.productId}>
                                                <TableCell sx={{ textAlign: "center", border:"1px solid rgba(128, 128, 128, 0.5)" }}><img src={img1} alt="" width={"120px"} height={"120px"} /></TableCell>
                                                <TableCell sx={{ textAlign: "center", fontSize: "16px", border:"1px solid rgba(128, 128, 128, 0.5)" }}>{item.productName}</TableCell>
                                                <TableCell sx={{ textAlign: "center", fontSize: "16px", border:"1px solid rgba(128, 128, 128, 0.5)" }}>{`$${item.price}`}</TableCell>
                                                <TableCell sx={{ textAlign: "center", border:"1px solid rgba(128, 128, 128, 0.5)" }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", padding: "10px 10px", border: "1px solid rgba(128, 128, 128,0.5);", width: "fit-content", margin: "auto" }}>
                                                        <RemoveIcon sx={{ color: mode==="dark"?"gray":"rgba(0, 0, 0,0.6)", cursor: "pointer" }} onClick={function () { updateQnt({ ProductId: item.productId, count: item.count - 1 }) }} /><Typography component={"span"} sx={{ padding: "0 20px", color:mode==="dark"?"#fff":"rgba(0, 0, 0,0.6)" }}>{item.count}</Typography><AddIcon sx={{ color: mode==="dark"?"gray":"rgba(0, 0, 0,0.6)", cursor: "pointer" }} onClick={function () { updateQnt({ ProductId: item.productId, count: item.count + 1 }) }} />
                                                    </Box>
                                                </TableCell>
                                                <TableCell sx={{ textAlign: "center", fontSize: "16px", border:"1px solid rgba(128, 128, 128, 0.5)" }}>{`$${item.totalPrice}`}</TableCell>
                                                <TableCell sx={{ textAlign: "center", fontSize: "16px", border:"1px solid rgba(128, 128, 128, 0.5)" }}>
                                                    <Button onClick={function () { removeFromCart({ ProductId: item.productId }) }} sx={{ color: "gray" }}>
                                                        {variables?.ProductId == item.productId ? <CircularProgress color="#80b501"/> : <ClearIcon />}
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        })}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell sx={{ textAlign: "center", fontSize: "16px", border:"1px solid rgba(128, 128, 128, 0.5)" }}>{t('Cart Totals')}</TableCell>
                                            <TableCell colSpan={5} sx={{ textAlign: "center", fontSize: "16px", border:"1px solid rgba(128, 128, 128, 0.5)" }}>${data.cartTotal}</TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </TableContainer>
                            <Box sx={{ display: "flex", justifyContent: "center", gap: downMd?3:10, alignItems: "center", flexWrap:"wrap" }}>
                                <Button sx={{ backgroundColor: "#80b501", color: "#fff", padding: "15px 30px", borderRadius: "50px", fontSize: "16px" }} onClick={function(){navigate('/checkout')}}>{t('proceed to checkout')}</Button>
                                <Button sx={{ backgroundColor: "#80b501", color: "#fff", padding: "15px 30px", borderRadius: "50px", fontSize: "16px" }} onClick={function(){navigate('/home')}}>{t('continue shopping')}</Button>
                                <Button sx={{ backgroundColor: isPendingRemoveAllCart?"rgba(128, 128, 128,0.5)":"#80b501", color: "#fff", padding: "15px 30px", borderRadius: "50px", fontSize: "16px", display:countCart>=1?"block":"none" }} disabled={isPendingRemoveAllCart} onClick={removeAllCart}>{t('clear cart')}</Button>
                            </Box>
                        </Box>
            }
        </Container>
    </>
}

export default ComponentTwo
