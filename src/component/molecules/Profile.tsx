import { Grid, Typography } from '@mui/material'
import { Icons } from '../molecules/Icons'

export const Profile = () => {
	return (
		<Grid container alignItems={"center"} justifyContent="center" direction="column" gap={1}>
			<img src="icon.png" alt="noimage" style={{ width: 180, height: 180, borderRadius: 90 }} />
			<Typography fontSize={50} fontStyle="inherit">
				Ayumi Ohno
			</Typography>
			<Icons />
		</Grid>
	)
}
