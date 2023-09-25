import { Typography, List, ListItem, Link } from '@mui/material'

export const Articles = () => {
	return (
		<div>
			<Typography fontSize={25} textAlign={'left'}>
				Articles
			</Typography>
			<List>
				<ListItem>
					<Link href="https://note.com/toshin_todai_/n/n933e7d35ebaf">
						進学選択体験記
					</Link>
				</ListItem>
				<ListItem>
					<Link href="https://note.com/toshin_todai_/n/n2b70276aa323">
						STEPインターン体験記
					</Link>
				</ListItem>
			</List>
		</div>
	)
}
