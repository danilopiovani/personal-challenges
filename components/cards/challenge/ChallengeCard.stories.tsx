import { ComponentMeta, ComponentStory } from '@storybook/react';
import ChallengeCard, { IChallengeCard } from './ChallengeCard';
import { mockChallengeCardProps } from './ChallengeCard.mocks';

export default {
  title: 'cards/ChallengeCard',
  component: ChallengeCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ChallengeCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChallengeCard> = (args) => (
  <ChallengeCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockChallengeCardProps.base,
} as IChallengeCard;
