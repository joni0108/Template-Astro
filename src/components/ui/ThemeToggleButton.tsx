import KEYS from '../../constants/keys'
import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

function ToggleThemeIcon() {
	const [theme, setTheme] = useState<string>(localStorage.getItem(KEYS.THEME) ?? 'light')

	function handleClick() {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	useEffect(() => {
		document.documentElement.classList.remove('light', 'dark')
		document.documentElement.classList.add(theme)
		localStorage.setItem(KEYS.THEME, theme)
	}, [theme])

	return (
		<button onClick={handleClick}>
			{theme === 'light' ? <FaSun size={40} /> : <FaMoon size={40} />}
		</button>
	)
}

export default ToggleThemeIcon
