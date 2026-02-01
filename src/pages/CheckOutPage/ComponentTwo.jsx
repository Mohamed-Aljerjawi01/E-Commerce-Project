import { useCartQuery } from '../../Hooks/useQuery';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableFooter from '@mui/material/TableFooter';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { useTranslation } from 'react-i18next';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useCheckoutwMutation } from '../../Hooks/useMutation';
import Button from '@mui/material/Button';
import { useTheme, useMediaQuery } from '@mui/material';

function ComponentTwo() {
    const { data, isLoading, isError } = useCartQuery();
    console.log(data);

    const [paymentMethod, setPaymentMethod] = useState('Cash');

    const { mutate: Checkout, isPending } = useCheckoutwMutation();

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));

    const { t } = useTranslation();

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
                                sx={{ overflowX: "auto", marginBottom: "50px" }}
                            >
                                <Table sx={{ minWidth: '100%' }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ textAlign: "center", fontWeight: "bold", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{t('Product')}</TableCell>
                                            <TableCell sx={{ textAlign: "center", fontWeight: "bold", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{t('Total')}</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.items.map(function (item) {
                                            return <TableRow key={item.productId}>
                                                <TableCell sx={{ textAlign: "center", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>
                                                    {item.productName} <Typography component={'span'} sx={{ fontWeight: "bold" }}>x{item.count}</Typography>
                                                </TableCell>
                                                <TableCell sx={{ textAlign: "center", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{`$${item.totalPrice}`}</TableCell>
                                            </TableRow>
                                        })}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell sx={{ textAlign: "center", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{t('Cart Totals')}</TableCell>
                                            <TableCell colSpan={2} sx={{ textAlign: "center", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)", color: "#80b501", fontWeight: "bold" }}>${data.cartTotal}</TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </TableContainer>
                            <Box sx={{ display: "flex", flexDirection: isXs?"column":"row", gap: 5 }}>
                                <Box sx={{ minWidth: 300 }}>
                                    <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                        <InputLabel id="paymentMethod">{t('Payment Method')}</InputLabel>
                                        <Select
                                            labelId="paymentMethod"
                                            label="paymentMethod"
                                            onChange={function (e) { setPaymentMethod(e.target.value) }}
                                        >
                                            <MenuItem value={"Cash"}>{t('Cash')}</MenuItem>
                                            <MenuItem value={"Visa"}>{t('Visa')}</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Button sx={{ backgroundColor: isPending?'rgba(128, 128, 128,0.5)':'#80b501', color: "#fff", padding: "15px 30px", borderRadius: "50px", fontSize: "16px" }} disabled={isPending} onClick={function(){Checkout({PaymentMethod: paymentMethod})}}>{t('Check Now')}</Button>
                            </Box>
                        </Box>
            }
        </Container>
    </>
}

export default ComponentTwo
