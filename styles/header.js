
//import theme from '../configuration/palette';

export default ( theme ) => {

	return {

		back 	: {

			control : {
				alignItems 		: 'center' 	,
				flexDirection 	: 'row' 	,
				paddingLeft 	: 10
			} ,

			text : {
				color 		: theme.secondary 	,
				fontSize 	: 18 				,
				fontWeight 	: 'normal' 			,
				paddingLeft : 5
			}

		} ,

		left 	: {

			control : {
				alignItems 		: 'center' 	,
				flexDirection 	: 'row'		,
				paddingLeft 	: 5 		,
				paddingRight 	: 10
			} ,

			text : {
				color 		: theme.secondary 	,
				fontSize 	: 18 				,
				fontWeight 	: 'normal' 			,
				paddingLeft : 5
			}
		} ,

		right 	: {

			control : {
				alignItems 		: 'center' 	,
				flexDirection 	: 'row' 	,
				paddingRight 	: 10
			} ,

			text : {
				color 		: theme.secondary 	,
				fontSize 	: 18 				,
				fontWeight 	: 'normal' 			,
				paddingLeft : 5
			} ,

			icon : {
				marginHorizontal 	: 15 ,
				marginTop 			: 2
			}
		} ,

		header 	: {
			backgroundColor 	: theme.chrome 	,
			borderBottomColor 	: theme.chrome 	,
			elevation 			: 0
		} ,

		icon : {
			height 		: 16 ,
			marginRight : 10 ,
			width 		: 16
		} ,
	
		title 	: {
			alignSelf 	: 'center' 		,
			color 		: theme.body 	,
			fontSize 	: 18 			,
			fontWeight 	: 'normal' 		,
			textAlign 	: 'center'
		}
	};
};