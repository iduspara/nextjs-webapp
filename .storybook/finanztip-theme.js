import { create } from '@storybook/theming';

export default create({
	base: 'light',
	brandTitle: 'Finanztip',
	brandUrl: 'https://www.finanztip.de/',
	brandImage: 'https://www.finanztip.de/typo3conf/ext/ft_site/Resources/Public/images/finanztip-logo.svg',

	colorPrimary: '#4650df',
	colorSecondary: '#fc6e44',

	// UI
	appBg: '#243039',
	appContentBg: '#4650df',
	appBorderColor: '#243039',
	appBorderRadius: 4,

	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: 'monospace',

	// Text colors
	textColor: 'white',
	textInverseColor: 'white',

	// Toolbar default and active colors
	barTextColor: '#243039',
	barSelectedColor: '#fc6e44',
	barBg: '#ccf6e5',

	// Form colors
	inputBg: 'white',
	inputBorder: '#243039',
	inputTextColor: '#243039',
	inputBorderRadius: 4,
});
