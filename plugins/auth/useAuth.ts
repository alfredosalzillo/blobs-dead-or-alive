import React from 'react';

import AuthContext from './AuthContext';

const useAuthContext = () => React.useContext(AuthContext);

export default useAuthContext;
