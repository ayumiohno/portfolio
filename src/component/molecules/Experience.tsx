import { Box, Table, TableHead, TableBody, TableCell, TableRow, Typography } from '@mui/material'
export const Experience = () => {
	return (
		<div>
			<Typography fontSize={25} textAlign={'left'}>
				Experience
			</Typography>
			<Box justifyContent={'center'}>
				<Table>
					<TableHead>
						<TableCell>
							Period
						</TableCell>
						<TableCell>
							Company
						</TableCell>
						<TableCell>
							Keywords
						</TableCell>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>2022/8 ~ 2022/9 (2 mon)</TableCell>
							<TableCell>Google STEP Intern</TableCell>
							<TableCell>C++, SQL</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>2022/10 ~ present (10 mon)</TableCell>
							<TableCell>アダコテック intern</TableCell>
							<TableCell>C++, Python, TypeScript, React</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>2021/4 ~ 2023/3 (2 years)</TableCell>
							<TableCell>東進東大特進コーススタッフ</TableCell>
							<TableCell>校舎運営, 電話, 講演, Python, TypeScript, React</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Box>
		</div>
	)
}
