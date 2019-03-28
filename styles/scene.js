
import device 	from '../properties/device';

export default ( theme ) => {

	return {

		body : {
			backgroundColor : theme.base 	,
			borderTopWidth 	: 1 			,
			borderTopColor 	: theme.border 	,
			flex 			: 1 			,
			flexDirection 	: 'column' 		,
			height 			: device.height
		} ,

		header 	: {
			backgroundColor : theme.primary
		}
	};
};
