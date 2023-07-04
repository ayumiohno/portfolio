import { Grid, Typography } from '@mui/material'
import { List, ListItem } from '@mui/material'
import { Experience } from '../molecules/Experience'
import { Profile } from '../molecules/Profile'
import { Articles } from '../molecules/Articles'

export const Home = () => {
	return (
		<Grid container direction="column" paddingY={10} gap={5} paddingX={2} maxWidth={1000} marginRight="auto" marginLeft="auto">
			<Profile />
			<div>
				<Typography fontSize={25} textAlign={'left'}>
					Education
				</Typography>
				<List>
					<ListItem>東京大学理学部理学部情報科学科B3</ListItem>
					<ListItem>筑波大学付属高等学校2021卒業</ListItem>
				</List>
			</div>
			<Experience />
			<div>
				<Typography fontSize={25} textAlign={'left'}>
					Hackathon
				</Typography>
				<List>
					<ListItem>Build@Mercari : Best Score Award</ListItem>
				</List>
			</div>
			<Articles />
			<div>
				<Typography fontSize={25} textAlign={'left'}>
					Certifications
				</Typography>
				<List>
					<ListItem>AWS Certified Cloud Practitioner</ListItem>
					<ListItem>応用情報技術者</ListItem>
				</List>
			</div>
			<div>
				<Typography fontSize={25} textAlign={'left'}>
					Awards
				</Typography>
				<List>
					<ListItem>European Girls' Mathematical Olympiad (EGMO) 2020 日本代表</ListItem>
					<ListItem>物理チャレンジ2020 銀賞</ListItem>
					<ListItem>化学グランプリ2020 金賞</ListItem>
				</List>
			</div>
		</Grid>
	)
}
