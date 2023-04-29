import type { Metadata } from 'next';

import TermsAndConditions from './terms-and-conditions.mdx';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
};

const TermsAndConditionsPage = () => <TermsAndConditions />;

export default TermsAndConditionsPage;
