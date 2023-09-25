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
							<TableCell>2023/9 ~ 2023/10 (6 wks)</TableCell>
							<TableCell>Recruit (Recruit Internship for Data Specialists)</TableCell>
							<TableCell>Data Engineer, GCP, Python</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>2023/8 (4 wks)</TableCell>
							<TableCell>Fast Retailing (Global Buisiness Internship)</TableCell>
							<TableCell>Infrastructure Engineer, AWS, Python</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>2022/10 ~ present</TableCell>
							<TableCell>アダコテック インターン</TableCell>
							<TableCell>Engineer, C++, Python, TypeScript, React, OpenCV, Anomaly Detection</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>2022/8 ~ 2022/9 (2 mos)</TableCell>
							<TableCell>Google (STEP Intern)</TableCell>
							<TableCell>Software Engineer, C++, SQL</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>2021/4 ~ 2023/3</TableCell>
							<TableCell>東進東大特進コーススタッフ</TableCell>
							<TableCell>校舎運営, 電話掛け, 座談会パネラー, Python, TypeScript, React</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Box>
		</div>
	)
}
