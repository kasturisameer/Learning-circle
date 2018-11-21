import 'isomorphic-fetch';
import { fetchData } from './actions';
const middleware = store => next => action =>{
        if (!action || !action.config) {
            return next(action);
        }
        const dispatch = store.dispatch;
        const config = action.config;
        const successHandler = action.config.success;

        $.ajax({
            type: config.method,
            url: config.apiUrl,
            data: config.data,
            success: function(json){
                if (successHandler) {
                    if (Array.isArray(successHandler)) {
                        successHandler.map(x => dispatch(x(json)));
                    } else {
                        dispatch(successHandler(json));
                    }
                }
            }
        });
}

export default middleware;