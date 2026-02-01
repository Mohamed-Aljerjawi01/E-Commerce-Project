import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useProfileQuery } from './../../Hooks/useQuery';
import { useTranslation } from 'react-i18next';

function ProfileOrders() {
  const { data, isLoading, isError } = useProfileQuery();
  console.log(data);

  const { t } = useTranslation();

  return <>
    {isLoading ? <Box sx={{textAlign:"center"}}>
        <CircularProgress sx={{ color:"#80b501"}}/>
      </Box> :
      isError ? <Typography sx={{ color: "red", fontWeight: "bold", textAlign: "center" }}>Error</Typography> :
        <TableContainer
          component={Paper}
          sx={{ overflowX: "auto", textAlign: "center", marginBottom: "50px", maxHeight: '500px' }}
        >
          <Table margin={"100px 0"} sx={{ minWidth: 900, }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center", fontWeight: "bold", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{t('Id')}</TableCell>
                <TableCell sx={{ textAlign: "center", fontWeight: "bold", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{t('Amount Paid')}</TableCell>
                <TableCell sx={{ textAlign: "center", fontWeight: "bold", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{t('Payment Status')}</TableCell>
                <TableCell sx={{ textAlign: "center", fontWeight: "bold", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{t('Status')}</TableCell>
                <TableCell sx={{ textAlign: "center", fontWeight: "bold", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{t('Order Date')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.orders.map(function (order) {
                return <TableRow key={order.id}>
                  <TableCell sx={{ textAlign: "center", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{order.id}</TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{order.amountPaid}</TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{order.paymentStatus}</TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{order.status}</TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "16px", border: "1px solid rgba(128, 128, 128, 0.5)" }}>{order.orderDate}</TableCell>
                </TableRow>
              })}
            </TableBody>
          </Table>
        </TableContainer>
    }
  </>
}

export default ProfileOrders
