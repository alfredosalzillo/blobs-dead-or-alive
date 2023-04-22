import { Metadata } from 'next';
import PrivacyPolicy from './privacy-policy.mdx';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

const PrivacyPolicyPage = () => <PrivacyPolicy />;

export default PrivacyPolicyPage;
