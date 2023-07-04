import { GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import { IconButton, Box } from '@mui/material'

export const Icons = () => {
	return (
		<Box sx={{ display: 'flex', gap: '10px', width: 'sx' }}>
			<IconButton href={'https://github.com/ayumiohno'}>
				<GitHub fontSize='large' />
			</IconButton>
			<IconButton href={'https://www.linkedin.com/in/ayumi-ohno-884888278'}>
				<LinkedIn fontSize='large' />
			</IconButton>
			<IconButton href={'https://twitter.com/aym_1_'}>
				<Twitter fontSize='large' />
			</IconButton>
		</Box>
	);
}
