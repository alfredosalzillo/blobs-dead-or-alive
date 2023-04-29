import type { Metadata } from 'next';

import TermsAndConditions from '@/TERMS_AND_CONDITIONS.md';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
};

const TermsAndConditionsPage = () => <TermsAndConditions />;

export default TermsAndConditionsPage;
