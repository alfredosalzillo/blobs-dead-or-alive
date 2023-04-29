import type { Metadata } from 'next';

import PrivacyPolicy from '@/PRIVACY_POLICY.md';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

const PrivacyPolicyPage = () => <PrivacyPolicy />;

export default PrivacyPolicyPage;
