import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './Header.css';
import { Link } from 'react-router-dom';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness2Icon from '@material-ui/icons/Brightness2';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		[theme.breakpoints.down('xs')]: {
			flexGrow: 1,
		},
	},
	headerOptions: {
		display: 'flex',
		flex: 1,
		justifyContent: 'flex-end',
	},
}));

export const Header = (props) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static" elevation={0} data-testId="header-appbar">
				<Toolbar className={props.theme === 'light' ? 'header' : 'headerDark'} data-testId="header-toolbar">
					<Typography
						variant="h6"
						style={{ marginTop: 10 }}
						className={classes.title}
						data-testId="header-typography"
					>
						<Link to="/">
							<img
								src="https://user-images.githubusercontent.com/71087810/117496553-d5af7b00-af94-11eb-84bb-913a1f386811.png"
								alt=""
								style={{ width: 100 }}
								className="logo__img"
							/>
						</Link>
					</Typography>

					{isMobile ? (
						<>
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="menu"
								onClick={handleMenu}
							>
								<MenuIcon className={props.theme === 'light' ? 'header__ham' : 'header__hamDark'} />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={open}
								onClose={() => setAnchorEl(null)}
							>
								{props.theme === 'light' ? (
									<>
										<Link to="/about" style={{ padding: 0, textDecoration: 'none' }}>
											<MenuItem style={{ color: 'black' }}>About</MenuItem>
										</Link>
										<Link to="/covidinfo" style={{ padding: 0, textDecoration: 'none' }}>
											<MenuItem style={{ color: 'black' }}>COVID19 Information</MenuItem>
										</Link>
									</>
								) : (
									<>
										<Link
											to="/about"
											style={{
												padding: 0,
												textDecoration: 'none',
												color: 'white',
											}}
										>
											<MenuItem>About</MenuItem>
										</Link>
										<Link
											to="/covidinfo"
											style={{
												padding: 0,
												textDecoration: 'none',
												color: 'white',
											}}
										>
											<MenuItem>COVID19 Information</MenuItem>
										</Link>
									</>
								)}
								<a
									href="https://github.com/stephin007/Cowin-Vaccine-Availablity-Checker/"
									target="_blank"
									rel="noreferrer"
									style={{ textDecorationLine: 'none' }}
								>
									{props.theme === 'light' ? (
										<MenuItem style={{ color: 'black' }}>Contribute</MenuItem>
									) : (
										<MenuItem style={{ color: 'white' }}>Contribute</MenuItem>
									)}
								</a>{' '}
								<MenuItem onClick={props.toggleTheme}>
									{props.theme === 'light' ? (
										<Brightness7Icon style={{ marginLeft: 30, color: 'black' }} />
									) : (
										<Brightness2Icon style={{ marginLeft: 30, color: 'black' }} />
									)}
								</MenuItem>
							</Menu>
						</>
					) : (
						<div className={classes.headerOptions}>
							{props.theme === 'light' ? (
								<>
									<Link
										to="/about"
										style={{
											padding: 0,
											textDecoration: 'none',
											color: 'black',
										}}
									>
										<MenuItem>About</MenuItem>
									</Link>
									<Link
										to="/covidinfo"
										style={{
											padding: 0,
											textDecoration: 'none',
											color: 'black',
										}}
									>
										<MenuItem>COVID19 Information</MenuItem>
									</Link>
								</>
							) : (
								<>
									<Link
										to="/about"
										style={{
											padding: 0,
											textDecoration: 'none',
											color: 'white',
										}}
									>
										<MenuItem>About</MenuItem>
									</Link>
									<Link
										to="/covidinfo"
										style={{
											padding: 0,
											textDecoration: 'none',
											color: 'white',
										}}
									>
										<MenuItem>COVID19 Information</MenuItem>
									</Link>
								</>
							)}
							<a href="https://github.com/stephin007/Cowin-Vaccine-Availablity-Checker/">
								{props.theme === 'light' ? (
									<MenuItem style={{ color: 'black' }}>Contribute</MenuItem>
								) : (
									<MenuItem style={{ color: 'white' }}>Contribute</MenuItem>
								)}
							</a>
							<MenuItem onClick={props.toggleTheme} data-testId="header-toggleTheme">
								{' '}
								{props.theme === 'light' ? (
									<Brightness2Icon style={{ color: 'black' }} />
								) : (
									<Brightness7Icon style={{ color: 'white' }} />
								)}
							</MenuItem>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
