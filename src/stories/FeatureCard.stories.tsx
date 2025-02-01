import type { Meta, StoryObj } from '@storybook/react';
import { FeatureCard } from '../components/FeatureCard';
import { Search, Radio, Heart } from 'lucide-react';

const meta = {
  title: 'Components/FeatureCard',
  component: FeatureCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSearch: Story = {
  args: {
    icon: Search,
    title: 'Any browser, any device.',
    description: 'Identify returning web and mobile app visitors on all browsers, iOS, and Android, with exceptional accuracy.',
    dotsReq: false
  },
};

export const WithRadio: Story = {
  args: {
    icon: Radio,
    title: 'Identify all anonymous visitors.',
    description: 'Get details on suspicious visitors even when VPN, incognito mode, or a tampered browser or device is used.',
    dotsReq: true
  },
};

export const WithHeart: Story = {
  args: {
    icon: Heart,
    title: 'Delight your trusted users.',
    description: 'Personalize user experience and reduce 2FA and OTP requirements by identifying logged-out users.',
    dotsReq: false
  },
};