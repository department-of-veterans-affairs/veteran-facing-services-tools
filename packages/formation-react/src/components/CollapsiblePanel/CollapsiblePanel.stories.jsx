import React from 'react';
import CollapsiblePanel from './CollapsiblePanel';

export default {
  title: 'Library/CollapsiblePanel',
  component: CollapsiblePanel,
};

const Template = (args) => (
  <CollapsiblePanel {...args}>
    <div>Panel contents go here.</div>
  </CollapsiblePanel>
);

const defaultArgs = {
  panelName: 'Collapsible panel example',
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Borderless = Template.bind({});
Borderless.args = { ...defaultArgs, borderless: true };
