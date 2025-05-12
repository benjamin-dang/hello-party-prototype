import { createContext, useReducer } from 'react';

import { SurveyReducer, initialSurveyState } from '../Reducers/SurveyReducer';

export const SurveyContext = createContext(null);

const SurveryProvider = ({ children }) => {
    const [surveyData, dispatch] = useReducer(SurveyReducer, initialSurveyState);

    return (
        <SurveyContext.Provider value={{ surveyData, dispatch }}>
            {children}
        </SurveyContext.Provider>
    )

}

export default SurveryProvider;