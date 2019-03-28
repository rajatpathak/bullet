

export default ( theme ) => {

	return { 
		ajax : {

			text : {
				color 		: theme.body 	,
				fontSize 	: 16 			,
				textAlign 	: 'center'
			} ,

			view : {
				alignItems 			: 'center' 		,
				backgroundColor 	: theme.base 	,
				borderColor 		: theme.border 	,
				borderBottomWidth 	: 1 			,
				borderTopWidth 		: 1 			,
				flex 				: 1  			,
				flexDirection 		: 'column' 		,
				justifyContent 		: 'center' 		,
				paddingBottom 		: 25 			,
				paddingHorizontal 	: 15 			,
				paddingTop 			: 15
			}
		}
	};

};