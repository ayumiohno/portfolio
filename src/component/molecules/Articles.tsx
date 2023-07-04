import { Typography, List, ListItem, Link } from '@mui/material'

export const Articles = () => {
	return (
		<div>
			<Typography fontSize={25} textAlign={'left'}>
				Articles
			</Typography>
			<List>
				<Link href="https://note.com/toshin_todai_/n/n933e7d35ebaf">
					<ListItem>
						進学選択体験記
					</ListItem>
				</Link>
				<Link href="https://note.com/toshin_todai_/n/n2b70276aa323">
					<ListItem>
						STEPインターン体験記
					</ListItem>
				</Link>
			</List>
		</div>
	)
}
